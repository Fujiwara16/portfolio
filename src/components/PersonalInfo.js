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
      fontSize: '20px',
      '@media (max-width: 760px) ':{
        fontSize: '15px',
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
              Hi, I'm Nij Mehar Grover, a fourth-year B.Tech student at Dayalbagh Educational Institute, Agra, India. My journey into software development began with a deep passion for creating impactful mobile apps using Flutter for Android and iOS. I've also explored web development, working with HTML, CSS, JavaScript, and React. Since February 2023, I've been working at Bhanzu, where I've enhanced the Bhanzu Parent App, turned a hackathon project into a successfull POC, and delved into generative AI.

On the personal side, I'm a video game enthusiast, a car lover, and a gadget aficionado who absolutely loves programming. While I may not be your everyday leetcoder, I excel at solving complex engineering problems. Recently, I've started sharing my knowledge with the community by writing articles that address challenges I've encountered and how to overcome them. I'm currently working on a project that brings commonly used developer tools directly into the terminal, making life easier for developers. I'm eager to connect, share ideas, and stay updated on the latest in tech!</span>
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
