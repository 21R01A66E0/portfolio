import React from "react";
import { FaCopyright } from 'react-icons/fa';
import Socials from "./Socials";
const Footer = () =>{
    const scrollToTop= () => {
        window.scrollTo({top:0,behavior:"smooth"});
    }
        const styles={
        footer:{
            textAlign:"center",
            padding:"30px 20px",
            background:"#111",
            color:"#fff",
            marginTop:"auto",
        },
        button:{
            background:"#fff",
            color:"#111",
            border:"none",
            padding:"10px 20px",
            borderRadius:"25px",
            cursor:"pointer",
            fontSize:"14px",
            transition:'all 0.3s ease',
        },
    };
    return (
        <footer style={styles.footer}>
            <p><FaCopyright size={20}/>  2025 | All rights Resevered</p>
            <Socials />
            <button onClick={scrollToTop} style={styles.button}>Back to Top</button>
            <p style={{marginTop:"25px"}}>Designed and Developed by <strong>Prashanth Reddy  </strong><FaCopyright size={20}/>  2025</p>
        </footer>
    )
} 
export default Footer;