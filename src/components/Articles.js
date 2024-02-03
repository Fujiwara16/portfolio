import {React,useEffect} from 'react'
import Aos from "aos";
import "aos/dist/aos.css"
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import { Col } from 'react-bootstrap';
export const Article = ({article}) => {
  useEffect(()=>{
    Aos.init({duration: 6000});
  },[]);
  return (
   <> 
   <Box sx={{ display: 'flex', flexDirection: 'col',padding: '10px' }}data-aos='fade-up'>
    <Col>        
    <a href={article.url} style={{color:"white"}}target="_blank" rel="noopener noreferrer">
        <CardMedia
          component="img"
          sx={{ width: 200 }}
          image={article.path}
          alt=""
        />
        <h6 style={{ color: 'white', marginTop: '8px' }}>{article.name}</h6>
      </a>      
      </Col>

    </Box>
   </>
  )
}
