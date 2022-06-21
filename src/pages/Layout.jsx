import React from 'react'
import { Typography } from "@mui/material";
import {Pokemon,Count} from './Pokemon';
import FindPokemon from './FindPokemon';

const Layout = () => {
  return (
    <div className="p-5">
      <Typography variant="h4" gutterBottom component="div">
        React Query learning
      </Typography>
      <Count/>
      <Pokemon/>
      <FindPokemon/>
    </div>
  )
}

export default Layout