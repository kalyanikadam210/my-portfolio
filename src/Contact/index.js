import React from "react";

import PageHeaderContent from "../utils.js/PageHeaderContent";
import { BsInfoCircleFill } from 'react-icons/bs'
import { Animate } from 'react-simple-animate'
import './style.scss';


import '../Contact/style.scss'
const Contact = () => {
  return (
    <section id="contact" className="contact">
      

      <div className="contact_content">
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: 'translateX(-200px)'
          }}
          end={{
            transform: 'translateX(0px)'
          }}>
          
        </Animate>
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: 'translateX(200px)'
          }}
          end={{
            transform: 'translateX(0px)'
          }}>

          <div className="contact_content_form">
            <div className="contact_content_form_controlswrapper">
              <div>
                <input required name="name" className="inputName" type={"text"} />
                <label htmlFor="name" className="nameLabel">Name</label>
              </div>
              <div >
                <input required name="email" className="inputEmail" type={"text"} />
                <label htmlFor="email" className="emailLabel">Email</label>
              </div>
              <div >
                <textarea required name="description" className="inputdescription" type={"text"} rows="5" />
                <label htmlFor="description" className="descriptionLabel">Description</label>
              </div>


            </div>
            <button>Sumbit</button>
          </div>
        </Animate>
      </div>
    </section>
  )
}
export default Contact;



