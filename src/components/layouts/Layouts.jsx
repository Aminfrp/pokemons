import React from 'react'
import Footer from './footer/Footer'
import Header from './header/Header'

const Layouts = (props) => {
  return (
    <div className='d-flex flex-column' style={{height:"100vh"}}>
      <Header/>
      <div className='flex-grow-1 p-5 d-flex' style={{backgroundImage:"url(/pok.png)", backgroundSize:"cover", backgroundPosition:"center",backgroundRepeat:"no-repeat"}}>
        {props.children}
      </div>
      <Footer/>
    </div>
  )
}

export default Layouts