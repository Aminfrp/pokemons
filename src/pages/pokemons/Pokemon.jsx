import React, { useState } from 'react'
import {useLocation, useParams} from "react-router-dom"
import { usePokemon } from './hooks/PokemonsHook';
import { useEffect } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "../../index.css"

// import required modules
import { EffectCards, Navigation, Pagination } from "swiper";
import {CircularProgress, Container, Typography, useTheme } from '@mui/material';


const Pokemon = () => {
  const {state} = useLocation();
  const params = useParams();
  const {data,isLoading} = usePokemon(state.url);
  const theme = useTheme();
  const [images,setImages] = useState([]);
  const getProfiles = (data) => {
    if(data !== undefined){
      const values = Object.values(data).filter((sp) => sp!==null);
      const images = values.filter((img)=>typeof img === "string")
      console.log(images);
      return setImages(images)
    }
  }
  useEffect(()=>{
    if(data){
      getProfiles(data.sprites);
    }
  },[data])
  return (
    <div className='d-flex justify-content-center align-items-center w-100'>
      {
        isLoading ? <CircularProgress/> :
        images.length?   
          <Container className='d-flex flex-column justify-content-start' style={{maxWidth:700}}>
            <Typography variant='button' className="text-center">{params.id}</Typography>
            <Swiper
              pagination={{
                dynamicBullets: true,
              }}
              modules={[EffectCards]}
              effect={"cards"}
              grabCursor={true}
              className="mySwiper"
              >      
              { images.map((image, index) =>
                <SwiperSlide key={index} style={{borderRadius:"15px",backgroundColor:`rgb(${Math.floor(Math.random() * 256)+","+Math.floor(Math.random() * 256)+","+Math.floor(Math.random() * 256)})`}}>
                  <img src={image} loading={"lazy"} alt={image} width={"100%"} height={"100%"}/>
                </SwiperSlide>
                )}
            </Swiper>
          </Container>
          :<div>nist</div>
      }
    </div>
  )
}

export default Pokemon