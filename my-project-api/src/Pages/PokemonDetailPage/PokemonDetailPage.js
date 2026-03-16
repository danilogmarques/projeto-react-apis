
import React, { useState, useCallback, useEffect } from "react";
import { Header } from "../../Components/Header/Header";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  Corpo,
  Fundo,
  HeaderSection,
  TitleRow,
  Number,
  Name,
  TypeBadges,
  TypeBadge,
  Content,
  ImageColumn,
  ImageCard,
  StatsCard,
  StatsTitle,
  StatRow,
  StatLabel,
  StatValue,
  StatBar,
  StatBarFill,
  MovesCard,
  MovesTitle,
  MoveList,
  MoveItem,
} from "./pokemonDetailStyle";
import { colorsCard } from "../../utils/ReturnCardColor";

export function PokemonDetailPage() {
  const { id } = useParams();
  const [pokemonDetails, setPokemonDetails] = useState([]);

  const getPokemons = useCallback(async () => {
    const endpoints = [];
    endpoints.push(`https://pokeapi.co/api/v2/pokemon/${id}/`);

    axios
      .all(endpoints.map((endpoint) => axios.get(endpoint)))
      .then((response) => setPokemonDetails(response))
      .catch((erro) => {
        console.log(erro.response);
      });
  }, [id]);

  useEffect(() => {
    getPokemons();
  }, [getPokemons]);

  const renderStat = (stat, primaryColor) => {
    const label = stat.stat.name.replace("special-", "Sp. ");
    const value = stat.base_stat;
    const width = Math.min(100, Math.round((value / 255) * 100));

    return (
      <StatRow key={stat.stat.name}>
        <div>
          <StatLabel>{label}</StatLabel>
          <StatBar>
            <StatBarFill $width={width} $bg={primaryColor} />
          </StatBar>
        </div>
        <StatValue>{value}</StatValue>
      </StatRow>
    );
  };

  return (
    <div>
      <Header />
      <Fundo>
        {pokemonDetails.map((pokemon) => {
          const data = pokemon.data;
          const types = data.types.map((t) => t.type.name);
          const primaryColor = colorsCard(types[0]);

          return (
            <Corpo key={data.id}>
              <HeaderSection>
                <TitleRow>
                  <div>
                    <Number>#{String(data.order).padStart(3, "0")}</Number>
                    <Name>{data.name}</Name>
                  </div>
                  <TypeBadges>
                    {types.map((type) => (
                      <TypeBadge key={type} $bg={colorsCard(type)}>
                        {type}
                      </TypeBadge>
                    ))}
                  </TypeBadges>
                </TitleRow>
              </HeaderSection>

              <Content>
                <ImageColumn>
                  <ImageCard>
                    <img
                      alt={data.name}
                      src={
                        data.sprites.other["official-artwork"].front_default ||
                        data.sprites.front_default
                      }
                    />
                  </ImageCard>
                  <ImageCard>
                    <img
                      alt={`${data.name} back`}
                      src={
                        data.sprites.other?.dream_world?.front_default ||
                        data.sprites.back_default
                      }
                    />
                  </ImageCard>
                </ImageColumn>

                <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                  <StatsCard>
                    <StatsTitle>Base stats</StatsTitle>
                    {data.stats.map((stat) => renderStat(stat, primaryColor))}
                  </StatsCard>

                  <MovesCard>
                    <MovesTitle>Moves</MovesTitle>
                    <MoveList>
                      {data.moves.slice(0, 8).map((move) => (
                        <MoveItem key={move.move.name}>{move.move.name}</MoveItem>
                      ))}
                    </MoveList>
                  </MovesCard>
                </div>
              </Content>
            </Corpo>
          );
        })}
      </Fundo>
    </div>
  );
}


































