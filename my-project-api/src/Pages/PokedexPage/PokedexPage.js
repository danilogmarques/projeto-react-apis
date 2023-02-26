import React from "react";
import { useContext } from "react";
import { Header } from "../../Components/Header/Header";
import { PokemonCard } from "../../Components/PokemonCard/PokemonCard";
import { GlobalContext } from "../../contexts/GlobalContext";


export  function PokedexPage() {

    const context = useContext(GlobalContext);

    console.log(context);

    



    return ( 
        <div>   
            <header>
                {/* <h1>Meus Pokémons</h1> */}
                <Header />
                <PokemonCard />
            </header>
        </div>

    )
};