
import {React,useEffect} from 'react'
import Aos from "aos";
import "aos/dist/aos.css"
import { Col,Row } from 'react-bootstrap';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';


import { TechStack } from './TechStack';
import { Article } from './Articles';
export const SideBar = ({technicalSkills, articles}) => {
  useEffect(()=>{
    Aos.init({duration: 6000});
  },[]);
  return (
    <>
      {
        console.log(articles)
      }
    <div className="container" id="sidebar">

         <Card className=" shadow my-5
         " data-aos='fade-up' style={{backgroundColor: 'rgba(0, 0, 0, 0.8)'}}>
    <CardContent>
        <h4 className = "hero mb-4" style={{color: 'green',fontSize: '30px'}}>Articles</h4>
            <hr style={{color: 'gray'}}/>
            <Row>
              {
                articles.content.map((article)=>{
                  console.log(article)
                    return (
                        <>
                        <Col xs={6} md = {6}>
                        <Article article = {article}/>
                        </Col>
                       
                        </>
                    )
                })
              
            }  </Row>
      </CardContent>
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
     </Card>
    </div>
    </>
  )
}
