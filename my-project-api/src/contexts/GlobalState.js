import { GlobalContext } from "./GlobalContext";
import axios from 'axios';
import { useEffect, useState } from "react";
import { BASE_URL } from "../Constantes/url";


export const GlobalState = (props) => {
    const [pokemons, setPokemons] = useState([]);
    const [pokedex, setPokedex] = useState([]);

    
    
    
    useEffect(() => {
      
      getPokemons();
    },[]);
    
    const getPokemons = async () => {
      try {
        const response = await axios.get(BASE_URL);
        setPokelist(response.data.results);
      } catch (error) {
        console.log(error.responde);
      }
    };
    
    
    const addToPokedex = (pokemonToAdd) => {
        const isAlreadyOnPokedex = pokedex.find(
          (pokemonInPokedex) => pokemonInPokedex.name === pokemonToAdd.name
        );
    
        if (!isAlreadyOnPokedex) {
          const newPokedex = [...pokedex, pokemonToAdd];
          setPokedex(newPokedex);
        }
      };
    
      const removeFromPokedex = (pokemonToRemove) => {
        const newPokedex = pokedex.filter(
          (pokemonInPokedex) => pokemonInPokedex.name !== pokemonToRemove.name
        );
    
        setPokedex(newPokedex);
      };
    
    
    
    const data = {
        pokemons,
        pokedex,
        addToPokedex,
        removeFromPokedex,
        pokelist
        // addToPokedex,
        // pokedex
        
    }

    console.log(pokedex)

    
    return(
        <GlobalContext.Provider value={data}>
            {props.children}
        </GlobalContext.Provider>
    );
};

// export default GlobalState;