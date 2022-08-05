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
       
         <p style={paragraphStyle} className="hero glitch layers" data-text="Hi, I am Nij Mehar. 
          An app developer by day and a web developer by night.">
            <span>
                Hi, I am Nij Mehar. 
              An app developer by day and a web developer by night.
            </span>
         </p>
        </StyleRoot>
      <div className='my-5'>
  {/* //optimise with a for loop */}
        <Timeline position="alternate">
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="white"
          data-aos='fade-up'
        >
          1st Sem
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector data-aos='fade-up'/>
          <TimelineDot data-aos='fade-up'>
          
          </TimelineDot>
          <TimelineConnector data-aos='fade-up'/>
        </TimelineSeparator>
        <TimelineContent data-aos='fade-up'>DSA</TimelineContent>
        </TimelineItem>
        <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="white"
          data-aos='fade-up'
        >
          2nd Sem
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector data-aos='fade-up'/>
          <TimelineDot data-aos='fade-up'>
          
          </TimelineDot>
          <TimelineConnector data-aos='fade-up'/>
        </TimelineSeparator>
        <TimelineContent data-aos='fade-up'>Android Dev</TimelineContent>
        </TimelineItem>
        <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          data-aos='fade-up'
          color="white"
        >
          3rd Sem
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector data-aos='fade-up'/>
          <TimelineDot data-aos='fade-up'>
          
          </TimelineDot>
          <TimelineConnector data-aos='fade-up'/>
        </TimelineSeparator>
        <TimelineContent data-aos='fade-up'>Flutter Dev / DSA</TimelineContent>
        </TimelineItem>
        <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          data-aos='fade-up'
          color="white"
        >
          4th Sem
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector data-aos='fade-up'/>
          <TimelineDot data-aos='fade-up'>
          
          </TimelineDot>
          <TimelineConnector data-aos='fade-up'/>
        </TimelineSeparator>
        <TimelineContent data-aos='fade-up'>Flutter Dev / Backend / APIs / DBs / Internship</TimelineContent>
        </TimelineItem>
       
        <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="white"
          data-aos='fade-up'
        >
          5th Sem
        </TimelineOppositeContent>
        <TimelineSeparator >
          <TimelineConnector data-aos='fade-up'/>
          <TimelineDot data-aos='fade-up'>
          </TimelineDot>
          <TimelineConnector data-aos='fade-up'/>
        </TimelineSeparator >
        <TimelineContent data-aos='fade-up'>Web Dev</TimelineContent>
        </TimelineItem>
        </Timeline>
        </div>
        </Col>
     
       </Row>
        
        <div style={conatinerStyle}>
           
        </div>
        
        
      
        </div>
  )
}
