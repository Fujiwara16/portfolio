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
              I'm Nij Mehar Grover, a fourth-year B.Tech student at Dayalbagh Educational Institute, Agra, India. My passion for software development ignited my journey into creating impactful mobile apps with Flutter, Android, and iOS. I've dabbled in web development with HTML, CSS, JavaScript, and React.

During a 1.5-month internship at Bhanzu, I delved into Python, DBMS, APIs, AWS, and Lambda functions, reinforcing my ability to rapidly learn and implement new technologies. Securing a full-time offer at Bhanzu, I've enhanced the Bhanzu Parent App, transformed a hackathon project into a market-ready product, and explored generative AI. My diverse experiences have sharpened my technical, leadership, and adaptability skills, making me a valuable addition to your team. Eager to contribute my innovation and enthusiasm to your esteemed organization.            </span>
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
