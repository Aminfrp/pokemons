import { Toolbar, Typography, useTheme } from '@mui/material'
import React from 'react'
import EditIcon from '@mui/icons-material/Edit';

const Footer = () => {
  const theme = useTheme()
  return (
    <Toolbar className='d-flex justify-content-center' style={{ backgroundColor: theme.palette.primary.main }}>
      <div className='w-25 text-center'>
        <Typography variant="caption" color="secondary" >
          Amin Firouzpour <EditIcon />
        </Typography>
      </div>
    </Toolbar>
  )
}

export default Footer