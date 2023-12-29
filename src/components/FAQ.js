// FAQ.js

import React, { useEffect } from 'react'
import '../css/about.css'

const FAQ = ({ id }) => {
  useEffect(() => {
    console.log('Effect executed');
    window.scrollTo(0,0);
    const accordions = document.querySelectorAll('.accordion');
  
    accordions.forEach(function (accordion) {
      accordion.classList.add('js');
  
      const toggles = accordion.querySelectorAll('.accordion-toggle');
  
      toggles.forEach(function (toggle) {
        toggle.addEventListener('click', function (event) {
          event.stopPropagation();
          console.log('Toggle clicked!');
          event.preventDefault();
          console.log("default prevented")

          const content = this.nextElementSibling;
  
          if (this.classList.contains('open')) {
            content.style.display = 'none';
            this.classList.remove('open');
            this.classList.add('closed');
          } else {
            content.style.display = 'block';
            this.classList.add('open');
            this.classList.remove('closed');
  
            // Close other accordions
            const otherContents = Array.from(accordion.querySelectorAll('.accordion-content'))
              .filter(function (otherContent) {
                return otherContent !== content;
              });
  
            otherContents.forEach(function (otherContent) {
              otherContent.style.display = 'none';
            });
  
            const otherToggles = Array.from(accordion.querySelectorAll('.accordion-toggle'))
              .filter(function (otherToggle) {
                return otherToggle !== toggle;
              });
  
            otherToggles.forEach(function (otherToggle) {
              otherToggle.classList.remove('open');
            });
          }
        });
      });
    });
  }, []);

  
  return (
    <div id={id} className='faq' >
      <h2>FAQs</h2>
        <div className='accordion'>

            <div className='accordion-toggle'>
              <h3><svg className="f-triangle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7 6.2"><title>triangle-right</title><path className="a" d="M0 6.2V0l7 3.1-7 3.1"/></svg>Will I be giving a gift to the person giving a gift to me?</h3>
            </div>
            <div className="accordion-content">
              <p>No. On match day, everyone gets matched twice: once as a giver and once as a receiver. You will not be getting a gift from the person you give a gift to.</p>
            </div>
            <div className="accordion-toggle">
              <h3><svg className="f-triangle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7 6.2"><title>triangle-right</title><path className="a" d="M0 6.2V0l7 3.1-7 3.1"/></svg>Do I really have to upload a picture of the gift I got?</h3>
            </div>
            <div className="accordion-content">
              <p>Yes. Uploading a picture lets us know that you received a gift and part of the fun is seeing what everyone gets.</p>
            </div>
            <div className="accordion-toggle">
              <h3><svg className="f-triangle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7 6.2"><title>triangle-right</title><path className="a" d="M0 6.2V0l7 3.1-7 3.1"/></svg>Can I send anything I want?</h3>
            </div>
            <div className="accordion-content">
              <p>No. Please send something that is in line with the theme of the event. You should only participate in themes that interest you. </p>
            </div>
            <div className='accordion-toggle'>
              <h3><svg className="f-triangle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7 6.2"><title>triangle-right</title><path className="a" d="M0 6.2V0l7 3.1-7 3.1"/></svg>I didn't receive a gift; what do I do?</h3>
            </div>
            <div className="accordion-content">
              <p>Answer 4</p>
            </div>
            <div className="accordion-toggle">
              <h3><svg className="f-triangle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7 6.2"><title>triangle-right</title><path className="a" d="M0 6.2V0l7 3.1-7 3.1"/></svg>How do I make a gallery post/upload my picture?</h3>
            </div>
            <div className="accordion-content">
              <p>Answer 5</p>
            </div>
            <div className="accordion-toggle">
              <h3><svg className="f-triangle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7 6.2"><title>triangle-right</title><path className="a" d="M0 6.2V0l7 3.1-7 3.1"/></svg>How do I mark that I shipped my gift?</h3>
            </div>
            <div className="accordion-content">
              <p>Answer 6</p>
            </div>
            <div className='accordion-toggle'>
              <h3><svg className="f-triangle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7 6.2"><title>triangle-right</title><path className="a" d="M0 6.2V0l7 3.1-7 3.1"/></svg>How many accounts can I have?</h3>
            </div>
            <div className="accordion-content">
              <p>Answer 7</p>
            </div>
            <div className="accordion-toggle">
              <h3><svg className="f-triangle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7 6.2"><title>triangle-right</title><path className="a" d="M0 6.2V0l7 3.1-7 3.1"/></svg>What if I don't like what I got?</h3>
            </div>
            <div className="accordion-content">
              <p>Answer 8</p>
            </div>
            <div className="accordion-toggle">
              <h3><svg className="f-triangle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7 6.2"><title>triangle-right</title><path className="a" d="M0 6.2V0l7 3.1-7 3.1"/></svg>What safety precautions are in place?</h3>
            </div>
            <div className="accordion-content">
              <p>Answer 9</p>
            </div>

          {/* <div className='accordion-toggle'>
            <h3><svg className="f-triangle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7 6.2"><title>triangle-right</title><path className="a" d="M0 6.2V0l7 3.1-7 3.1"/></svg>Question 10</h3>
          </div>
          <div className="accordion-content">
            <p>Answer 10</p>
          </div>
          <div className="accordion-toggle">
            <h3><svg className="f-triangle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7 6.2"><title>triangle-right</title><path className="a" d="M0 6.2V0l7 3.1-7 3.1"/></svg>Question 11</h3>
          </div>
          <div className="accordion-content">
            <p>Answer 11</p>
          </div>
          <div className="accordion-toggle">
            <h3><svg className="f-triangle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7 6.2"><title>triangle-right</title><path className="a" d="M0 6.2V0l7 3.1-7 3.1"/></svg>Question 12</h3>
          </div>
          <div className="accordion-content">
            <p>Answer 12</p>
          </div> */}
        </div>
        {/* <ul className='list faq-list'>
            <li>Will I be gifting the same person who is giving a gift to me?</li>
            <li>Do I really have to upload a picture of the gift I got?</li>
            <li>Can I send anything I want?</li>
            <li>I didn't receive a gift; what do I do?</li>
            <li>How do I make a gallery post/upload my picture?</li>
            <li>How much should I spend?</li>
            <li>How do I mark that I shipped my gift?</li>
            <li>How many accounts can I have?</li>
            <li>What if I don't like what I got?</li>
            <li>What if I get an inappropriate gift?</li>
            <li>What if I don't send a gift?</li>
            <li>Is this safe?</li>
        </ul> */}
    </div>
  )
}

export default FAQ