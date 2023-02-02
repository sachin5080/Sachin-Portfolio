import React, { useEffect } from 'react'
import "./Services.css"
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Services() {
    useEffect(() => {
       AOS.init({duration: 2000})
    }, [] )
  return (
    <div className='services p-5' id='services'>
        <div className="myserviceText pt-5">
            <h3>My <span>SERVICES</span></h3><br/>
            <hr/>
        </div>
        <div className="container text-center mt-5">
            <div className="row">
                <div className="col-12 col-md-6 col-lg-4 p-3" data-aos="fade-right">
                    <div className="border service p-4">
                        <p className='serviceIcon'><span className='border p-2'><i className="bi bi-chat-right-quote"></i></span></p>
                        <h5 className='mt-4'>WEB DEVELOPMENT</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod a et dolorum assumenda! At eum distinctio commodi molestiae nobis iure labore odit dolores cum ut rerum pariatur expedita, impedit ipsam!</p>
                    </div>

                </div>
                <div className="col-12 col-md-6 col-lg-4 p-3" data-aos="zoom-in">
                    <div className="border service p-4">
                        <p className='serviceIcon'><span className='border p-2'><i className="bi bi-chat-right-quote"></i></span></p>
                        <h5 className='mt-4'>WEB DESIGN</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod a et dolorum assumenda! At eum distinctio commodi molestiae nobis iure labore odit dolores cum ut rerum pariatur expedita, impedit ipsam!</p>
                    </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 p-3" data-aos="fade-left">
                    <div className="border service p-4">
                        <p className='serviceIcon'><span className='border p-2'><i className="bi bi-chat-right-quote"></i></span></p>
                        <h5 className='mt-4'>WEB DEVELOPMENT</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod a et dolorum assumenda! At eum distinctio commodi molestiae nobis iure labore odit dolores cum ut rerum pariatur expedita, impedit ipsam!</p>
                    </div>

                </div>
            </div>
        </div>
      
    </div>
  )
}
