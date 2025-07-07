import React from "react";
import ContactForm from "../components/ContactForm";
import Socials from "../components/Socials";
const Contact =() => {
    return (
        <section id="contact" style={{paddingTop:"80px", height:"100vh"}}>
            <h2 style={{textAlign:"center", color:"white"}}>Contact Me</h2>
            <h4 style={{textAlign:"center", color:"white"}}>Feel free to reach me through these platforms:</h4>
            <Socials/>
            <ContactForm />
        </section>
    )
}
export default Contact;