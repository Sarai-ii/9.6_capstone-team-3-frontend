import React, {useState} from 'react'
import "../css/Events.css"
export default function EventSignUp() {
    const [showDetails, setShowDetails] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');
    const [showConfirmation, setShowConfirmation] = useState(false)

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };
  
    const handleConfirmation = () => {
      if (selectedOption === 'Yes') {
        alert("Please be advised that we try our best to ensure gifts are based on the desires of the reciever but sometimes there are chances of being gifted an item you already own. As this may not be desired, it is reality and therefore we require that everyone who joins any event understand and accept this possibility to be able to join. If you don't mind please change your response to 'No'.");
      } else {
        setShowConfirmation(!showConfirmation)
      }

    };

    const handleIconClick = () => {
    setShowDetails(!showDetails);
    };

  return (
    <div className='event-signup-container'>
        <div className=''>
            <h1 className='welcome'>You're One Step Away From  </h1>
        </div>
        <form className='signup-form'>
        <div className='intro section-header'>
            <h2>Thank you for joining this event, before you can register; please complete the form. </h2>
            <span onClick={handleIconClick} className="question-mark-icon">
                <svg xmlns="http://www.w3.org/2000/svg" 
                width="22" 
                height="22" 
                fill="black" 
                className="bi bi-question-circle" 
                viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                    <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94"/>
                </svg>
            </span>
        </div>
            {showDetails && (
            <div className="details-box">
                <p>WHY THIS FORM? In order to be matched, it's required you fill out this form and stick to the rules of every event to ensure you recieve a gift that best suits you. </p>
            </div>
            )}
            
            <label htmlFor="want"> Based on the theme, if you could choose-what gift would you desire most? (Be specific but remember the budget): </label>
            <input type="text" id="want"/>
            <br />
            <label htmlFor="dislike"> Based on the theme, if you could choose-what gift should your match avoid?(Be specific):</label>
            <input type="text" id="dislike"/>
            <br />
            <label htmlFor="color"> What's your favorite color?:</label>
            <input type="text" id="color"/>
            <br />
            <label htmlFor="category"> Based on the theme, what category most interests you?(ie: "candy", "tech", "clothes" ):</label>
            <input type="text" id="category"/>
            <br />
            <label htmlFor="category"> If applicable, what are your clothing sizes?: </label>
            <input type="text" id="category"/>
            <br />
            <label htmlFor="duplicate"> Do you mind receiving an item or version of an item that you already? 
                <select id="duplicate" value={selectedOption} onChange={handleOptionChange}>
                    <option value="">-</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select>
            </label>
            <ul className='rules-container'>
                <h3 className='rules-h3'>Rules For <span className='rules-every'>EVERY</span >Event</h3>
                <li className='rules'>The person you are assigned is not the same person who is assigned to you to prevent violation of our terms</li>
                <li className='rules'>We do <span className='rules-not'>NOT</span> by any means condone deragatory, sexually explicit nor discriminatory actions such has hate speech, bullying nor racially insensitive, comments or gifts. Please keep everything friendly and respectful. We seek to uplift and bring joy to any and everyone's lives.</li>
                <li className='rules'>If in the event you miss the shipping deadline you will be at risk of being banned indefinently, per investigation by our team</li>
            </ul>
            <div>
                <input type="checkbox" id="terms" required/>
                <label for="terms">Do You Agree To The Terms?</label>
            </div>
            <br />
            <button onClick={handleConfirmation} >Confirm</button>
            {showConfirmation && (
                <div className='conclusion'>
                    <h2 className='concluson-h2'>Form is complete, you've been added to the event. </h2>
                    <h3 className='conclusion-h3'>Check you messages and notification in the app for updates.</h3>
                </div>
            )}
        </form>
        <div className=''>
            <h1 className='welcome-2'>Making Someone Feel Special  </h1>
        </div>
    </div>
  )
}