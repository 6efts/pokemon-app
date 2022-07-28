import { useEffect, useReducer } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import '../components/styling/PokemonDetail.scss';

const POKEMON = {
  getdata: 'get-data',
};

const reducer = (state, action) => {
  if (action.type === POKEMON.getdata) {
    return action.payload;
  }
  return state;
};

const PokemonDetail = () => {
  const { name } = useParams();
  const [pokemon, dispatchPokemon] = useReducer(reducer, null);

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((response) => {
        dispatchPokemon({ type: POKEMON.getdata, payload: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }, [name]);

  return (
    <>
      {pokemon && (
        <>
          <div className="Card">
            <img src={pokemon.sprites.front_default} alt={name} />
            <p>{name}</p>
          </div>
          <div className="List">
            <Link to="/">Back to Pokemon List</Link>
          </div>
        </>
      )}
    </>
  );
};

export default PokemonDetail;
