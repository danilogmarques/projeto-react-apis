import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Container, Detalhes, Capturar, Titulo, Numero, Poison, Glass, Pokemon } from "./pokemonStyle";
import { goToDetailsPage } from "../../router/Codinator";
import { GlobalContext } from "../../contexts/GlobalContext";
import { useContext } from "react";






export function PokemonCard({name, number, image, url, type1, colorPokemon, id}) {

    // const [card, setCard] = useState(1)
    

    const navigate = useNavigate();

    const context = useContext(GlobalContext);

    const { addToPokedex, removeFromPokedex } = context;

    const location = useLocation()

   
    



    return (

        <Container color={colorPokemon}>
            <Titulo>{name}</Titulo>
            <Numero>{number}</Numero>
            <Glass>{type1}</Glass>
            <Poison>{type1}</Poison>
            <Detalhes onClick={() => { goToDetailsPage(navigate, id, url) }}>Detalhes</Detalhes>
            <Pokemon alt={name} src={image} />
            <div>
                {location.pathname === "/" ? (
                    <Capturar onClick={() => { addToPokedex(name)}}>Capturar</Capturar>
                ) : (
                    <Capturar onClick={() =>{ removeFromPokedex(name)}}>Excluir</Capturar>
                )}
            </div>
        </Container>
    )
};














