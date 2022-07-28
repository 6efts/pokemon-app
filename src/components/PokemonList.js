
import PokemonItem from './PokemonItem';

const PokemonList = ({ pokemons }) => {
  return (
    
     <>
        { pokemons.map(({ name }) => <PokemonItem key={name} name={name} />) }

     </>
    
  )
}

export default PokemonList;