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
        fontSize:'20px',
        whiteSpace: 'pre-line',
      }
      let linkStyle = {
        fontSize:'26px',
        textAlign:'left',
        color:'green'
      }
      useEffect(()=>{
        Aos.init({duration: 2000});
      },[]);
  return (
    <>
        <div className="container my-5" data-aos='fade-up'>
          <h3 className='hero' style={linkStyle}  >{content.title} | {content.time}</h3>
            <Col  style={headerStyle}>{content.role}</Col>
        {
                content.project ? "" :<Col  style={headerStyle}>{content.location}</Col> 
            }
        {
                content.url ? <a href={content.url} style={{color:'white',textDecoration: 'none'}}><h6 style={headerStyle} >Link</h6></a> : ""

            }
          <a href="#sidebar" style={{color:'white',textDecoration: 'none'}}><h6 style={headerStyle} >Tech Stack - {content.techStack} </h6></a>
          <p style={bodyStyle} >
            {content.body}    
        </p>
        </div>
    </>
  )
}
