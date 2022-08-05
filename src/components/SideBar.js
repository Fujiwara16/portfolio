
import {React,useEffect} from 'react'
import Aos from "aos";
import "aos/dist/aos.css"
import { Col,Row } from 'react-bootstrap';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';


import { TechStack } from './TechStack';
export const SideBar = ({technicalSkills}) => {
  useEffect(()=>{
    Aos.init({duration: 6000});
  },[]);
  return (
    <>
    <div className="container" id="sidebar">

         <Card className=" shadow my-5
         " data-aos='fade-up' style={{backgroundColor: 'rgba(0, 0, 0, 0.8)'}}>
      <CardContent>
        <h4 className = "hero mb-4" style={{color: 'green',fontSize: '30px'}}>TechStack</h4>
            <hr style={{color: 'gray'}}/>
            <Row>
            {
                technicalSkills.programming.map((technicalSkill)=>{
                    console.log(technicalSkill);
                    return (
                        <>
                        <Col xs={6} md = {6}>
                        <TechStack technicalSkill = {technicalSkill}/>
                        </Col>
                       
                        </>
                    )
                })
              
            }  </Row>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
    </div>
    </>
  )
}
