import { Button, Card, CardActions, CardContent, Container, Typography, useTheme } from '@mui/material'
import { Link } from "react-router-dom";
import React from 'react'

const Splash = () => {
  const theme = useTheme();
  return (
    <Container className='d-flex align-items-center justify-content-center p-0'>
      <Card style={{width:"400px", backgroundColor:"rgb(255 255 121)"}} className="p-2" >
        <CardContent className='d-flex justify-content-between'>
          <Typography variant='body1'>
            This application is show pokemon's character and characters avatars with <b>React Query</b> 
          </Typography>
          <img className='mx-2' src={"https://www.gifsanimes.com/data/media/1446/pokemon-image-animee-0016.gif"} alt={"pikachu"}/>
        </CardContent>
        <CardActions className='w-100'>
          <Link to="/pokemons" style={{textDecoration:"none"}} className='w-100'>
            <Button variant='contained' className='w-100' >Get Start</Button>
          </Link>
        </CardActions>
      </Card>
    </Container>
  )
}

export default Splash