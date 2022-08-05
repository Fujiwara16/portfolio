import {React,useEffect} from 'react'
import Aos from "aos";
import "aos/dist/aos.css"

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import 'bootstrap/dist/css/bootstrap.min.css';
export  const  HeaderComponent = () => {
  
   let imageJustification = {
    display:"flex",
    justifyContent:"center",
   }  
    useEffect(()=>{
    Aos.init({duration: 6000});
  },[]);
    
  return (
    <>
    <div className="container p-2" data-aos="fade-up" style={imageJustification}>
    <Card className="shadow" data-aos='fade-up' style={{backgroundColor: 'rgba(0, 0, 0, 0.8)'}}>
      <CardContent>
        <h1 className='hero' style={{color:"white", fontWeight:"bold",fontSize:"20px"}}>Code is like humor. When you have to explain it, it’s bad.</h1>
        </CardContent>
     
    </Card>
    </div>
    </>
    
  )
}
