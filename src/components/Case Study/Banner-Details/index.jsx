import React,{useEffect} from 'react'
// import './index.css';
import { Link } from 'react-router-dom';

function Banner_Case_Details() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

  return (
   <>
   <div className='container banner-contact-container' data-aos="fade-down">
    <h3 className='banner-contect-header'>Case Details</h3>
    <ul className='banner-contact-list'>
        <li className='banner-contact-lists'><Link to={'/case-study'} className='banner-home-route'>Case Study</Link></li>
        <li className='banner-contact-lists'>/</li>
        <li className='banner-contact-lists'>Case Details</li>
    </ul>
   </div>
   </>
  )
}

export default Banner_Case_Details;