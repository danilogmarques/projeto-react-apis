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

    const addToPokedex = (pokemonToAdd) => {
        const isAlreadyOnPokedex = pokedex.find(
          (pokemonInPokedex) => pokemonInPokedex.nome === pokemonToAdd.nome
        );
    
        if (!isAlreadyOnPokedex) {
          const newPokedex = [...pokedex, pokemonToAdd];
          setPokedex(newPokedex);
        }
      };
    

   


    

    
        
        
        const data = {
            pokemons, 
            addToPokedex,
            
            pokedex
            
        }
    
        
        return(
            <GlobalContext.Provider value={data}>
                {props.children}
            </GlobalContext.Provider>
        );
    };

        

        
      
    



    

