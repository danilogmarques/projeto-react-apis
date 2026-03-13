
import React, { useState, useCallback } from "react";
import { Header } from "../../Components/Header/Header";
import {
    Corpo,
    Status,
    Number,
    Name,
    Poison,
    Moves,
    FirstCard,
    SecondCard,
    Text,
    Fundo,
    Image,
    ContainerImage
} from "./pokemonDetailStyle";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";


export function PokemonDetailPage() {

    const { id } = useParams();

    const [pokemonDetails, setPokemonDetails] = useState([])

    const getPokemons = useCallback(async () => {
        const endpoints = [];
        endpoints.push(`https://pokeapi.co/api/v2/pokemon/${id}/`);
        axios.all(endpoints.map((endpoint) => axios.get(endpoint)))
            .then((response) => setPokemonDetails(response))
            .catch((erro) => {
                console.log(erro.response)
            })
    }, [id]);

    useEffect(() => {

        getPokemons();
    }, [getPokemons]);

    return (
        <div>

            <Header />

            <Fundo>
                {pokemonDetails.map((pokemon) => (
                    <Corpo>
                        <ContainerImage>

                            <FirstCard>
                                <Image alt={pokemon.data.name} src={pokemon.data.sprites.front_default} />
                            </FirstCard>

                            <SecondCard>
                                <Image alt={pokemon.data.name} src={pokemon.data.sprites.back_default} />
                            </SecondCard>
                        </ContainerImage>

                        <Number>{pokemon.data.order}</Number>
                        <Name>{pokemon.data.name}</Name>
                        <Poison>{pokemon.data.types[0].type.name}</Poison>
                        {/* <Glass>{pokemon.data.types[1].type.name}</Glass> */}

                        <Status>
                            <div >
                                <h1>Base stats</h1>
                                <p>HP {pokemon.data.stats[0].base_stat}</p>
                                <p>Attack {pokemon.data.stats[1].base_stat}</p>
                                <p>Defense {pokemon.data.stats[2].base_stat}</p>
                                <p>Sp.Atk {pokemon.data.stats[3].base_stat}</p>
                                <p>Sp.Def {pokemon.data.stats[4].base_stat}</p>
                                <p>Speed {pokemon.data.stats[5].base_stat}</p>
                                <p>Total</p>
                            </div>
                        </Status>

                        <Moves>
                            <h2>Moves:</h2>
                            <Text>{pokemon.data.moves[0].move.name}</Text>
                            <Text>{pokemon.data.moves[1].move.name}</Text>
                            <Text>{pokemon.data.moves[2].move.name}</Text>
                            <Text>{pokemon.data.moves[3].move.name}</Text>
                        </Moves>
                    </Corpo>
                ))}
            </Fundo>

        </div>

    )
};


































