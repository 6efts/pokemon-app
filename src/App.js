
// import axios from 'axios'
import './App.css'
import { Navigate, Route , Routes } from 'react-router-dom'
import Pokemon from './views/Pokemon';
import PokemonType from './views/PokemonType';
import PokemonDetail from './views/PokemonDetail';
import NotFound from './views/NotFound';


function App() {

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/pokemon" />} />
      <Route path="/pokemon" element={<Pokemon />} />
      <Route path="/types/:type" element={<PokemonType />} />
      <Route path="/pokemon/:name" element={<PokemonDetail />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
   
export default App;
