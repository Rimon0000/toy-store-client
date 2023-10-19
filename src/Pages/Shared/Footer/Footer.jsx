import React from 'react';

const Footer = () => {
    return (
      <footer className="footer p-10 bg-gray-200 text-black">
      <nav>
        <header className="footer-title">Services</header> 
        <a className="link link-hover">Entrepreneur</a> 
        <a className="link link-hover">Seller</a> 
        <a className="link link-hover">buyer</a> 
        <a className="link link-hover">Advertisement</a>
      </nav> 
      <nav>
        <header className="footer-title">Company</header> 
        <a className="link link-hover">All Toys</a> 
        <a className="link link-hover">About us</a> 
        <a className="link link-hover">Contact</a> 
        <a className="link link-hover">Articles</a>
      </nav> 
      <nav>
        <header className="footer-title">Legal</header> 
        <a className="link link-hover">Terms of use</a> 
        <a className="link link-hover">Privacy policy</a> 
        <a className="link link-hover">Cookie policy</a>
      </nav> 
      <div>
        <header className="footer-title">Hero's Town</header> 
        <p className='font-semibold'>© All Rights Reserved by Hero's Town</p>
      </div>
    </footer>
    );
};

export default Footer;