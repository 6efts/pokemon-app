import { useEffect, useReducer } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Filters from '../components/Filters';
import PokemonList from '../components/PokemonList';
import '../components/styling/Pokemon.scss'


const POKEMONDATA = {
  getdata : 'get-data'
}

const reducer = (state, action) => {

    if(action.type === POKEMONDATA.getdata){
      return action.payload;
    }
    return state;
}

const PokemonType = () => {
  const { type } = useParams();
  const [pokemons, dispatchPokemons] = useReducer(reducer, []);

  useEffect(() =>{

    const getPokemon = async () => {
      const Pokemon = await axios.get(`https://pokeapi.co/api/v2/type/${type}`);
      dispatchPokemons({type: POKEMONDATA.getdata, payload: Pokemon.data.pokemon.map(({ pokemon }) => pokemon)});
    }
    getPokemon();
  },[type])

  return (
    
    <div className="List-Pokemon"> 
     
      <div className="List-Pokemon__filter">
          <Filters />
          
      </div>
      <h1>Pokemon Type : <span>{type}</span> </h1>
      <div className="List-Pokemon__content">
          <PokemonList pokemons={pokemons} />
      </div>
   
    </div>
  );
}

export default PokemonType;