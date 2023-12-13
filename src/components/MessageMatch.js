import React from 'react';
import '../css/messageMatch.css';

function MessageMatch() {
  return (
<div className="message">
    {/* <h1>logo here</h1> */}
    <h2>
        <span>Congratulations Mozzy!<br />You've Been Matched for the Gift Exchange! </span></h2>
    <p>Exciting news! You've been successfully matched for the upcoming Gift Exchange. Now, the joy of gift-giving begins! To help you get started, here's some information about your recipient's preferences:</p>
    <ul className='message-list'>
        <li>Based on the theme, if given carte blanche, the person receiving your gift would like: a bottle of De Venoge Princes Tour Eiffel Champagne</li>
        <li>The category they are most interested in is: food</li>
        <li>Their favorite color is: cobalt blue</li> 
        <li>They ask that you avoid: any meat</li>
    </ul>
    <p className=''> You will be sending your gift to:<br />
    <p className='address'> 
            17 Cherry Tree Lane,<br />
            Phoenix, AZ 85005</p>
    </p>
    <p>The minimum spend is $50. This does not include shipping costs. </p>
    <p>
        Important Dates: Your thoughtful gift should be on its way by the SHIPPING DEADLINE on <span className='bold'>January 10, 2024</span>. Once you've sent your gift, please click [HERE] to update us with the carrier, date, and tracking information.
    </p>
    <p>
        Sharing the Joy: When you receive your gift, don't forget to spread the joy! Upload a picture of your received gift to our gallery to confirm its safe arrival.
    </p>
    <p>
        We hope you have a fantastic time selecting and exchanging gifts. If you have any questions or need assistance, feel free to reach out.
    </p>
    <p>
        Happy Gifting!
    </p>
    <p>
        Best Regards, Happiness Exchange
    </p>

</div>
  )
}

export default MessageMatch