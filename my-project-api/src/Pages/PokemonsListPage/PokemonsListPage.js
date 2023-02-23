import React from "react";
import { Header } from "../../Components/Header/Header"
import { PokemonCard } from "../../Components/PokemonCard/PokemonCard"
import { Pai } from './pokemonsListStyle'
import { GlobalContext } from "../../contexts/GlobalContext";
import { useContext } from "react";



export function PokemonsListPage() {

    
    
    const context = useContext(GlobalContext);

    console.log(context);

    const { pokelist, addTopokedex, pokedex } = context;
   
    const filteredPokelist = () => 
    pokelist.filter(
        (pokemonInList) => 
        !pokedex.find(
            (pokemonInPokedex) => pokemonInList.name === pokemonInPokedex.name
        )
    );

    
        
    

    const cardScreen = pokemons.map((pokemon)=>{
        return(
            <PokemonCard 
            key={pokemon.id}
            name={pokemon.data.name} 
            image={pokemon.data.sprites.front_shiny} 
            number={pokemon.data.order}/>
        )
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
   

        


    

    

    
        
       

    
    
        
        



    

        
            

        

    















































