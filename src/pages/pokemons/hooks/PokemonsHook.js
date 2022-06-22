import axios from "axios";
import { useQuery } from "react-query";

export const usePokemon = (url) => {
  const pokemon = useQuery(["pokemon",url],() => {
    return axios.get(url).then(res => res.data)
  },{
    cacheTime:10000,
    staleTime:10000,
    refetchOnWindowFocus:false
  })
  return pokemon;
}

export const usePokemons = (url) => {
  const pokemons = useQuery(["pokemons",url],() => {
    switch(url.status){
      case "all":
        return axios.get("https://pokeapi.co/api/v2/pokemon").then(res => res.data);
      case "next":
        return axios.get(url.next).then(res => res.data);
      case "prev":
        return axios.get(url.previous).then(res => res.data);
      default:
        return axios.get("https://pokeapi.co/api/v2/pokemon").then(res => res.data);
    }
  },{
    cacheTime:10000,
    staleTime:10000,
    refetchOnWindowFocus:false
  })
  return pokemons;
}