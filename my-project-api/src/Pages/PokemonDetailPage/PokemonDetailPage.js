
import React, { useState } from "react";
import { Header } from "../../Components/Header/Header";
import { Corpo, Status, Number, Name, Poison, Glass, Moves, FirstCard, SecondCard, Itens, Text, Fundo, Image } from "./pokemonDetailStyle";
import { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";










export function PokemonDetailPage() {
    
    const context= useContext(GlobalContext);

    const { pokemons } = context;

    const {id} = useParams();

    const [pokemonDetails, setPokemonDetails] = useState([])

    useEffect(() => {
        
        getPokemons();
    },[]);

    
    const getPokemons = () => {
        const endpoints = [];
        {
            endpoints.push(`https://pokeapi.co/api/v2/pokemon/${id}/`);
        }
        axios.all(endpoints.map((endpoints) => axios.get(endpoints)))
        .then((response) => setPokemonDetails(response))
        .catch((erro)=>{
            console.log(erro.response)
        })
    };
    

    
    
   


    
    


    

    

    return (
        <div>
            
            <Header />

            <Fundo>
                {pokemonDetails.map((pokemon)=>(
                <Corpo>

                    <FirstCard>
                        <Image alt={pokemon.data.name} src={pokemon.data.sprites.front_default}/>
                    </FirstCard>

                    <SecondCard>
                        <Image alt={pokemon.data.name} src={pokemon.data.sprites.back_default}/>
                    </SecondCard>

                    <Number>#01</Number>
                    <Name>{pokemon.data.name}</Name>
                    <Poison>Poison</Poison>
                    <Glass>Glass</Glass>

                    <Status>
                        <div>
                            <h1>Base stats</h1>
                        </div>
                    </Status>

                    <Moves>
                        <h2>Moves:</h2>
                        <Itens><Text>Razor Wind</Text></Itens>
                        <Itens><Text>Razor Wind</Text></Itens>
                        <Itens><Text>Razor Wind</Text></Itens>
                        <Itens><Text>Razor Wind</Text></Itens>
                    </Moves>
                </Corpo>
                ))}
            </Fundo>

        </div>

    )
};











