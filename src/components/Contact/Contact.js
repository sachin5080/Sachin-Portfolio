import React from 'react'
import "./Contact.css"

export default function Contact() {
    return (
        <div className='contact text-center text-white pb-2' id='contact'>
            <br /> <h1>Contact </h1> <br />

            <hr />

            <div className='container mx-md-auto text-center'>
                <form>
                    <div className='form-group mt-2'>
                        <label for="Uname"> User Name:</label>
                        <input type="text" className='form-control' id="Uname" placeholder='Enter name' />
                    </div>
                    <div className='form-group mt-2'>
                        <label for="email"> Email:</label>
                        <input type="email" className='form-control' id="email" placeholder='Enter email' />
                    </div>
                    <div className='form-group mt-2'>
                        <label for="message"> Message:</label>
                        <textarea className="form-control" id="message" cols="30" rows="10"
                            placeholder='Message...'></textarea>
                    </div>
                    <button className='btn mt-2' type='button'>Message me</button>
                </form>

            </div>

        </div>
    )
}
