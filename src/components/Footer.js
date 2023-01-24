import {useEffect,React} from 'react'
import Aos from "aos";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { StyleRoot } from 'radium';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import "aos/dist/aos.css"
export const Footer = ({personalInfo}) => {
    let footerStyle = {
        width: '100%',
        top:'20px',
        position:"relative",
    }
    let linkStyle = {
      fontSize:'15px',
      color:'green',
     
  }
  let imageJustification = {
     
    '@media (max-width: 760px) ':{
        display:"flex",
        justifyContent:"center",
      },
    
}
  let infoStyle = {
      textAlign:'center',
      fontSize:'15px',
      '@media (max-width: 760px) ':{
          textAlign:'center',
         }
   
  }
  let columnStyle = {
      textAlign:'center',
      
      '@media (max-width: 760px) ':{
         display:'none',
         
        }
  }
  let rowStyle = {
      display:'none',

      '@media (max-width: 760px) ':{
         display:'block'
        }
  }
    useEffect(()=>{
      Aos.init({duration: 2000});
    },[]);
  return (
    <footer className='text-light' style = {footerStyle}>
      <div className='container mb-5'>
       <Row>
      <Col lg={6} xs={12} md={6}>
       <StyleRoot>
      
        <Col data-aos='fade-up'>
        {/* <Row>
            
          <h1 className="display-5" style={{color:'green',textAlign:'right', '@media (max-width: 760px) ':{
            textAlign:'center',
           }}} >{personalInfo.name}</h1>
       
        </Row> */}
        
        <Row> <h6 className="lead" style={infoStyle}>Phone number - {personalInfo.mobile} </h6></Row>
        <Row> <h6 className="lead" style={infoStyle}>{personalInfo.education} | {personalInfo.field}</h6></Row>
        <Row> <h6 className="lead" style={infoStyle}>{personalInfo.institute}</h6></Row>
        </Col>
            <hr className="my-4" style={{color: 'gray',
            '@media (min-width: 760px)':{
              display:'none'
            }}}data-aos='fade-up' />
        </StyleRoot>
        </Col>
        <Col>
        
        <StyleRoot>
            <div style={columnStyle}>
            <Col  data-aos='fade-up'>
            <Row>
            <h6 className="lead" style={linkStyle}>Email - <a href={personalInfo.email} style={linkStyle} > {personalInfo.email}</a></h6>
            </Row>
            <Row>
            <h6 className="lead" style={linkStyle}> LinkedIn - <a href={personalInfo.linkedin}  style={linkStyle}> {personalInfo.linkedin}</a></h6>
            </Row>
            <Row>
            <h6 className="lead" style={linkStyle}>Github - <a href={personalInfo.github}  style={linkStyle}> {personalInfo.github}</a></h6>
            </Row>
        </Col>
            </div>
          <div style={rowStyle}>
          <Row>
         
            <Col>
            <div style={imageJustification}>
            <a style={{color:"white"}} href ={personalInfo.email}><EmailIcon/></a>
            </div>
            </Col>
           
            <Col>
            <div style={imageJustification}>
            <a style={{color:"white"}}  href={personalInfo.github}><GitHubIcon/></a>
            </div>
            </Col>
            
            <Col>
            <div style={imageJustification}>
            <a style={{color:"white"}}  href={personalInfo.linkedin}><LinkedInIcon/></a>
            </div>
            </Col>
            
        </Row>
          </div>

        </StyleRoot>
        </Col>
       </Row>
       </div>
        <p className='text-center p-7 mb-5'>
            Copyright &copy; 2022 @Nij Mehar Grover | <a style={{ color: "white", fontWeight:'bold',textDecoration: 'none'}} target="_blank" rel="noopener noreferrer" href='https://drive.google.com/file/d/1Ci0ajYZDa8AV-2pPGxK975LjmQGejBU7/view?usp=sharing'>Privacy Policy</a>
        </p>
    </footer>
  )
}
