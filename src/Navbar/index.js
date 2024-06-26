import React, { useState } from "react";

import { Link } from "react-router-dom";

import "./style.scss";
import logo from '../image/logo.png'

const data = [
    {
    label:'HOME',
    to:'/'
},
{
    label:'ABOUT ME',
    to:'/about'
},
{
    label:'SKILLS',
    to:'/skill'
},
{
    label:'ACHIEVEMENTS',
    to:'/resume'
},
{
    label:'PROJECT',
    to:'/portfolio'
},
{
    label:'CONTACT',
    to:'/contact'
} 



]
const Navbar =()=>{

    const[ToggleIcon,setToggleIcon] =useState (false);
    const handleToggleIcon =()=>{
        setToggleIcon(!ToggleIcon);
    
    };
    return(
        <div>
            <nav className="navbar">
                <div className="navbar_container">
                 <Link to={'/'} className='navbar_container_logo'>
                   <img src={logo}  alt='logo' width={140} />
                 
                 </Link>
                </div>
                <ul 
                className={'navbar_container_menu {ToggleIcon ? "active" :""}'}
                >
                    {
                        data.map((item, key)=>(
                            <li key={key} className="navbar_container_menu_item">
                                <Link className="navbar_container_menu_item_links" to={item.to}>
                                    {item.label}
                                </Link>
                            </li>

                        )
                    )
                    }
                </ul>
                <div className="nav-icon" onClick={handleToggleIcon}>
                
                </div>
                </nav>
            </div>



    )
}

export default Navbar;