import { CircularProgress, Grid, Typography, useTheme } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { usePokemons } from './hooks/PokemonsHook';

const Pokemons = () => {
  const {data, isLoading, isError, isFetching, error} = usePokemons();
  const theme = useTheme();
  return (
    <Grid container columnSpacing={1} padding={2} className="d-flex justify-content-center">
      {isLoading ? <CircularProgress/>: isError ? 
      <Typography component={"b"} color={"red"}> {error.message} </Typography>
        : 
          Object.keys(data).length ? data.results.map((singlePoke,index) => {
            return (
              <Grid 
                key={index}
                xs={2}
                item
                minWidth={100}
                margin={1}
                style={{
                  textDecoration:"none",
                  backgroundColor:theme.palette.primary.main,
                  borderRadius:"5px",
                  color:theme.palette.secondary.main
                }}
                className="d-flex justify-content-center align-items-center"
              >
                <NavLink
                  to={`/pokemons/${singlePoke.name}`}
                  state={{url:singlePoke.url}}
                  style={{textDecoration:"none", color:theme.palette.secondary.main}}
                  >
                  <Grid
                    margin={5}
                    className="text-center"
                    key={index}
                  >
                    {singlePoke.name.toUpperCase()}
                  </Grid>
                </NavLink>
              </Grid>
            )
          }):"EMPTY" 
        }
        {isFetching?<CircularProgress/>:null}
    </Grid>
  )
}
export default Pokemons;