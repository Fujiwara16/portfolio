import {React ,useEffect} from 'react'

import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { StyleRoot } from 'radium';
import {Row,Col} from 'react-bootstrap';
import Aos from "aos";
import "aos/dist/aos.css"
export const PersonalInfo = () => {
  useEffect(()=>{
    Aos.init({duration: 6000});
  },[]);
   
    let imageStyle = {
        clipPath: "circle(40%)",
        width:"350px",
        
        '@media (max-width: 760px) ':{
          width:"250px",
          
        },
        '@media (min-width: 760px) ':{
            float: "left",
        }
    }
    let imageJustification = {
  
        '@media (max-width: 760px) ':{
            display:"flex",
            justifyContent:"center",
          },
        
    }
    let conatinerStyle = {
        margin: '10px'
    }
    let paragraphStyle = {
      fontSize: '40px',
      '@media (max-width: 760px) ':{
        fontSize: '30px',
      },
        color:"white"
    }
  return (
    <div className="p-3">
       
       <Row>
        <Col xs = {12} md = {7} lg = {5} >
        <StyleRoot style={imageJustification}>
            <img src="myPhoto.jpg" style={imageStyle} alt=""  data-aos='fade-up'/>
            </StyleRoot>
        </Col>
   
        <Col>
        <StyleRoot>
       
         <p style={paragraphStyle} className="hero p-3" data-text="Hi, I am Nij Mehar. 
          An app developer by day and a web developer by night.">
            <span>
                Hi, I am Nij Mehar. 
              An inquisitive individual who gets excited everytime an interesting project comes by.
            </span>
         </p>
        </StyleRoot>
      <div className='my-5'>
        </div>
        </Col>
     
       </Row>
        
        <div style={conatinerStyle}>
           
        </div>
        
        
      
        </div>
  )
}
