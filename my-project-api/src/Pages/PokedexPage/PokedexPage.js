import React from "react";
import { Header } from "../../Components/Header/Header";
// import { PokemonCard } from "../../Components/PokemonCard/PokemonCard";
import { GlobalContext } from "../../contexts/GlobalContext";
import { useContext } from "react";
// import { useState } from "react";
import { PokemonCard } from "../../Components/PokemonCard/PokemonCard";
import { BASE_URL } from "../../Constantes/url";


export  function PokedexPage() {



    const context = useContext(GlobalContext);

   

    const { pokedex, removeFromPokedex } = context;

    const cardScreen = pokedex.map((pokemon)=>{
        return(
            <PokemonCard 
            key={pokemon.name}
            pokemonUrl={`${BASE_URL}/${pokemon.name}`}
            name={pokemon.data.name} 
            image={pokemon.data.sprites.front_shiny} 
            number={pokemon.data.order}
            removeFromPokedex={removeFromPokedex}
            />
        )
    });

    


    
   

   

    
    



    return ( 
        <div>   
                <Header />
                {cardScreen}
            <header>
                
            </header>
        </div>

    )
};
        