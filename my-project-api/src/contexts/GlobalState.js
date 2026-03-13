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
        const savedPokedex = localStorage.getItem('pokedex');
        if (savedPokedex) {
            setPokedex(JSON.parse(savedPokedex));
        }
    },[]);

    useEffect(() => {
        localStorage.setItem('pokedex', JSON.stringify(pokedex));
    }, [pokedex]);

    const getPokemons = async () => {
        const endpoints = [];
        for (let i = 1; i < 31; i++ ) {
            endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
        }
        axios.all(endpoints.map((endpoint) => axios.get(endpoint)))
        .then((response) => setPokemons(response))
        .catch((erro)=>{
            console.log(erro.response)
        })
    };

    const addPokemon = (pokemon) => {
        setPokedex([...pokedex, pokemon]);
    };

    const removePokemon = (pokeId) => {
        setPokedex(pokedex.filter((poke) => poke.id !== pokeId));
    };
    
    const data = {
          pokedex, 
          addPokemon,
          setPokedex,
          pokemons,
          removePokemon,
          removeFromPokedex: removePokemon
        };
        return(
            <GlobalContext.Provider value={data}>
                {props.children}
            </GlobalContext.Provider>
        );
    };
        

          
          
  
    
        

    
      

      

      
    
  



  

    

    
    
    
        



    
        
        
    

   


    

    
        
        