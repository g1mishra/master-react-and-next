import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const PokemonDetail = () => {
  const { pokemonId } = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`).then((resp) => {
      setPokemon(resp.data);
    });
  }, [pokemonId]);

  return (
    <div>
      <h1>PokemonDetail : {pokemonId}</h1>
      <p>{pokemon?.name}</p>
      <img src={pokemon?.sprites.front_default} alt={pokemon?.name} />
    </div>
  );
};

export default PokemonDetail;
