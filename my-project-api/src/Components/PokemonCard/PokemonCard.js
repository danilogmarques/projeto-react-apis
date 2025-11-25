import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Container, Detalhes, Capturar, Titulo, Numero, Poison, Glass, Pokemon } from "./pokemonStyle";
import { goToDetailsPage } from "../../router/Codinator";
import { GlobalContext } from "../../contexts/GlobalContext";
import { useContext } from "react";
import { colorsCard } from "../../utils/ReturnCardColor";





export function PokemonCard({name, number, image, url, type1, type, id}) {

    const navigate = useNavigate();

    const context = useContext(GlobalContext);

    const { addPokemon, removePokemon } = context;

    const location = useLocation()

    return (

        <Container type={type}>
            <Titulo>{name}</Titulo>
            <Numero>{number}</Numero>
            <Glass>{type1}</Glass>
            <Poison>{type1}</Poison>
            <Detalhes onClick={() => { goToDetailsPage(navigate, id, url) }}>Detalhes</Detalhes>
            <Pokemon alt={name} src={image} />
            <div>
                {location.pathname === "/" ? (
                    <Capturar onClick={() => { addPokemon(url)}}>Capturar</Capturar>
                ) : (
                    <Capturar onClick={() =>{ removePokemon(name)}}>Excluir</Capturar>
                )}
            </div>
        </Container>
)
};
    
   

















