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
                    <div className='col-12 col-md-6 col-lg-6 aboutImagePart' data-aos="fade-right">
                        <img src="./sachin.png" alt="sachin" />
                    </div>
                    <div className='col-12 col-md-6 col-lg-6 aboutTextPart text-white' data-aos="fade-left">
                        <div>
                            <h3>I am Sachin Dhanda</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate ab temporibus enim itaque aliquid ipsam doloribus, commodi atque placeat in? Eius est assumenda reprehenderit. Mollitia dolores fugit quasi officia facilis.</p>
                            <table>
                                <tbody>
                                    <tr>
                                        <td className='pe-5'>Name   </td>
                                        <td>Sachin Dhanda    </td>
                                    </tr>
                                    <tr>
                                        <td className='pe-5'> Age</td>
                                        <td>29</td>
                                    </tr>
                                    <tr>
                                        <td className='pe-5'>Address</td>
                                        <td>Gurugram</td>
                                    </tr>
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
                            <button className='btn btn-primary mt-4'> Download CV</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
