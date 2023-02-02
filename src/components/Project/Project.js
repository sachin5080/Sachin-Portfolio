import React, {useEffect} from 'react'
import './Project.css'

import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Projects() {
    useEffect(() => {
        AOS.init({duration: 2000})
    }, []);
    return(
        <div className='projects p-5' id='projects'>
            <div className='myProjectsText'>
                <h3>MY <span>Projects</span></h3> <br /> <hr />
            </div> 
            <div className='container text-center mt-4'>
                <div className='row'>
                    <div className='col-12 col-md-6 col-lg-4 p-4' data-aos="flip-right">
                        <div className="card text-dark">
                            <img src='/social.jpg' className="card-img-top" alt="Social Media" />
                            <div className="card-body">
                                <h5 className="card-title">Social Media App</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn">More Detail</a>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-md-6 col-lg-4 p-4' data-aos="zoom-in">
                        <div className="card text-dark">
                            <img src='/social.jpg' className="card-img-top" alt="Job Portal" />
                            <div className="card-body">
                                <h5 className="card-title">Job Portal</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn">More Detail</a>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-md-6 col-lg-4 p-4' data-aos="flip-left">
                        <div className="card text-dark">
                            <img src='/social.jpg' className="card-img-top" alt="Online vote" />
                            <div className="card-body">
                                <h5 className="card-title">Online Vote</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn">More Detail</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


