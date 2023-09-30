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
      <form>
        <header className="footer-title">Newsletter</header> 
        <fieldset className="form-control w-80">
          <label className="label">
            <span className="label-text">Enter your email address</span>
          </label> 
          <div className="relative">
            <input type="text" placeholder="username@gmail.com" className="input input-bordered w-full pr-16" /> 
            <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
          </div>
        </fieldset>
      </form>
    </footer>
    );
};

export default Footer;