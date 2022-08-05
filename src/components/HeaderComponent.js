import {React,useEffect} from 'react'
import Aos from "aos";
import "aos/dist/aos.css"

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import 'bootstrap/dist/css/bootstrap.min.css';
import { setSelectionRange } from '@testing-library/user-event/dist/utils';
export  const  HeaderComponent = () => {
    let textImageStyle = {
        width:"110px",
          
    }
    let searchBarStyle = {
        color:"white",
        backgroundColor:"white",
        borderRadius:"15px"
    }
   let imageJustification = {
    display:"flex",
    justifyContent:"center",
   }  
    useEffect(()=>{
    Aos.init({duration: 6000});
  },[]);
    
  return (
    <>
    <div className="container p-4" data-aos="fade-up" style={imageJustification}>
    <Card className=" shadow" data-aos='fade-up' style={{backgroundColor: 'rgba(0, 0, 0, 0.8)'}}>
      <CardContent>
        <h1 style={{color:"green", fontWeight:"bold"}}>Code is like humor. When you have to explain it, it’s bad.</h1>
        </CardContent>
     
    </Card>
        
        {/* <Row >
          
            <Col xs={12} md={3} lg={2} className = "my-3">
            <div  style={imageJustification}>
             <img src="googleText.png" alt="Google" style= {textImageStyle}/>
             </div>    
    </Col>
        <Col xs = {12} md = {8} lg = {9}>
                <Paper style={searchBarStyle} className = "container my-2"
            component="form" elevation={6}
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center' }}
            >
            <IconButton sx={{ p: '10px' }} aria-label="menu">
                <MenuIcon />
            </IconButton>
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search Google"
                inputProps={{ 'aria-label': 'search google' }}
            />
            <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                <SearchIcon />
            </IconButton>
            <Divider sx={{ height: 28, m: 0.5}} orientation="vertical" />
            <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
                <KeyboardIcon style={{color:"black"}}/>
            </IconButton>
            </Paper>
        </Col>    
       
        </Row> */}
    </div>
    </>
    
  )
}
