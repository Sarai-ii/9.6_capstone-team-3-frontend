// FAQ.js

import React, { useState } from 'react'
import '../css/about.css'

const FAQ = ({ id }) => {
  window.scrollTo(0,0);
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: "Will I be giving a gift to the person giving a gift to me?",
      answer: "No. On match day, everyone gets matched twice: once as a giver and once as a receiver. You will not be getting a gift from the person you give a gift to.",
    },
    {
      question: "Do I really have to upload a picture of the gift I got?",
      answer: "Yes. Uploading a picture lets us know that you received a gift and part of the fun is seeing what everyone gets.",
    },
    {
      question: "Can I send anything I want?",
      answer: "No. Please send something that is in line with the theme of the event. You should only participate in themes that interest you.",
    },
    {
      question: "I didn't receive a gift; what do I do?",
      answer: "Make sure you have given your gift enough time to arrive. Add a week to the last possible ship date before contacting us. Once the week is over, email us at help@HappinessExchange.com and let us know that you have not yet received your gift and we will open an investigation.",
    },
    {
      question: "How do I make a gallery post/upload my picture?",
      answer: "Answer 5",
    },
    {
      question: "How do you know I have shipped my gift?",
      answer: "Answer 6",
    },
    {
      question: "How many accounts can I have?",
      answer: "One. There can only be one account for each email address and one account for each mailing address.",
    },
    {
      question: "What if I don't like what I got?",
      answer: "Answer 8",
    },
    {
      question: "Wouldn't it be funny if I sent someone something they specifically said they didn't want?",
      answer: "No. Past experience shows that people don't find it funny, they find it hurtful and upsetting. Leave the practical jokes for another time.",
    },
    {
      question: "What safety precautions are in place?",
      answer: "Safety was top of mind when creating Happiness Exchange. Although nothing that is online can be completely secure, here are some things that we have come up with:",
    },
  ];

  const handleToggle = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  
  return (
    <div id={id} className='faq' >
      <h2>FAQs</h2>
      <div className='accordion'>
        {faqData.map((faq, index) => (
          <div key={index} className={`accordion-toggle ${index === openIndex ? 'open' : 'closed'}`} onClick={() => handleToggle(index)}>
            <h3>
              <svg className="f-triangle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7 6.2">
                <title>triangle-right</title>
                <path className="a" d="M0 6.2V0l7 3.1-7 3.1" />
              </svg>
              {faq.question}
            </h3>
            {index === openIndex && <div className="accordion-content">{faq.answer}</div>}
          </div>
        ))}
        </div>

    </div>
  )
}

export default FAQ