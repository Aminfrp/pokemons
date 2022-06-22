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
        <Grid xs={12} md={data?.sprites?6:12} sm={12} item className='d-flex align-items-center justify-content-end'>
          <TextField className="w-100" label="Search Pokemon" variant="outlined" onChange={(event)=> handleSearch(event)}/>
        </Grid>
        <Grid xs={12} md={6} sm={12} item className='d-flex align-items-center justify-content-center'>
          {
            data?.sprites? <img
            alt="Loading ..."
            src={data?.sprites?.front_default}
            width={200}
            height={200}
          /> :null
          }
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

export default FindPokemon