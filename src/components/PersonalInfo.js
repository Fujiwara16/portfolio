import {React ,useEffect} from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { StyleRoot } from 'radium';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import {Link } from 'react-router-dom';
import Aos from "aos";
import "aos/dist/aos.css"
export const PersonalInfo = ({personalInfo}) => {
  useEffect(()=>{
    Aos.init({duration: 6000});
  },[]);
    let linkStyle = {
        fontSize:'15px',
        color:'green',
       
    }
    let infoStyle = {
        textAlign:'right',
        fontSize:'15px',
        '@media (max-width: 760px) ':{
            textAlign:'center',
           }
     
    }
    let columnStyle = {
        textAlign:'right',
        marginTop:'40px',
        '@media (max-width: 760px) ':{
           display:'none',
           textAlign:'right',
          }
    }
    let rowStyle = {
        display:'none',
  
        '@media (max-width: 760px) ':{
           display:'block'
          }
    }
    let imageStyle = {
        clipPath: "circle(40%)",
        width:"250px",
        '@media (max-width: 760px) ':{
          width:"150px",
          
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
  return (
    <div className="jumbotron p-3">
       
        <StyleRoot style={imageJustification}>
            <img src="myPhoto.jpg" style={imageStyle} alt="" width={50} data-aos='fade-up'/>
        </StyleRoot>
       
        <div style={conatinerStyle}>
            <StyleRoot>
        <Col data-aos='fade-up'>
        <Row>
            
          <h1 className="display-5" style={{color:'green',textAlign:'right', '@media (max-width: 760px) ':{
            textAlign:'center',
           }}} >{personalInfo.name}</h1>
       
        </Row>
        <Row> <h6 className="lead" style={infoStyle}>Phone number - {personalInfo.mobile} </h6></Row>
        <Row> <h6 className="lead" style={infoStyle}>{personalInfo.education} | {personalInfo.field}</h6></Row>
        <Row> <h6 className="lead" style={infoStyle}>{personalInfo.institute}</h6></Row>
        </Col>
            <hr className="my-4" style={{color: 'gray',
            '@media (min-width: 760px)':{
              display:'none'
            }}}data-aos='fade-up' />
        </StyleRoot>
        
        <StyleRoot data-aos='fade-up'>
            <div style={columnStyle}>
            <Col>
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
        </div>
        
        
      
        </div>
  )
}
