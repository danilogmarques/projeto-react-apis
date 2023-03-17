import React from "react";
import { useContext } from "react";
import { Header } from "../../Components/Header/Header";
import { PokemonCard } from "../../Components/PokemonCard/PokemonCard";
import { GlobalContext } from "../../contexts/GlobalContext";
import { useParams } from "react-router-dom";


export  function PokedexPage() {

    const context = useContext(GlobalContext);

    const { pokedex } = context;

    const {id} = useParams();

    const cardScreen = pokedex.map((pokemon)=>{
    return ( 
        
                <PokemonCard
                 name={pokemon.name} 
                 image={pokemon.image} 
                 number={pokemon.number} 
                 id={pokemon.id}
                
                />
            

    )
});

return (
    <div>
        <Header />
        <main>
            {cardScreen}    

        </main>
        
    </div>
    )
};