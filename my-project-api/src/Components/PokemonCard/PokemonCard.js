import { useNavigate } from "react-router-dom";
import { Container, Detalhes, Capturar, Titulo, Numero, Poison, Glass } from "./pokemonStyle";
import { goToDetailsPage } from "../../router/Codinator";

import { GlobalContext } from "../../contexts/GlobalContext";
import { useContext } from "react";
// import { useState } from "react";

export function PokemonCard({ name, number }) {

    // const [card, setCard] = useState(1)

    const navigate = useNavigate();

    const context = useContext(GlobalContext);

    const { pokedex, addToPokedex } = context;

    // console.log(pokemons.data.name)

    
    

    // const location = useLocation();








    return (

        <Container>
            <Titulo>{name}</Titulo>
            <Numero>{number}</Numero>
            <Glass>Glass</Glass>
            <Poison>Poison</Poison>
            <Detalhes onClick={() => { goToDetailsPage(navigate) }}>Detalhes</Detalhes>
            {/* <Pokemon></Pokemon> */}
            <Capturar>Capturar</Capturar> 
            <button onClick={()=>{addToPokedex(pokedex)}}>PEGAR</button>   
        </Container>


    )
};

