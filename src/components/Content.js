import React, { useState } from 'react'
import {ContentBody} from './ContentBody';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
export const Content = () => {
    let contentStyle = {
        minHeight:'90vh',
    }
    let [experience] = useState([{
      id:0,
      title: 'mFilterIt',
      location: "Noida",
      project:false,
      time:"May. 2022 - June. 2022",
      role:"Software Engineer",
      techStack: "Flutter, dart, AWS, Python, SQL, Charles Proxy",
      body: "– Developed an app using flutter for internal employee performance assessment, optimised code structure using MVVM architecture for easier understanding. Automated the manual work for the HR department to assess an employee by implementing functions inside the server to provide consolidated rating to the user. Learnt to develop APIs using AWS lambda and python, debugged them using cloudwatch. Designed a database structure from scratch to store user data with SHA 256 encrypted password and KRAs for each employee. Used SMTP to send email on update, edit and delete calls.\n – Scraped data using Charles,Python and Pandas for apps and websites like - Zomato, Flipkart and Youtube. Optimised the code by implementing threading using Thread Pool Executor.\n – Developed a website using flutter and APIs to connect to the database for bundle scraping and provide an option for downloading a PDFs with data contained within them in an organised manner. Initialised a Fargate to scrape and input bundle data into the database if the bundle is not present in the existing DB.",
    }]);
    let[projects] = useState([{
      id:0,
      project:true,
      title: "DB Biometric Enrolment",
      body: "Developed a Flutter App to store and manage biometric data of over 1 Lakh people in AWS. Implemented features like Certificate Pinning to make the API calls secure, Encrypted Shared Preferences to encrypt the stored UIDs, Base64 encoding for captured face Image, restful API calls to connect to the AWS database, reading fingerprints through an AADHAR approved fingerprint scanner, data transfer between flutter and android through platform method channels, face check through Amazon Rekognition. Implement Certificate pinning, use encrypted shared preferences, lazy loading for huge amounts of data. Currently maintaining the project.",
      techStack:"Flutter/Dart/Kotlin",
      role:"Flutter Developer",
      time: "Mar. 2022 - Present",

    },
    {
      id:1,
      project:true,
      title:"DB Gaushala",
      body:"Developed a Flutter App to digitalise Dayalbagh Dairy. Worked on a live database of about 3000+ live stock to manage and maintain the dairy. Implemented different features like adding cows under a list, reading cow’s EPC through a bluetooth RFID reader. Learnt how to implement android code into a flutter application through Plat- form Method Channels, improved working with RFID reader android SDK through debugging and implementation of method channels. Currently maintaining the project.",
      techStack:"Flutter/Dart/Kotlin",
      role:"Flutter Developer",
      time: "Feb. 2022 - Present",
    },
    ]);

    
    
    // let [education] = useState([{
    //   title:"B.Tech (EE/cs)",
    //   institute:"Daylabagh Educational Institue | Agra",
    //   cgpa:"8.2 (Current)",
    //   year:"2020-Present",

    // }]);
    
  return (
  <>
      <div className = "container" style={contentStyle}>
        {/* <Divider style={{borderColor: 'gray',width: '100%'}}/> */}


      
      <Card className="shadow text-light my-5" data-aos='fade-up'  style={{backgroundColor: 'rgba(0, 0, 0, 0.8)'}}>
      <CardContent>
      <h1 className="hero p-3" style={{fontSize: '40px'}}>Experience</h1>
        <hr />
      {experience.length ===0 ? 
        "No experience present" : experience.map((experience)=>{
          return <ContentBody content = {experience} />;
        })}
      </CardContent>
      </Card>

          <Card className=" shadow text-light my-5" data-aos='fade-up' style={{backgroundColor: 'rgba(0, 0, 0, 0.8)'}}>
      <CardContent>
        <h1 className="hero p-3" style={{fontSize: '40px'}}>Projects</h1>
        <hr />
      {projects.length ===0 ? 
        "No Projects present" : projects.map((project)=>{
          return <ContentBody content = {project} />;
        })}
      </CardContent>
      </Card>


      
      </div>
      
  </>
    
  )
}
