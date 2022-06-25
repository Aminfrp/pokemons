import { CircularProgress, Container, Grid, Typography, useTheme } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { usePokemons } from './hooks/PokemonsHook';
import FindPokemon from './FindPokemon';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useQueryClient } from 'react-query'

const Pokemons = () => {
  const [url,setUrl] = useState({next:true,previous:null,status:"all"})
  const {data, isLoading, isError, isFetching, error} = usePokemons(url);
  const query = useQueryClient();
  const theme = useTheme();

  const prevPage = () => {
    return new Promise((res,rej)=>{
      setUrl({...url,status:"prev",previous:data?.previous});
      res();
    }).then(()=>{
      query.invalidateQueries(["pokemons",url])
    })
  }

  const nextPage = () => {
    return new Promise((res,rej)=>{
      setUrl({...url,status:"next",next:data?.next})
      res();
    }).then(()=>{
      query.invalidateQueries(["pokemons",url])
    })
  }

  useEffect(()=>{
    if(data){
      if(data.next){
        setUrl({...url,next:true})
      }
      if(data.previous){
        setUrl({...url,previous:true})
      }
    }
  },[data])

  return (
    <Container className='d-flex'>
      {url.previous?<Grid className='d-flex align-items-center'><ArrowBackIosNewIcon onClick={prevPage} /></Grid>:null}
      <Grid className='d-flex justify-content-center flex-column w-100'>
        <Grid style={{padding:"0 5.5%"}} className="w-100">
          <FindPokemon/>
        </Grid>
        <Grid container className="d-flex justify-content-center my-3">
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
      </Grid>
      {url.next?<Grid className='d-flex align-items-center' onClick={nextPage}><ArrowForwardIosIcon/></Grid>:null}
    </Container>
  )
}
export default Pokemons;