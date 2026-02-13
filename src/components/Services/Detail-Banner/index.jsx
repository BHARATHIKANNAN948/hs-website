import React,{useEffect} from 'react'
// import './index.css';
import { Link } from 'react-router-dom';

function Banner_Details() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

  return (
   <>
   <div className='container banner-contact-container'>
    <h3 className='banner-contect-header'>Service Details</h3>
    <ul className='banner-contact-list'>
        <li className='banner-contact-lists'><Link to={'/'} className='banner-home-route'>Home</Link></li>
        <li className='banner-contact-lists'>/</li>
        <li className='banner-contact-lists'>Service Details</li>
    </ul>
   </div>
   </>
  )
}

export default Banner_Details;