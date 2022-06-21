import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"
import About from "./pages/about/About"
import Splash from './pages/splash/Splash';
import  Pokemons  from './pages/pokemons/Pokemons';
import Pokemon from "./pages/pokemons/Pokemon";
import Layouts from "./components/layouts/Layouts";

const Router = () => {
  return(
    <BrowserRouter>
      <Layouts>
        <Routes>
          <Route path="/" element={<Splash />} />
          <Route path="pokemons">
            <Route index element={<Pokemons />} />
            <Route path=":id" element={<Pokemon/>} />
          </Route>
          <Route path="/about" element={<About />} />
        </Routes>
      </Layouts>
    </BrowserRouter>
  )
}

export default Router