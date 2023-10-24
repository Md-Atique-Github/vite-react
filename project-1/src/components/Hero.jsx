


import React from 'react';
import './Hero.css';

export const Hero = () => {
  return (
    <main className='hero'>
      <div className='hero-content'>
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>

        <div className='hero-btn-1'>
          <button style={{marginRight:'6px', marginLeft:'5px'}}>Shop Now</button>
          <button>Category</button>
        </div>
       
        <div className='shopping'>
          <p>Also Available On</p>

          <div className='brand-icons'>
            <img src='/images/amazon.png' alt='amazon-icon' />
            <img src='/images/flipkart.png' alt='flipkart-icon' />
          </div>
        </div>
      </div>

      <div className='hero-image'>
      <img src='/images/shoe_image.png' alt='shoe-image' />
      </div>
    </main>
  );
};

export default Hero;

