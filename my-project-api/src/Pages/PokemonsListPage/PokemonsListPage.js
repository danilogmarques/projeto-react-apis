import { Header } from "../../Components/Header/Header"
import { PokemonCard } from "../../Components/PokemonCard/PokemonCard"
// import { useEffect, useState } from "react";
import { Pai } from './pokemonsListStyle'
import { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import { colorsCard } from "../../utils/ReturnCardColor";


 


export function PokemonsListPage() {

    const context = useContext(GlobalContext);

    const { pokemons } = context;

    const cardScreen = pokemons.map((pokemon, index)=>{
        return(
            <PokemonCard 
            type={colorsCard(pokemon.data.types[0].type.name)}
            key={index}
            id={pokemon.data.id}
            name={pokemon.data.name}
            url={pokemon.request.responseURL}
            type1={pokemon.data.types[0].type.name}
            type2={pokemon.data.types[0].type.name}
            image={pokemon.data.sprites.other["official-artwork"].front_default} 
            number={pokemon.data.order} 
            // cardColor={getColors(pokemon.type[0])}
            // cardcolor={colorsCard(pokemon.type[0])}
            />
        );
    });

    return (
    <>
        <Header />
        <Pai>
            {cardScreen}    
        </Pai>
    </>
    )
};































