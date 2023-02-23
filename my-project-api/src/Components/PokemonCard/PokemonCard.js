import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Container, Detalhes, Titulo, Numero, Poison, Glass, Pokemon } from "./pokemonStyle";
import { goToDetailsPage } from "../../router/Codinator";
import { GlobalContext } from "../../contexts/GlobalContext";
import { useContext } from "react";
import axios from "axios";


export function PokemonCard({name, image, number}) {



    const context = useContext(GlobalContext);

    

    const { addToPokedex, removeFromPokedex } = context;

    const navigate = useNavigate();

    const location = useLocation();

    const [pokemon, setPokemon] = useState({});

    useEffect(() => {
        fetchPokemon();
      }, []);
    
      const fetchPokemon = async () => {
        try {
          const response = await axios.get(pokemonUrl);
          setPokemon(response.data);
        } catch (error) {
          console.log("Erro ao buscar lista de pokemons");
          console.log(error);
        }
      };
    

 
    


    



    return (
        
            <Container>
                <Titulo>{name}</Titulo>
                <Numero>{number}</Numero>
                <Glass>Glass</Glass>
                <Poison>Poison</Poison>
                <Pokemon src={image}/>
                <Detalhes onClick={()=>{goToDetailsPage(navigate)}}>Detalhes</Detalhes>
            <div>
                {location.pathname === "/" ? (
                <button onClick={()=>{addToPokedex(pokemon)}}>Capturar</button>
                ) : (
                <button onClick={()=>{removeFromPokedex(pokemon)}}>Capturar</button>
                )}
            </div>
            </Container>
    )
};
        