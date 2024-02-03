import {React,useEffect} from 'react'
import {Col,Row} from 'react-bootstrap';
import Aos from "aos";
import "aos/dist/aos.css"

export const Achievements = () => {
    useEffect(()=>{
        Aos.init({duration: 6000});
      },[]);
  return (
    <>
        <div className='container'>
            <Col>
                <Row xs = {12} md={2} lg = {2} className="justify-content-end my-5">
                    <p className='hero' data-aos="fade-up" style={{fontSize: '30px'}}>3 Star At Code-Chef</p>                    
                </Row>
                <Row xs = {12} md = {2} className="justify-content-start my-5">
                    <p className='hero' data-aos="fade-up" style={{fontSize: '20px'}}>Second Runner Up HACK4PAN</p>                    
                </Row>
                <Row xs = {12} md = {2} className="justify-content-end my-5">
                    <p className='hero' data-aos="fade-up" style={{fontSize: '20px'}}>HacktoberFest 2021</p>                    
                </Row>
                <Row xs = {12} md = {2} className="justify-content-start my-5">
                    <p className='hero' data-aos="fade-up" style={{fontSize: '30px'}}>Android Core Team | GDSC DEI</p>                    
                </Row>
                <Row xs = {12} md = {2} className="justify-content-end my-5">
                    <p className='hero' data-aos="fade-up" style={{fontSize: '20px'}}>HKU | DEI Student Exchange Program</p>                    
                </Row>
                <Row xs = {12} md = {2} className="justify-content-start my-5">
                    <p className='hero' data-aos="fade-up" style={{fontSize: '35px'}}>First in the Nation to implement Mets's Whatsapp Flows</p>                    
                </Row>
            </Col>
        </div>
    </>
  )
}
