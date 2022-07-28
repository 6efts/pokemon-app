import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

const PokemonItem = ({ name }) => {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`).then(response => {
      setPokemon(response.data);
    }).catch(error => {
      console.log(error);
    });
  }, [name]);

  return (
    <>
    {
      pokemon && 
      (
        <Link to={`/pokemon/${name}`}>
          <div className="Pokemon-item">
            <img src={pokemon.sprites.front_default} alt={name} />
            <p>Pokemon Name: <span>{pokemon.name}</span></p>
            <p>Types: {pokemon.types.map(({ type }) => type.name).join(', ')}</p>
          </div>
        </Link>
      )
    }
    </>
  );
}

export default PokemonItem;
