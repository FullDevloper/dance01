import React, { useState } from 'react'
import "./sidebar.css";
import { Tooltip } from '@mui/material';
import Logo from "../../assets/logo1.png"
const SideBar = () => {
  const [toggle,showMenu]=useState(true);
  return (
    <>
    <div className={toggle ? "aside show-menu" :"aside"}>
    <a href='#home' className='nav__logo'>
      <img src={Logo} alt=""/>
    </a>
  <nav className='nav'>
  <div className='nav_menu'>
    <ul className='nav_list'>
    <Tooltip title="Нүүр" placement="right-start">
    
    <li className='nav_item'>
    <a href='#home' className='nav_link'>
    <i className='icon-home'></i>
    </a>
    </li>
    </Tooltip>

    <Tooltip title="Онцлох сургалт" placement="right-start">
    <li className='nav_item'>
    <a href='#ontsloh' className='nav_link'>
    <i className='icon-graduation'></i>
    </a>
    </li>
    </Tooltip>
 
    <Tooltip title="Сургалтууд" placement="right-start">
    <li className='nav_item'>
    <a href='#learns' className='nav_link'>
    <i className='icon-layers'></i>
    </a>
    </li>
    </Tooltip>

    <Tooltip title="Сэтгэгдэл" placement="right-start">
    <li className='nav_item'>
    <a href='#comment' className='nav_link'>
    <i className='icon-bubble'></i>
    </a>
    </li>
    </Tooltip>
  <Tooltip title="Бидэнтэй холбогдох" placement='right-start'>
  <li className='nav_item'>
  <a href=' #contact' className='nav_link'>
  <i className='icon-note'></i>
  </a>
  </li>
  
  </Tooltip>
  <Tooltip title="Нэвтрэх | Бүртгүүлэх" placement='right-start'>
  <li className='nav_item'>
  <a href='#home' className='nav_link'>
  <i className='icon-login'></i>
  </a>
  </li>
  
  </Tooltip>

    </ul>
  </div>
  </nav>    
  <div className='nav_footer'>
  <span className='copyright'> &copy; 2022 - 2023.</span>
  </div>
 </div>
 <div className={toggle ? "nav__toggle nav__toggle-open" : "nav__toggle"} onClick={()=>showMenu(!toggle)}>
    <i className='icon-menu'></i>
 </div>
    </>

  )
}

export default SideBar
