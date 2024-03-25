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
  let [article_content] = useState({
    content: [{
      name:"Using AWS EC2 to Process Resource-Intensive Tasks by Utilising AWS SQS and AWS Lambda",
      path:"article_1.png",
      url: "https://medium.com/aws-in-plain-english/using-aws-ec2-to-process-resource-intensive-tasks-by-utilising-aws-sqs-and-aws-lambda-a6cdf05d434b"
    },
    {
      name:"Develop a chatbot using WhatsApp Flows and integrate it with your backend",
      path:"article_2.png",
      url: "https://medium.com/@nijmehar16/develop-a-chatbot-using-whatsapp-flows-and-integrate-it-with-your-backend-cf61142aca2e"
    },{
      name:"Uploading Large Files to AWS S3 Using Multipart Upload from Frontend",
      path:"article_3.png",
      url: "https://medium.com/aws-in-plain-english/uploading-large-files-to-aws-s3-using-multipart-upload-from-frontend-bee9761d3d62"
    },{
      name:"Uploading videos to youtube via the Youtube api programmatically using the refresh token provided by OAuth 2.0",
      path:"article_4.png",
      url: "https://medium.com/@nijmehar16/uploading-videos-to-youtube-via-the-youtube-api-programmatically-which-uses-oauth-2-0-7317ec72411e"
    },{
      name:"Fetching bulk data from AWS Dynamo DB in a pod with limited resources and accessing it",
      path:"article_5.png",
      url: "https://aws.plainenglish.io/fetching-bulk-data-from-aws-dynamo-db-in-a-pod-with-limited-resources-and-accessing-it-edcbeeb0cb9e"
    },]})
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
    },
    {
      name:"Swift",
      path:"swift.png",
    },
    {
      name:"AWS",
      path:"aws.png",
    },
    {
      name:"Docker",
      path:"docker.png",
    },
    {
      name:"Vim",
      path:"vim.png",
    },
    {
      name:"Flask",
      path:"flask.png",
    }


],
    tools:["Git/Github", "Firebase", "Jira", "Google Cloud", "AWS Lambda", "AWS Amplify", "MY SQL" ,"Windows", "Mac", "Linux","Bootstrap", "Xcode","SwiftUI"]
  });

  let [personalInfo] = useState({
    name: "Nij Mehar Grover",
    mobile:"+91-8303768196",
    education:"Bachelors in Technology",
    field: "Electrical Engineering / specialisation in Computer Science",
    institute:"Daylabagh Educational Institue | Agra",
    linkedin:"https://linkedin.com/in/nijmehar",
    github:"https://github.com/Fujiwara16",
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
     <div style={{ backgroundColor: 'black', minHeight: '100vh', width: '100vw', overflowY: 'scroll' }}>
      <BrowserRouter>
        <HeaderComponent />
        <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)', padding: '20px' }}> {/* Added padding for a better visual */}
          <Card className="shadow text-light my-5" data-aos='fade-up' style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}>
            <CardContent>
              <div className="container" style={{ minHeight: '60vh' }}>
                <PersonalInfo />
              </div>
            </CardContent>
          </Card>
           <Row>
          <Col xs = {12} md={12} lg = {8}>
          <Content />
          </Col>
          <Col>
          <SideBar technicalSkills = {technicalSkills} articles = {article_content}/>
          </Col>
        </Row>
        <Achievements/>
          <Footer  personalInfo = {personalInfo}/>
         
        </div>
      </BrowserRouter>
    </div>

     
  );
}

export default App;
