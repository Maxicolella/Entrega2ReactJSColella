import React from 'react';
import "./Footer.css";

const Footer = () => {
  return (
    <div className='main-footer'>
        <div className='container'>
            <hr />
            <div className='row'></div> 
            <p className='col-sm'>
                &copy; {new Date().getFullYear()} GREEN ORGANIC | Todos los derechos reservados.
            </p>      
        </div>
    </div>
  )
}

export default Footer;