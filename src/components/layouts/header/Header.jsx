import { AppBar, Toolbar, Typography, useTheme } from '@mui/material'
import React from 'react'
import { NavLink } from "react-router-dom";

const Header = () => {
  const theme = useTheme()
  const linkStyle = {
   textDecoration:"none",
   color:theme.palette.secondary.main,
   backgroundColor:theme.palette.primary.main
  }
  const activeClass = {
    backgroundColor:theme.palette.secondary.main,
    color:theme.palette.primary.main,
    textDecoration:"none",
    padding:"5%",
    borderRadius:"2px",
    transition: "background 1s ease"
  }
  return (
  <AppBar position="static">
    <Toolbar className='d-flex justify-content-between'>
      <NavLink to="/" style={linkStyle}>
        <Typography variant="h6" color="inherit" component="div">
          POKEMON
        </Typography>
      </NavLink>
      <div>
        <NavLink to="/about" style={({isActive}) => isActive? activeClass:linkStyle} className="mx-3">
          About
        </NavLink>
        <NavLink to="/pokemons" style={({isActive}) => isActive? activeClass:linkStyle} className="mx-2">
          Pokemons
        </NavLink>
      </div>
    </Toolbar>
  </AppBar>
  )
}

export default Header