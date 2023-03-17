import React from "react";
import { useContext } from "react";
import { Header } from "../../Components/Header/Header";
import { PokemonCard } from "../../Components/PokemonCard/PokemonCard";
import { GlobalContext } from "../../contexts/GlobalContext"
import axios from "axios";
import { useState, useEffect } from "react";
import { Pai } from "./pokedexStyle";


export function PokedexPage() {

    const context = useContext(GlobalContext);

    const { pokedex } = context;


    const [getPokedex, setGetPokedex] = useState([]);
    // const [test, setTest] = useState([]);
    



    // useEffect(() => {

    //     getPokemons();
    // }, []);

    // const getPokemons = async () => {
    //     const endpoints = [];
    //     for (let i = 1; i < 31 ; i++ ) {

    //         endpoints.push(`https://pokeapi.co/api/v2/pokemon/${[i]}/`);
    //     }
    //     axios.all(endpoints.map((endpoints) => axios.get(endpoints)))
    //     .then((response) => setGetPokedex(response))
    //     .catch((erro)=>{
    //         console.log(erro)
    //     })
    // };
   
    


    // const getPokemons = async () => {
    //     const pegando = pokedex.forEach((pokemon)=>{
    //         console.log(pokemon)
    //     })}


        // try {
        //   const results = await axios.get(`${pokedex[0]}` ) 
        //   setGetPokedex(results.data) 
        // } catch (error) {
        //   console.log(error.results)  
        // }}



// console.log(pokedex)

// const renderPokedex = (name) => {
//     const arrayPokedex = [ ...test ]
//     const found = getPokedex.find(element => element.name === pokedex.name);

//     if(found){
//         arrayPokedex.push({name})
//     }

//     setTest(arrayPokedex);

// }






    const cardScreen = pokedex.map((pokemon)=>{
    return ( 

                <PokemonCard
                //  key={pokemon.id}
            // id={pokemon.id}
            name={pokemon.name}
            // url={pokemon.data.responseURL}
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
            {cardScreen}    

        </Pai>

    </div>
)
};