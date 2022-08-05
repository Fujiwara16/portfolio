import {React,useEffect} from 'react'
import Aos from "aos";
import "aos/dist/aos.css"
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
export const TechStack = ({technicalSkill}) => {
  useEffect(()=>{
    Aos.init({duration: 6000});
  },[]);
  return (
   <> 
   <Box sx={{ display: 'flex', flexDirection: 'row',padding: '10px' }}data-aos='fade-up'>
    <CardMedia
        component="img"
        sx={{ width: 60 }}
        image={technicalSkill.path}
        alt=""
      />
      <h6 style={{color: 'white',marginInlineStart: '20px'}}>{technicalSkill.name}</h6>
    </Box>
   </>
  )
}
