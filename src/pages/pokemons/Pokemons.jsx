import { Button, CircularProgress, Grid, Typography } from '@mui/material';
import axios from 'axios';
import React from 'react';
import {useQueryClient, useQuery} from "react-query";

const usePokemon = () => {
  const pokemons = useQuery("pokemon",() => {
    return axios.get("https://pokeapi.co/api/v2/pokemon").then(res => res.data)
  },{
    cacheTime:10000
  })
  return pokemons;
}

const Pokemons = () => {
  const {data, isLoading, isError, isFetching, error} = usePokemon();
  const queryClient = useQueryClient()
  return (
    <React.Fragment>
      <Grid container boxShadow={2} borderRadius={5} justifyContent={isLoading || isError ?"center":"start"} padding={5} marginY={10}>
      {isLoading ? <CircularProgress/>: isError ? 
      <Typography component={"b"} color={"red"}> {error.message} </Typography>
        : 
        data?.results.map((singlePoke,index) => {
          return <Grid item minWidth={100} xs={4} padding={2} key={index}>{singlePoke.name}</Grid>
        }) }
        {isFetching?<CircularProgress/>:null}
      </Grid>
      <Button onClick={() => queryClient.invalidateQueries("pokemon")} variant="outlined" className='my-5 '>Refetch Data</Button>
    </React.Fragment>
  )
}
export default Pokemons;