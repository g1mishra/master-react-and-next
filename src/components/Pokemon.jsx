import React, { memo, useEffect, useMemo, useState } from "react";

import axios from "axios";
import { Link, NavLink, Outlet } from "react-router-dom";
const fetchPokemon = async () => {
  const resp = await axios.get("https://pokeapi.co/api/v2/pokemon");
  return resp.data;
};

const Pokemon = () => {
  const [counter, setCounter] = useState(0);
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchPokemon()
      .then((data) => {
        setPokemon(data.results);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const tenXOfCounter = useMemo(() => {
    console.log("tenXOfCounter is called");
    return counter * 10;
  }, [counter]);

  return (
    <div>
      {counter} : {tenXOfCounter}
      <button onClick={() => setCounter((prev) => prev + 1)}>+</button>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
        }}
      >
        {loading ? (
          <h1>Loading...</h1>
        ) : pokemon?.length ? (
          <div>
            <PokemonList pokemon={pokemon} />
          </div>
        ) : (
          <p>No pokemon found</p>
        )}
        <Outlet />
      </div>
    </div>
  );
};

export default Pokemon;

const PokemonList = memo(({ pokemon }) => {
  if (!pokemon) return null;
  return pokemon.map((poke) => (
    <NavLink key={poke.name} to={`/pokemon/${poke?.url.split("/")[6]}`}>
      {({ isActive }) => (
        <p
          style={{
            color: isActive ? "red" : "",
          }}
        >
          {poke.name}
        </p>
      )}
    </NavLink>
  ));
});
