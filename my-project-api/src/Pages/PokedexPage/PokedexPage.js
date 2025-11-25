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

    const { pokedex, pokemons  } = context;

    const [ data, setData ] = useState([])

 useEffect(() => {
          getPokedex();
      },[]);
  
      const getPokedex = async () => {
          const endpoints = [];
          for (let i = 1; i < pokedex.length; i++ ) {
              endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
          }
          axios.all(endpoints.map((endpoints) => axios.get(endpoints)))
          .then((response) => setData(response))
          .catch((erro)=>{
              console.log(erro.response)
          })
      };

      console.log(data);
  
 const found = data
    .map((pokemon) => (
        <PokemonCard
            type={colorsCard(pokemon.data.types[0].type.name)}
            key={pokemon.data.id}
            id={pokemon.data.id}
            name={pokemon.data.name}
            url={pokemon.request.responseURL}
            type1={pokemon.data.types[0].type.name}
            type2={pokemon.data.types[1]?.type.name || pokemon.data.types[0].type.name}
            image={pokemon.data.sprites.other["official-artwork"].front_default} 
            number={pokemon.data.order} 
        />
    ));
    
    return (
        <>
            <Header />
            <Pai>
                {found}
            </Pai>
        </>
    )
};


    
        

    

    
    
    

        
