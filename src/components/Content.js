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
      title: 'Bhanzu',
      location: "Bangalore",
      project:false,
      time:"June. 2023 - Present",
      role:"Software Engineer",
      techStack: "Python, Flask API, Fast API, AWS, EC2, Lambda, SNS, SQS, CloudWatch, S3, DynamoDB, ArgoCD, Docker",
      body: "\n• Led a team in developing an automated video generation tool, emphasizing project planning and backend development.\n• Built the backend for real-time doubt resolution using GPT for courses taught by Neelkantha Bhanu.\n• Pioneered the use of WhatsApp flows, resulting in a 15% increase in potential customers.\n• Successfully implemented WhatsApp flows nationally for booking demo classes, leading to a 35% boost in lead generation.\n• Integrated WhatsApp flows into Bhanzu's chatbot for handling demo booking queries.\n• Currently expanding use cases in Bhanzu’s WhatsApp chatbot, with a present adoption rate of 64%.",
    },
    {
      id:5,
      project:false,
      title: "PrevRun",
      url: "https://prevrun.net",
      body: "PrevRun is a comprehensive project for streamlined video uploading to YouTube, involving various components and stages:\n\n" +

"• Designed a database schema with a 'video_details' table for efficient storage of video metadata.\n" +

"• Implemented an API for validating if a given workspace ID contains the editor's email in its access list, ensuring authorized access for video uploads.\n" +

"• Developed an API to handle removals, preventing unintended workspace ID removals and maintaining data integrity.\n" +

"• Coordinated a series of APIs for video upload: sending the video to an S3 bucket, storing details in the database, and notifying the workspace owner via email.\n" +

"• Utilized CloudFront CDN for efficient video distribution, enhancing the delivery speed and reducing latency.\n" +

"• Uploaded videos to YouTube using EC2 instances, leveraging their processing power and scalability.\n" +

"• Integrated SQS (Simple Queue Service) for managing asynchronous tasks, ensuring efficient video processing and upload workflows.\n" +

"• Created an API for adding or removing a specific email from a creator's workspace, updating the access list and sending an email with the workspace code.\n" +

"• Implemented an API query to retrieve all available workspace IDs for centralized control and management.\n" +

"• Developed functionality for creating workspace IDs, automatically assigning the creator as the owner for a clear ownership structure.\n" +

"• Established an intuitive upload video page and configured the main page for editors, providing an overview of available functionalities.\n" +

"• Set up a custom URL, console.prevrun.net, for secure access to the console interface.\n" +

"• Configured a Git repository and GitHub Actions for version control and automated deployment, ensuring best practices in development.\n" +

"• Demonstrated a robust backend microservice architecture and CICD pipelines for continuous deployment across AWS services (Lambda, EC2, and S3).\n" +

"• Led a team of three, overseeing successful implementation and ensuring the project's overall success.",
      techStack:"Python, Flask API, Fast API, AWS, EC2, Lambda, SNS, SQS, CloudWatch, S3, DynamoDB, Route53, Cloudfront, React",
      role:"CEO, CTO",
      time: "Dec. 2023 - Present",

    },{
      id:1,
      title: 'Bhanzu',
      location: "Bangalore",
      project:false,
      time:"Feb. 2023 - May. 2023",
      role:"Software Engineer Intern",
      techStack: "Flutter, dart, AWS, Python",
      body: "\n• Independently built the Bhanzu Parent App in Flutter using the BLOC architecture from scratch.\n• Transitioned to a full-stack environment, developing both the backend and frontend for creating a referral system.\n• Ensured high code quality and secured a full-time offer by winning a hackathon focused on generative AI product development." },
    {
      id:2,
      title: 'mFilterIt',
      location: "Noida",
      project:false,
      time:"May. 2022 - June. 2022",
      role:"Software Engineer Intern",
      techStack: "Flutter, dart, AWS, Python, SQL, Charles Proxy",
      body: "\n• Developed a Flutter app for internal employee performance assessment, implementing MVVM architecture for optimized code structure.\n• Automated HR tasks by creating server functions for consolidated employee ratings.\n• Mastered AWS Lambda and Python for API development, with debugging expertise using CloudWatch.\n• Designed a secure database structure storing user data with SHA-256 encrypted passwords and KRAs for each employee.\n• Implemented SMTP for email notifications on updates, edits, and deletions.\n• Conducted data scraping using Charles, Python, and Pandas for various apps and websites like Zomato, Flipkart, and Youtube.\n• Optimized code efficiency through threading using Thread Pool Executor.\n• Developed a website in Flutter with APIs to connect to the database, enabling bundle scraping and providing an option to download organized PDFs.\n• Initiated a Fargate for scraping and inputting bundle data into the database if not present.",
    }]);
    let[projects] = useState([
    
    {
      id:4,
      project:true,
      title: "Surat Saheli",
      url: "https://suratsaheli.netlify.app/",
      body: "\n• Developed Surat Saheli, an advanced chatbot addressing consciousness within the Ra Dha Sva Aa Mi faith.\n• Engineered a website and a mobile app with a locally hosted backend server exposed through Ngrok.\n• Implemented a robust CI/CD pipeline for seamless deployment.\n• Utilized Rasa for chatbot development served through Flask, coupled with a Flutter-based frontend.",
      techStack:"Rasa, Python, Flutter, Dart, Github",
      role:"Software Developer",
      time: "Dec. 2022 - Present",

    },{
      id:0,
      project:true,
      title: "Verve Vision",
      url: "https://github.com/Fujiwara16/Verve-Vision",
      body: "\n• Architected an iOS app harnessing cutting-edge AI capabilities.\n• Empowered users to generate AI images based on prompts and share, enhance, or save them.\n• Engineered a robust post creation feature, storing images and prompts securely in a database.\n• Implemented user-centric features like friend search, follow functionality, and personalized feeds.",
      techStack:"Swift, SwiftUi, Firebase, Cocoapods",
      role:"iOS Developer",
      time: "Dec. 2022 - Jan. 2023",

    },{
      id:1,
      project:true,
      title: "Game Sensei",
      url: "https://github.com/Fujiwara16/GameGenesis",
      body: "\n• Crafted an interactive UI for efficient game searching within a vast database.\n• Engineered a dynamic platform showcasing the latest popular games and a categorized catalog based on genres.\n• Designed an immersive game view screen offering detailed information, including ratings, publishers, and system requirements.",
      techStack:"Swift, SwiftUi, Cocoapods",
      role:"iOS Developer",
      time: "Nov. 2022 - Dec. 2022",

    },{
      id:2,
      project:true,
      title: "DB Biometric Enrolment",
      url: "https://github.com/Fujiwara16/Dayalbagh-Id-Card",
      body: "\n• Developed a high-security Flutter app managing biometric data for over 1 Lakh individuals on AWS.\n• Implemented advanced security measures like Certificate Pinning and Encrypted Shared Preferences.\n• Integrated features such as Base64 encoding for face images and secure data transfer between Flutter and Android using platform method channels.\n• Leveraged Amazon Rekognition for robust face verification.",
      techStack:"Flutter, Dart, Kotlin, Swift",
      role:"Flutter Developer",
      time: "Mar. 2022 - Feb. 2023",

    },
    {
      id:3,
      project:true,
      title:"DB Gaushala",
      url: "https://github.com/Fujiwara16/DB-gaushala-preview",
      body:"\n• Spearheaded the digital transformation of Dayalbagh Dairy with a robust Flutter app.\n• Managed a live database of 3000+ livestock, incorporating features like adding cows and RFID integration.\n• Executed seamless integration of Android code into the Flutter application using Platform Method Channels.\n• Continuously maintaining and enhancing the project for optimal performance.",
      techStack:"Flutter, Dart, Kotlin, Swift",
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
