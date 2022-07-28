import { useEffect, useReducer } from 'react';
import axios from 'axios';
import Filters from '../components/Filters';
import PokemonList from '../components/PokemonList';
import '../components/styling/Pokemon.scss'

const POKEMON = {
  getdata : 'get-data'
}

const reducer = (state, action) => {

    if(action.type === POKEMON.getdata){
      return action.payload;
    }
    return state;
}

const Pokemon = () => {

  const [pokemons, dispatchPokemons] = useReducer(reducer, []);

    useEffect(() =>{

    const getPokemons = async () => {
      const Pokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=100000`);
      dispatchPokemons({type: POKEMON.getdata, payload: Pokemon.data.results});

    }

    getPokemons();
  },[])

  return (
    <div className="List-Pokemon">
        <div className="List-Pokemon__filter">
          <Filters />
        </div>
        <h1>Pokemons</h1>
        <div className="List-Pokemon__content">
          <PokemonList pokemons={pokemons} />
        </div>
    </div>
  )
}

export default Pokemon;