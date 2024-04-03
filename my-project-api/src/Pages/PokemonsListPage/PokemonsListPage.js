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

    console.log(pokemons)

    

    return (
    <>
        <Header />
        <Pai>
            {cardScreen}    
        </Pai>
    </>
    )
};

    



    
   

    

    // const getPokemons = async () => {

    //     const urlPokemons = pokemons.length;
    //     const endPoints = [];

    // for (let i = 0; i < urlPokemons; i++) {
    //     const url = (pokemons[i].url);
    //     endPoints.push('https://pokeapi.co/api/v2/pokemon/${i}')
    //     console.log(endPoints)
    //     // const newArray = [...arrayUrl, url]
    //     // console.log(newArray);
    // }

    //     try {
    //         const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=30')
    //         setPokemons(response.data.results)
    //     } catch (error) {
    //         console.log(error.response);
            
    //     };
    // }

    


    // console.log(pokemons)

    
        
        
       

    

  
        
        
        
        
        
        
        

    

    
    // const newArray = pokemons.map((pokemon)=>{
    //     const url = (pokemon.url);
    //     const newArray = [...arrayUrl, url]
    //     console.log(newArray);
    //    });
        

        
        
    

        

    
    
    
        
    
    
    

        
       

    
    
        
        



    

        
            

        

    















































