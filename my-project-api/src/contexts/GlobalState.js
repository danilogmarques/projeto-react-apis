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

    
    const getPokemons = async () => {
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

    const addPokemon = (pokemon) => {
        setPokedex([...pokedex, pokemon]);
    };

    const removePokemon = (pokeName) => {
        setPokedex(pokedex.filter((poke) => poke.name !== pokeName));
    };
    


    

    // const colorsCard = (type1) => {
    //     switch(type1) {
    //       case "Bug":
    //         return "#316520";
    //       case "Electric":
    //         return "#F4D23B";
    //       case "Fire":
    //         return "#5269AC";
    //       case "Grass":
    //         return "#70B873";
    //       case "Ground":
    //         return "#D97745";
    //       case "Normal":
    //         return "#8A8A8A";
    //       case "Poison":
    //         return "#AD61AE";
    //       case "Water":
    //         return "#33A4F5";
    //       default:
    //         return "#8A8A8A";
    //       }
    //     };
        


      const data = {
          pokedex, 
          addPokemon,
          setPokedex,
          pokemons,
          removePokemon

      };
      
      return(
          <GlobalContext.Provider value={data}>
              {props.children}
          </GlobalContext.Provider>
      );
  };
          
          
  
      

      

      
    
  



  

    

    
    
    
        



    
        
        
    

   


    

    
        
        