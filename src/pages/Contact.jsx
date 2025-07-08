import React from "react";
import ContactForm from "../components/ContactForm";
import Socials from "../components/Socials";
const Contact =() => {
    return (
        <section id="contact" className="contactStyle">
            <style>{`
                .contactStyle {
                    display:flex;
                    flex-direction:column;
                    text-align:center;
                    justify-content:center;
                    padding-top:80px;
                    height:100vh;
                    color:white;
                }
                .socialsResponsive {
                    display:flex;
                    justify-content:center;
                    align-items:center;
                }
                @media (max-width:768px) {
                    .socialsResponsive {
                        flex-direction:column;
                    }
                    .contactStyle {
                        margin-left:100px;
                    }
                    .contactStyle h2 {
                        font-size:14px;
                    }
                        .contactStyle h4 {
                            font-size:13px;
                        }
                }
            `}</style>
            <h2>Contact Me</h2>
            <h4>Feel free to reach me through these platforms:</h4>
            <div className="socialsResponsive"><Socials/></div>
            <ContactForm />
        </section>
    )
}
export default Contact;