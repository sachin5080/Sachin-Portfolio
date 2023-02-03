import React, { useEffect } from 'react'
import "./About.css"
import Aos from 'aos'
import 'aos/dist/aos.css'

export default function About() {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])
    return (
        <div className='w-100 about' id='about'>
            <div className="container">
                <div className='row pt-5'>
                    <div className='text-center col-12 col-md-6 col-lg-6 aboutImagePart' data-aos="fade-right">
                        <img src="./sachin.png" alt="sachin" />
                    </div>
                    <div className='col-12 col-md-6 col-lg-6 aboutTextPart text-white' data-aos="fade-left">
                        <div>
                            <h3>I am Sachin Kumar</h3>
                            <p>I am a highly motivated and skilled Front End Developer in building user-friendly, responsive, and visually appealing websites. I am a creative problem-solver who is always seeking new challenges and opportunities to improve my skills and stay up-to-date with the latest technology and design trends.
                                When am not working i travel and explore new places. I love playing online games and reading blogs and to stay fit mentally and physically i do yoga and meditation. </p>
                            <h2>SKILLS</h2>
                            <ul>
                                <li>HTML5</li>
                                <li>CSS3</li>
                                <li>JAVASCRIPT</li>
                                <li>BOOTSTRAP</li>
                                <li>REACTJS</li>
                                <li>GITHUB</li>
                                <li>VISUAL STUDIO CODE</li>
                            </ul>
                            <table>
                                <tbody>


                                    <tr>
                                        <td className='pe-5'>Mobile</td>
                                        <td>9971004091</td>
                                    </tr>
                                    <tr>
                                        <td className='pe-5'>Email</td>
                                        <td>kunjean5080@gmail.com</td>
                                    </tr>

                                </tbody>
                            </table>
                            <a href="Resume-Sachin.pdf" download="Resume-Sachin.pdf"><button className='btn btn-primary mt-4'> Download CV</button>
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
