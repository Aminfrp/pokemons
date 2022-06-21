import axios from "axios";
import { useQuery } from "react-query";

export const usePokemon = (url) => {
  const pokemon = useQuery(["pokemon",url],() => {
    return axios.get(url).then(res => res.data)
  },{
    cacheTime:10000,
    refetchOnWindowFocus:false
  })
  return pokemon;
}

export const usePokemons = () => {
  const pokemons = useQuery("pokemons",() => {
    return axios.get("https://pokeapi.co/api/v2/pokemon").then(res => res.data)
  },{
    cacheTime:10000,
    refetchOnWindowFocus:false
  })
  return pokemons;
}