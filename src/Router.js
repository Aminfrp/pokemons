import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"
import About from "./pages/about/About"
import Splash from './pages/splash/Splash';
import  Pokemons  from './pages/pokemons/Pokemons';
import Pokemon from "./pages/pokemons/Pokemon";

const Router = () => {
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Splash />} />
      <Route path="/pokemons" element={<Pokemons />} >
        <Route path=":id" element={<Pokemon/>} />
      </Route>
      <Route path="/about" element={<About />} />
    </Routes>
  </BrowserRouter>
  )
}

export default Router