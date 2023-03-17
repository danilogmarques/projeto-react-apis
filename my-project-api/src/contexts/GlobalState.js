import React from "react";
import { GlobalContext } from "./GlobalContext";
import axios from 'axios';
import { useEffect, useState } from "react";

// import { useContext } from "react";


export const GlobalState = (props) => {
    const [pokemons, setPokemons] = useState([]);
    const [ pokedex, setPokedex] = useState([]);
    

    
    useEffect(() => {
        
        getPokemons();
    },[]);

    
    const getPokemons = () => {
        const endpoints = [];
        for (let i = 1; i < 31; i++ ) {
            endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
        }
        axios.all(endpoints.map((endpoints) => axios.get(endpoints)))
        .then((response) => setPokemons(response))
        .catch((erro)=>{
            console.log(erro.response)
        })
    };

    // const addToPokedex = (pokemonToAdd) => {
    //     const isAlreadyOnPokedex = pokedex.find(
    //       (pokemonInPokedex) => pokemonInPokedex.name === pokemonToAdd.name
    //     );
    
    //     if (!isAlreadyOnPokedex) {
    //       const newPokedex = [...pokedex, pokemonToAdd];
    //       setPokedex(newPokedex);
    //     }
    //   };
    


    const addToPokedex = (name, number, image, url, id) => {
        const arrayPokedex = [ ...pokedex ]
        const found = arrayPokedex.find(element => element.name, number, image, url, id === name, number, image, url, id);

        if(!found){
            arrayPokedex.push({name, number, image, url, id})
        }

        setPokedex(arrayPokedex);
    }
    
    const removeFromPokedex = (name) => {
        const newPokedex = pokedex.filter(element => element.name !== name );
        setPokedex(newPokedex);
    }

    
    
    
        



    
        
        
    

   


    

    
        
        
        const data = {
            pokemons, 
            addToPokedex,
            removeFromPokedex,
            pokedex

        }
        
            
            
    
        
        return(
            <GlobalContext.Provider value={data}>
                {props.children}
            </GlobalContext.Provider>
        );
    };

        

        
      
    



    

