import { Grid, TextField } from '@mui/material'
import axios from 'axios';
import React, { useState } from 'react'
import { useQuery } from 'react-query';

const FindPokemon = () => {
  const [search,setSearch] = useState("");
  /**
   * handle change search input
   * @param {string} event 
   */
  const handleSearch = (event) => setSearch(event.target.value);

  const {data} = useQuery(["pokemon",search],({ signal }) => {
    const promise = new Promise(res => setTimeout(res,1000))
    .then(()=> axios.get(`https://pokeapi.co/api/v2/pokemon/${search}`,{
      signal,  
    },))
    .then(res => res.data )
    return promise
  },{
    enabled: search ? true : false
  });
  
  return (
    <React.Fragment>
      <Grid container>
      <Grid xs={12} item>
        <TextField id="outlined-basic" label="Search Pokemon" variant="outlined" onChange={(event)=> handleSearch(event)}/>
      </Grid>
      <Grid xs={12} item>
        <img
          alt="Loading ..."
          src={data?.sprites?.front_default}
          width={200}
          height={200}
        />  
      </Grid>
      </Grid>
    </React.Fragment>
  )
}

export default FindPokemon