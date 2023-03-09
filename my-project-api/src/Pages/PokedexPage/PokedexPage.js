import React from "react";
import { useContext } from "react";
import { Header } from "../../Components/Header/Header";
import { PokemonCard } from "../../Components/PokemonCard/PokemonCard";
import { GlobalContext } from "../../contexts/GlobalContext";


export  function PokedexPage() {

    const context = useContext(GlobalContext);

    const { pokedex } = context;

    console.log(pokedex);



    


    const cardScreen = pokedex.map((pokedex)=>{
    return ( 
        
                <PokemonCard
                 key={pokedex.data.url}
                 name={pokedex.data.name} 
                 image={pokedex.data.sprites.front_default} 
                 number={pokedex.data.order} 
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