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

    // const addToPokedex = (pokemonToAdd) => {
    //     const isAlreadyOnPokedex = pokedex.find(
    //       (pokemonInPokedex) => pokemonInPokedex.name === pokemonToAdd.name
    //     );
    
    //     if (!isAlreadyOnPokedex) {
    //       const newPokedex = [...pokedex, pokemonToAdd];
    //       setPokedex(newPokedex);
    //     }
    //   };
    


    const addToPokedex = (name) => {
        const arrayPokedex = [ ...pokedex ]
        const found = arrayPokedex.find(element => element.name === name);

        if(!found){
            arrayPokedex.push({name})
        }

        setPokedex(arrayPokedex);
    }

    console.log(pokedex)

    
    
    const removeFromPokedex = (name) => {
        const newPokedex = pokedex.filter(element => element.name !== name );
        setPokedex(newPokedex);
    }

    const colorsCard = (type1) => {
        switch(type1) {
          case "Bug":
            return "#316520";
          case "Dark":
            return "#5C5365";
          case "Dragon":
            return "#0A6CBF";
          case "Electric":
            return "#F4D23B";
          case "Fairy":
            return "#EC8FE6";
          case "Fighting":
            return "#CE4069";
          case "Fire":
            return "#F44900";
          case "Flying":
            return "#6892B0";
          case "Ghost":
            return "#5269AC";
          case "Grass":
            return "#70B873";
          case "Ground":
            return "#D97745";
          case "Ice":
            return "#74CEC0";
          case "Normal":
            return "#8A8A8A";
          case "Poison":
            return "#AD61AE";
          case "Psychic":
            return "#F67176";
          case "Rock":
            return "#C7B78B";
          case "Steel":
            return "#BBBBBB";
          case "Water":
            return "#33A4F5";
          default:
            return "#8A8A8A";
        }
      };
    

    

    
    
    
        



    
        
        
    

   


    

    
        
        
        const data = {
            pokemons, 
            addToPokedex,
            removeFromPokedex,
            pokedex,
            colorsCard

        }
        
            
            
    
        
        return(
            <GlobalContext.Provider value={data}>
                {props.children}
            </GlobalContext.Provider>
        );
    };

        

        
      
    



    

