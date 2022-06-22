import { Toolbar, Typography, useTheme } from '@mui/material'
import React from 'react'
import EditIcon from '@mui/icons-material/Edit';
import CopyrightIcon from '@mui/icons-material/Copyright';
import { Link } from 'react-router-dom';
const Footer = () => {
  const theme = useTheme()
  return (
    <Toolbar className='d-flex justify-content-center' style={{ backgroundColor: theme.palette.primary.main }}>
      <div className='text-center d-flex flex-column align-items-center'>
        <Link to={"/about"} style={{textDecoration:"none"}}>
          <Typography variant="caption" color="secondary" >
            <EditIcon /> Amin Firouzpour 
          </Typography>
        </Link>
        <Typography variant="caption" color="secondary" >
          <CopyrightIcon /> Copy right 2022
        </Typography>
      </div>
    </Toolbar>
  )
}

export default Footer