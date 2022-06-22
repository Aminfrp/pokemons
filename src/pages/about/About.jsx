import { Container, Grid } from '@mui/material'
import React from 'react'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import CallIcon from '@mui/icons-material/Call';
const About = () => {
  return (
    <Container>
      <h5>Hi every one I'm Amin Firouzpour</h5>
      <p>
        I'm 25 years old , I've 3 years exprience in front end development and I'm so glad you visited my website.
        this is my paractice project , this project made of <mark>react js</mark> , <mark>material ui</mark> and <mark>react query</mark>.
      </p>
      <p>you can contact to me with this ways:</p>
      <Grid container>
        <Grid item xs={12}><CallIcon/> <b>+989305163537</b></Grid>
        <Grid item xs={12}><WhatsAppIcon/><b> +989175353201 </b></Grid>
        <Grid item xs={12}><InstagramIcon/><b> @aminfrpr </b></Grid>
        <Grid item xs={12}><TelegramIcon/><b> @a2fise </b></Grid>
      </Grid>
    </Container>
  )
}

export default About