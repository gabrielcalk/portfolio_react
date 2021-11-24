import React from 'react'
import swal from '@sweetalert/with-react'
import './style.css'

export default function RenderContact(){

    function showConfirmation(){
        swal('Message Sent!!!')
    }
    return(
        <div>
            <div className="contact_title">
                    <h1>Contact</h1>
                    <hr/>
            </div>
            <form className="input-container" action="https://formsubmit.co/gabrielcalk@outlook.com" method="POST">
                    <input type="hidden" name="_next" value="http://localhost:3000/"/>
                    <input type="hidden" name="_captcha" value="false"/>
                    <div>
                        <div className="styled-input wide">
                            <input type="text" name="email" required />
                            <label>Email</label> 
                        </div>
                    </div>
                    <div>
                        <div className="styled-input wide">
                            <input type="text" name="subject" required />
                            <label>Subject</label> 
                        </div>
                    </div>
                    <div>
                        <div className="styled-input wide">
                            <textarea name="message" required></textarea>
                            <label>Message</label>
                        </div>
                    </div>
                    <button onClick={showConfirmation} type="submit" className="submit-btn">Send Message</button>
            </form>
        </div>
    )
}