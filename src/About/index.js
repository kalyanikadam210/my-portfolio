import React from "react";
import PageHeaderContent from "../utils.js/PageHeaderContent";
import { BsInfoCircleFill } from 'react-icons/bs'
import { Animate } from 'react-simple-animate'
import './style.scss';
import { DiApple, DiAndroid } from "react-icons/di"
import { FaDev, FaDatabase } from 'react-icons/fa'


const personalDetails = [
   {
      label: "Name :-",
      value: "Kalyani  kadam",

   },
   {
      label: "age :-",
      value: "25",

   },
   {
      label: "Address :-",
      value: "India",

   },
   {
      label: "Email :-",
      value: "kalyanikadam210gmail.com",

   },
   {
      label: "Contact No :-",
      value: "+91 9699613759",

   },

];


const jobsummary = "I am fresher frontend developer, I specialize in creating the visual part of websites or web applications that users interact with. I use languages like HTML for structure, CSS for styling, and JavaScript for making things interactive I'm familiar with popular frontend frameworks like React, Angular, or Vue.js, which help me build complex and modern web applications more efficiently. I focus on making sure websites look great and work smoothly across different devices, like desktops, tablets, and smartphones."

const About = () => {
   return (

      <section id="about" className="about">
         <PageHeaderContent
            headerText='About Me'
            icon={<BsInfoCircleFill size={30} />}
         />

         <div className="about_content">
            <div className="about_content_personalWrapper">
               <Animate
                  play

                  duration={1.5}
                  delay={1}
                  start={{
                     transform: "translateX(-900px)"
                  }}

                  end={{
                     transform: 'translate(0px)'
                  }}
               >
                  <h3>Front End Developer</h3>
                  <p>{jobsummary}</p>
               </Animate>

               <Animate
                  play

                  duration={1.5}
                  delay={1}
                  start={{
                     transform: "translateX(500px)"
                  }}

                  end={{
                     transform: 'translate(0px)'
                  }}
               >

                  <h3 className="personalInformationHeaderText"> Personal Details</h3>
                  <ul>
                     {
                        personalDetails.map((item, i) => (
                           <li key={i}>
                              <span className="title">{item.label}</span>
                              <span className="value">{item.value}</span>
                           </li>
                        ))
                     }
                  </ul>
               </Animate>

            </div>
            <div className="about_content_serviceWrapper">
            <Animate
                  play

                  duration={1.5}
                  delay={1}
                  start={{
                     transform: "translateX(600px)"
                  }}

                  end={{
                     transform: 'translate(0px)'
                  }}
               >

               <div className="about_content_serviceWrapper_innerContent">
                  <div>
                     <FaDev size={60} color="var(--yellow-theme-main-color)" />
                  </div>
                  <div>
                     <DiAndroid size={60} color="var(--yellow-theme-main-color)" />
                  </div>
                  <div>
                     <FaDatabase size={60} color="var(--yellow-theme-main-color)" />
                  </div>
                  <div>
                     <DiApple size={60} color="var(--yellow-theme-main-color)" />
                  </div>
               </div>
               </Animate>
            </div>
         </div>
      </section>


   )
}
export default About;