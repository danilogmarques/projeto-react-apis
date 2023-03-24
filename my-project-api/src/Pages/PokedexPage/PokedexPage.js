import React from "react";
import { useContext } from "react";
import { Header } from "../../Components/Header/Header";
import { PokemonCard } from "../../Components/PokemonCard/PokemonCard";
import { GlobalContext } from "../../contexts/GlobalContext"
import { useState } from "react";
import { Pai } from "./pokedexStyle";


export function PokedexPage() {

    const context = useContext(GlobalContext);

    const { pokedex, pokemons  } = context;

    const [arrayPokedex, setarrayPokedex] = useState([])
    
    

    
    
    


    const found = pokemons
    .filter(pok=>pok === pokedex)
    found.map((pokemon) => {
        

        return (

            <PokemonCard
                //  key={pokemon.id}
                // id={pokemon.id}
                name={pokemon.data.name}
                // url={pokemon.url}
            // type1={pokemon.data.types[0].type.name}
            // type2={pokemon.data.types[0].type.name}
            // image={pokemon.data.sprites.front_shiny} 
            // number={pokemon.data.order} 


            />


        )
    });
    

    return (
        <div>
            <Header />
            <Pai>
                {found}

            </Pai>

        </div>
    )
};