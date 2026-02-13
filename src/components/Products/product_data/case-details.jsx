import React, { useEffect } from 'react'
// import './index.css';
import { Link } from 'react-router-dom';

function Banner_Product_Details() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <div className='container banner-contact-container' data-aos="fade-down">
                <h3 className='banner-contect-header'>Product Details</h3>
                <ul className='banner-contact-list'>
                    <li className='banner-contact-lists'><Link to={'/product'} className='banner-home-route'>Product</Link></li>
                    <li className='banner-contact-lists'>/</li>
                    <li className='banner-contact-lists'>product Details</li>
                </ul>
            </div>
        </>
    )
}

export default Banner_Product_Details;