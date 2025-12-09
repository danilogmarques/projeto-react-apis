import React from "react";
import { useContext } from "react";
import { Header } from "../../Components/Header/Header";
import { PokemonCard } from "../../Components/PokemonCard/PokemonCard";
import { GlobalContext } from "../../contexts/GlobalContext"
import { useState, useEffect } from "react";
import { Pai } from "./pokedexStyle";
import axios from "axios";
import { colorsCard } from "../../utils/ReturnCardColor";

export function PokedexPage() {

    const context = useContext(GlobalContext);
    const { pokedex } = context;
    const [data, setData] = useState([]);

    useEffect(() => {
        getPokedex();
    }, [pokedex]); // Executa quando pokedex muda

    const getPokedex = async () => {
        // Se pokedex estiver vazia, não faz requisição
        if (!pokedex || pokedex.length === 0) {
            setData([]);
            return;
        }

        // Cria requisições para cada pokémon na pokedex
        const endpoints = pokedex.map((poke) => {
            // Se poke tem URL, usa ela; senão monta pela URL padrão
            return poke.url || `https://pokeapi.co/api/v2/pokemon/${poke.id}/`;
        });

        axios.all(endpoints.map((url) => axios.get(url)))
            .then((response) => {
                // Extrai apenas os dados
                const pokemonsData = response.map((res) => res.data);
                setData(pokemonsData);
            })
            .catch((erro) => {
                console.log(erro.response);
            });
    };

    const found = data.map((pokemon) => (
        <PokemonCard
            type={colorsCard(pokemon.types[0].type.name)}
            key={pokemon.id}
            id={pokemon.id}
            name={pokemon.name}
            url={pokemon.species.url}
            type1={pokemon.types[0].type.name}
            type2={pokemon.types[1]?.type.name || pokemon.types[0].type.name}
            image={pokemon.sprites.other["official-artwork"].front_default}
            number={pokemon.order}
        />
    ));

    return (
        <>
            <Header />
            <Pai>
                {found.length > 0 ? found : <p>Nenhum pokémon na pokedex</p>}
            </Pai>
        </>
    );
}