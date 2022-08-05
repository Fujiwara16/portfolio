import { useState } from 'react';
import './App.css';
import { PersonalInfo } from './components/PersonalInfo';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import {Content} from './components/Content'
import {Footer} from './components/Footer'
import {HeaderComponent} from './components/HeaderComponent'
import { Col,Row } from 'react-bootstrap';
import { BrowserRouter } from 'react-router-dom';
import {SideBar} from './components/SideBar';
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";
import {Achievements} from "./components/Achievements";
function App() {
  let myTheme = {
    width: '100%',
    height: '100%',
    zIndex:'2',
    scrollBehavior: "smooth"
  }
  let [technicalSkills] = useState({
    programming: [{
      name:"C/C++",
      path:"cLogo.png"
    },
    {
      name:"Python",
      path:"python.png"
    },
    {
      name:"Java",
      path:"java.png"
    },
    {
      name:"JavaScript",
      path:"javaScript.png",
    },
    {
      name:"React.js",
      path:"react.png",
    },
    {
      name:"SQL",
      path:"sqlite.png"
    } ,
    {
      name:"Dart",
      path:"dart.png",
    },
    {
      name:"HTML",
      path:"html.png",
    },
    {
      name:"CSS", 
      path:"css.png", 
    },
    {
      name:"Flutter",
      path:"flutter.png",
    }

],
    tools:["Git/Github", "Firebase", "Jira", "Google Cloud", "AWS Lambda", "AWS Amplify", "MY SQL" ,"Windows", "Mac", "Linux","Bootstrap"]
  });

  let [personalInfo] = useState({
    name: "Nij Mehar Grover",
    mobile:"+91-8303768196",
    education:"Bachelors in Technology",
    field: "Electrical Engineering / specialisation in Computer Science",
    institute:"Daylabagh Educational Institue | Agra",
    linkedin:"https://linkedin.com/in/nijmehar",
    github:"https://github.com/K1RA-16",
    email:"nijmehar16@gmail.com"
  })

 const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadFull(engine);
}, []);

const particlesLoaded = useCallback(async (container) => {
  await console.log(container);
}, []);
  return (
    <>
     <BrowserRouter>
    s
     <Particles style={{zIndex:'-100', position: 'fixed'}}
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                background: {
                    color: {
                        value: "#000000",
                    },
                },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: false,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "grab",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.1,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#ffffff",
                    },
                    links: {
                        color: "#ffffff",
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    collisions: {
                        enable: false,
                    },
                    move: {
                        directions: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 3,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: false,
                            area: 800,
                        },
                        value: 50,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 5 },
                    },
                },
                detectRetina: true,
            }}
        />
  
      <div className="bg-dark text-light" style={myTheme}>
    

      <HeaderComponent />
      <Card className="shadow text-light my-5" data-aos='fade-up'style={{backgroundColor: 'rgba(0, 0, 0, 0.8)'}}>
      <CardContent>
      <div className = "container" style={{minHeight: '40vh',}}>
        <PersonalInfo/>
        </div>
      </CardContent>
      </Card>
       
        <Row>
          <Col xs = {12} md={12} lg = {8}>
          <Content />
          </Col>
          <Col>
          <SideBar technicalSkills = {technicalSkills}/>
          </Col>
        </Row>
        <Achievements/>
          <Footer  personalInfo = {personalInfo}/>
         
        </div> 
     
       
    </BrowserRouter>
      </>
     
  );
}

export default App;
