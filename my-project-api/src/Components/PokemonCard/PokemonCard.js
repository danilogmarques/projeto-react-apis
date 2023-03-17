import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Container, Detalhes, Capturar, Titulo, Numero, Poison, Glass, Pokemon } from "./pokemonStyle";
import { goToDetailsPage } from "../../router/Codinator";
import { GlobalContext } from "../../contexts/GlobalContext";
import { useContext } from "react";






export function PokemonCard({ number, name, image, type1, type2, url, id, color}) {

    // const [card, setCard] = useState(1)

    const navigate = useNavigate();

    const context = useContext(GlobalContext);

    const { addToPokedex, removeFromPokedex } = context;

    const location = useLocation()
  
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
    

    




    return (

        <Container color = {colorsCard(color)}>
            <Titulo>{name}</Titulo>
            <Numero>{number}</Numero>
            <Glass>{type1}</Glass>
            <Poison>{type2}</Poison>
            <Detalhes onClick={() => { goToDetailsPage(navigate, id, url) }}>Detalhes</Detalhes>
            <Pokemon alt={name} src={image} />
            <div>
                {location.pathname === "/" ? (
                    <Capturar onClick={() => { addToPokedex(number, name, image, url, id) }}>PEGAR</Capturar>
                ) : (
                    <Capturar onClick={() =>{ removeFromPokedex(number, name, image, url, id)}}>Excluir</Capturar>
                )}
            </div>
        </Container>
    )
};














