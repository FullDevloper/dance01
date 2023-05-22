import React, { useState } from 'react'
import "./portfolio.css";
import Menu from "./Menu";
const Portfolio = () => {
  const [items,setItems]=useState(Menu);
  const filterItem=(categoryItem)=>{
    const updatedItems =Menu.filter((curElem)=>{
      return curElem.category === categoryItem
    })
    setItems(updatedItems);
  }
  return (
    <section className='work container section' id='learns'>
      <h2 className='section__title'>
      Үндсэн сургалтууд
      </h2>
  <div className='work_filters'>
  <span className='work_item' onClick={()=>setItems(Menu)}>Бүх сургалт</span>
  <span className='work_item' onClick={()=>filterItem("Баллет")}>Баллет</span>
  <span className='work_item' onClick={()=>filterItem("Үндэсний бүжиг")}>Үндэсний бүжиг</span>
  <span className='work_item' onClick={()=>filterItem("Чөлөөт")}>Чөлөөт бүжиг</span>
  <span className='work_item' onClick={()=>filterItem("Уран нугаралт")}>Уран нугаралт</span>
  </div>      
  <div className='work_container grid'>
  {items.map((elem)=>{
    const {id,image,title,category}=elem;
    return(
      <div className='work__card' key={id}>
        <div className='work__thumbnail'>
        <img src={image} alt='' className='work_img'/>
        <div className='work__mask'></div>
        </div>
        <span className='work__category'>{category}</span>
        <h3 className='work__title'>{title}</h3>
        <a href='#home' className='work_button'>
        <i className='work_button-icon'>
 Дэлгэрэнгүй
        </i>
        </a>
      </div>
    )
  })}
  </div>
    </section>
  )
}

export default Portfolio
