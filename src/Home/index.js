import React from "react";
import "./style.scss";
import { useNavigate } from 'react-router-dom';
import {Animate} from 'react-simple-animate'

const Home = () => {
   const navigate = useNavigate();
   console.log(navigate);

   const handdleNavigateToContactMePage = () => {
      navigate("/contact");

   }
   return (
      <section id="home" className="home">
         <div className="home_text-wrapper">
            <h1>Hello, I'm Kalyani
               <br />
               Front end developer
            </h1>
         </div>
         <Animate
            play

            duration={1.5}
            delay={1}
            start={{
               transform: "translateY(550px)"
            }}

            end={{
               transform:'translate(0px)'
            }}
         >

            <div className="home_contact-me">
               <button onClick={handdleNavigateToContactMePage}>Hire Me</button>
            </div>
         </Animate>
      </section>
   )
}
export default Home;