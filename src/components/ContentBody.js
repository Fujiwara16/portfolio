import {React,useEffect} from 'react'
import Aos from "aos";
import "aos/dist/aos.css"
import { Col } from 'react-bootstrap'
import Row from 'react-bootstrap/Row'
export const ContentBody = ({content}) => {
    let headerStyle = {
        textAlign:'left',
        fontWeight:'bold'
      }
      let bodyStyle = {
        textAlign:'left',
        fontSize:'15px',
        whiteSpace: 'pre-line',
      }
      let linkStyle = {
        textAlign:'left',
        color:'green'
      }
      useEffect(()=>{
        Aos.init({duration: 2000});
      },[]);
  return (
    <>
        <div className="container my-5">
          <h3 style={linkStyle}  data-aos='fade-up'>{content.title} | {content.time}</h3>
          <Row data-aos='fade-up'>
            <Col lg = {11} md= {10} sm = {11} style={headerStyle}>{content.role}</Col>
            {
                content.project ? "" :<Col  style={headerStyle}>{content.location}</Col> 
            }
          </Row>
          
          <h6 style={headerStyle} data-aos='fade-up'>Tech Stack - {content.techStack} </h6>
          <p style={bodyStyle} data-aos='fade-up'>
            {content.body}    
        </p>
        </div>
    </>
  )
}
