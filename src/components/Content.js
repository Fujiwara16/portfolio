import React, { useState } from 'react'
import {ContentBody} from './ContentBody';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
export const Content = () => {
    let contentStyle = {
        minHeight:'90vh',
    }
    let [experience] = useState([{
      id:-1,
      title: 'Bhanzu',
      location: "Bangalore",
      project:false,
      time:"May. 2024 - Present",
      role:"Software Engineer 2",
      techStack: "Python, Flask API, Fast API, AWS, EC2, Lambda, SNS, SQS, CloudWatch, S3, DynamoDB, ArgoCD, Docker",
      body: "• Enhanced student management and course administration by adding support for multiple sessions, implementing grade changes, and enhancing batch management. This improved user satisfaction and operational efficiency by 20% in turn reducing inconsistent data in the DB.\n• Streamlined demo session management by removing dependencies, adding bulk cancellation support, and enabling multiple trainer support for demo sessions, resulting in an increase in scheduling efficiency.\n• Personalized the teacher dashboard for admins, integrated new calendar APIs, and provided tools for handling student lists affected by trainer leaves, leading to a 30% reduction in administrative workload. This in turn also aided verification of claims made by teachers in turn reducing the amount of unnecessary tickets.\n• Developed jobs to book demo sessions for leads that were manually catered for, analyzed demo bookings through WhatsApp chatbots, and tracked failed communications, increasing lead conversion rates by 40%.",
    },{
      id:0,
      title: 'Bhanzu',
      location: "Bangalore",
      project:false,
      time:"June. 2023 - May. 2024",
      role:"Software Engineer",
      techStack: "Python, Flask API, Fast API, AWS, EC2, Lambda, SNS, SQS, CloudWatch, S3, DynamoDB, ArgoCD, Docker",
      body: "• Led a team in developing an automated video generation tool, emphasizing project planning and backend development.\n• Built the backend for real-time doubt resolution using GPT for courses taught by Neelkantha Bhanu.\n• Pioneered the use of WhatsApp flows, resulting in a 15% increase in potential customers.\n• Integrated WhatsApp flows into Bhanzu’s chatbot for handling demo booking queries.\n• Currently expanding use cases in Bhanzu’s WhatsApp chatbot, with a present adoption rate of 94%.\n• Independently built the Bhanzu Parent App in Flutter using the BLOC architecture from scratch.\n• Transitioned to a full-stack environment, developing both the backend and frontend for creating a referral system.\n• Secured a full-time offer by winning a hackathon focused on generative AI product development.",
    },
    {
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
      id:6,
      project:false,
      title: "Dev Utils",
      url: "https://github.com/Fujiwara16/dev_utils_cli",
      body: "Developed Dev Utils CLI, an open-source command-line tool that provides essential utilities for developers, including time conversion (currentTime, dateToEpoch), Base64 encoding/decoding (base64Encode, base64Decode), and data formatting for JSON and CSV (jsonFormat, csvFormat). The tool is designed to streamline common developer tasks and enhance productivity.",
      techStack:"Python, CLI integrations",
      role:"Software Developer",
      time: "Aug. 2024",

    },
    {
      id:5,
      project:false,
      title: "PrevRun",
      url: "https://66a89e1e7801f30cbac9f869--prevrun.netlify.app/",
      body: "\nPrevRun is a comprehensive project for streamlined video uploading to YouTube:\n\n" +

"• Backend API Services: Engineered a series of APIs for video upload, seamlessly managing tasks like sending videos to S3, storing details in the database, and notifying workspace owners.\n" +
"• CloudFront CDN Integration: Leveraged CloudFront CDN for efficient video distribution, significantly enhancing delivery speed and reducing latency.\n" +
"• YouTube Video Upload: Implemented the use of EC2 instances to upload videos to YouTube, harnessing their processing power and scalability.\n" +
"• SQS Integration: Integrated SQS for managing asynchronous tasks, ensuring streamlined video processing and upload workflows.\n" +
"• Custom Console Interface: Established a secure console interface, console.prevrun.net, providing intuitive access to users.\n" +
"• Git Repository and CI/CD: Set up a Git repository and implemented GitHub Actions for version control and automated deployment, adhering to best practices.\n" +
"• Robust Microservice Architecture: Demonstrated expertise in crafting a robust backend microservice architecture, emphasizing scalability and reliability.\n" +
"• Leadership and Oversight: Led a dedicated team of three, ensuring the successful implementation and overall success of the project.",
      techStack:"Python, Flask API, Fast API, AWS, EC2, Lambda, SNS, SQS, CloudWatch, S3, DynamoDB, Route53, Cloudfront, React",
      role:"Software Developer",
      time: "Dec. 2023 - Feb. 2024",
    },
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
