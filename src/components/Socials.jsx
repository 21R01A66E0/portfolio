import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
const iconStyle = {
  color: '#333',
  transition: 'transform 0.2s',
};

const Socials = () => {
  return (
    <div>
      <style>{`
        .iconContainerStyle{
          display:flex;
          color:white;
          gap:35px;
          justify-content: center;
          padding-top:30px;
          margin-top: 20px;
          margin-bottom:50px;
        }
        @media (max-width:768px){
          .iconContainerStyle{
            flex-direction:column;
            width:auto;
        }
        }
      `}</style>
      <div className='iconContainerStyle'>
        <a
          href="https://github.com/21R01A66E0"
          target="_blank"
          rel="noopener noreferrer"
          style={iconStyle}
          onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.2)'}
          onMouseLeave={e => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.color = '#333';
          }}
        >
        <FaGithub size={28} color='white'/>
        </a>

        <a
          href="https://linkedin.com/in/prashanth-reddy-burra-435bb2269"
          target="_blank"
          rel="noopener noreferrer"
          style={iconStyle}
          onMouseEnter={e => {
            e.currentTarget.style.transform = 'scale(1.2)';
            e.currentTarget.style.color = '#0077b5'; // LinkedIn blue
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.color = '#333';
          }}
        >
          <FaLinkedin size={28} color='#0077b5'/>
        </a>

        <a
          href="https://instagram.com/prashanth______23"
          target="_blank"
          rel="noopener noreferrer"
          style={iconStyle}
          onMouseEnter={e => {
            e.currentTarget.style.transform = 'scale(1.2)';
            e.currentTarget.style.color = '#C13584'; // Instagram color
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.color = '#333';
          }}
        >
          <FaInstagram size={28} color='#C13584' />
        </a>
      </div>
    </div>
  );
};

export default Socials;
