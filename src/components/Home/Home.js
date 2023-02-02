import React from 'react'
import Typewriter from 'typewriter-effect'
import "./Home.css"

export default function Home() {
    return (
        <div className='home w-100'>
            <div className="container">
                <div className="row pt-5">
                    <div className=" homeTextPart text-light">
                        <div>
                            <h3 className='welcome'>WELCOME !</h3> <br/>
                            <h1>
                                <Typewriter
                                    options={{
                                        autoStart: true,
                                        loop: true,
                                        delay: 60,
                                        strings: ["Hi, I am SACHIN"]
                                    }} />
                            </h1><br/>
                            <p>A highly motivated and enthusiastic software developer seeking a challenging role as a Front-End Developer where i can utilize my skills in React.js, HTML, CSS, Javascript and Bootstrap to create interactive and user-friendly websites.</p>
                            <div className="icons">
                                <a href="https://www.linkedin.com/in/sachin-kumar-04060b258/"><i className="bi bi-linkedin"></i></a>
                                <a href="https://github.com/sachin5080"><i className="bi bi-github"></i></a>
                            </div>
                        </div>
                    </div>
                   
                </div>
            </div>

        </div>
    )
}
