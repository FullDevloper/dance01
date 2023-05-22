import React from 'react'
import "./contact.css";
const Contact = () => {
  return (
    <section className='contact container section' id='contact'>
      <h2 className='section__title'>Бидэнтэй холбогдох</h2>
      <div className='contact__container grid'>
      <div className='contact_info'>
      <h3 className='contact__title'>Хүсэлт илгээх</h3>
      <p className='contact__details'>Манай вэб сайт нь бүжиглэх дуртай хэн бүхэнд нээлттэй юм. Та манай вэб сайтаас өөрийн хүссэн бүжгийн төрлөөр сургалт авах боломжтой бөгөөд сургалтаа танхимаар болон онлайн хэлбэрээр сонгох боломжтой.</p>


      </div>
      <form action='' className='contact_form'>
      <div className='contact__form-group'>
      <div className='contact-form-div'>
      <input type='text' className='contact__form-input' placeholder='Таны нэр'/>
      </div>
      <div className='contact-form-div'>
      <input type='text' className='contact__form-input' placeholder='Таны нэр'/>
      </div>

      </div>
      <div className='contact-form-div'>
      <input type='text' className='contact__form-input' placeholder='Таны и-мэйл'/>
      </div>
      <div className='contact-form-div contact__form-area'>
      <textarea cols="20" rows="10" type='text' className='contact__form-input' placeholder='Сэтгэгдэл бичих'></textarea>
      </div>
 
      <button className='btn'>Илгээх</button>
  </form>
      </div>

    </section>
  )
}

export default Contact
