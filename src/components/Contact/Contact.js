import React, { useRef } from 'react'
import { ImLocation2 } from "react-icons/im"
import { BsTelephonePlusFill } from "react-icons/bs"
import { SiGmail } from "react-icons/si"
import { FaLinkedinIn } from "react-icons/fa"
import emailjs from '@emailjs/browser';
import "./contact.css"
const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_djjtnda', 'template_ouxmvln', form.current, '5FDabzUw-Qp0__Bas')
            .then((result) => {
                console.log(result.text);
                alert("message sent successfully")
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div style={{ paddingTop: "60px" }} id="contact">
            <h1 className="project-heading p-4">
                Want to <strong className="purple">Hire me</strong>
            </h1>
            <div className='p-4 container first_div'>
                <div className='row '>
                    <div className='col-lg-5 col-md-5  d-none d-lg-block d-md-block  pb-4  text-white text-left  align-items-center justify-content-center ' >
                        <h2 className='pt-4'>Contact Information</h2><br></br>
                        {/* <div className='row' style={{ backgroundColor: "#1c1e25"}}> */}
                        <div
                            className=' w-100  d-flex align-items-start icon_div'>
                            <div className="icon d-flex align-items-center justify-content-center">
                                <ImLocation2 className='main_icon' />
                            </div>
                            <div class="text ">
                                <p><span>Address  :</span> Trapti Nagar Morar, Gwalior, 474006 MP INDIA
                                </p>
                            </div>
                        </div>
                        <div
                            className=' w-100  d-flex align-items-start icon_div'>
                            <div className="icon d-flex align-items-center justify-content-center">
                                <BsTelephonePlusFill className='main_icon' />
                            </div>
                            <div class="text ">
                                <p><span>Phone  :</span> +91 7447008212
                                </p>
                            </div>
                        </div>
                        <div
                            className=' w-100  d-flex align-items-start icon_div'>
                            <div className="icon d-flex align-items-center justify-content-center">
                                <SiGmail className='main_icon' />
                            </div>
                            <div class="text ">
                                <p><span>Email  :</span> ffencer525@gmail.com
                                </p>
                            </div>
                        </div>
                        <div
                            className=' w-100  d-flex align-items-start icon_div'>
                            <div className="icon d-flex align-items-center justify-content-center">
                                <FaLinkedinIn className='main_icon' />
                            </div>
                            <div class="text ">
                                <p><span>LinkedIn  :</span> linkedin.com/in/israyal-khan-9a2b3a20b/
                                </p>
                            </div>
                        </div>

                        {/* </div> */}
                    </div>
                    <div className='col-lg-l col-md-1 lop d-none   d-lg-block d-md-block'>

                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-12 text-white text-center  align-items-center justify-content-center'>
                        <h2 className='pt-4 f'>Get In Touch</h2>
                        <div class="contact-wrapper text-center align-items-center justify-content-center">
                            <form id="contact-form" class="form-horizontal" role="form" ref={form} onSubmit={sendEmail}>
                                <div class="form-group">
                                    <div class="col-sm-12">
                                        <input type="text" class="form-control mb-4" id="name" placeholder="NAME" name="name" required />
                                    </div>
                                </div>

                                <div class="form-group">
                                    <div class="col-sm-12">
                                        <input type="email" class="form-control mb-4" id="email" placeholder="EMAIL" name="email" required />
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="col-sm-12">
                                        <input type="text" class="form-control mb-4" id="subject" placeholder="SUBJECT" name="subject" required />
                                    </div>
                                </div>

                                <textarea class="form-control mb-4" rows="5" placeholder="MESSAGE" name="message" required></textarea>

                                <button class="btn btn-primary send-button " id="submit" type="submit" value="SEND">
                                    <div class="alt-send-button">
                                        <span class="send-text pb-2">SEND</span>
                                    </div>

                                </button>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact