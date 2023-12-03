// DEPENDENCIES
import axios from 'axios';
import React, {useState, useEffect} from 'react'
import { useParams, useNavigate } from 'react-router-dom';
// import firebase from 'firebase/app';
// import 'firebase/auth';

// STYLING
import "../css/Events.css"
// APT
const API = process.env.REACT_APP_API_URL;


export default function EventSignUp() {

    const { userId } = useParams();
    let navigate = useNavigate();

    const [showDetails, setShowDetails] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');
    const [showConfirmation, setShowConfirmation] = useState(false)
    const [userData, setUserData] = useState({
        budget: 0,
        favorite_color: [], 
        category: '',
        shirt_size: '', 
        pants_size: '',
        shoe_size: '',
        gifts_avoid: '',
        preferred_category: '', 
        preferred_gift: '', 
        gifts_avoid :'',
        events_joined: [],
    });
        
    // I can't continue with updating values until I have a user authentication status or trigger for related actionsto

    const userEventRegistration = (updatedUser) => {
        axios 
        .put(`${API}/users/${id}`, updatedUser)
        .then(
            () => {
                console.log(updatedUser)
                navigate(``)
            },
            (error) => console.error(error)
        )
        .catch((c) => console.warn("catch", c));
    }

    useEffect(() => {
        if (userId) {
            axios.get(`${API}/users/${userId}`).then(
                (response) =>{ 
                    console.log(userId)
                    console.log(`API Response:`, response)
                    console.log(`API Response Data:`, response.data)
                    console.log(`User Id:`, response.data.userId)
                    // setUserId(response.data.userId)
                },
                (error) => {
                    console.log(userId)
                    console.error(' Error fetching user data:', error)
                    navigate(`/not-found`)
                }
            );
        }
    }, [userId, navigate]);    
    
    const handleInputChange = (event) => {
        const { id, value } = event.target;
        if (id === 'favorite_colors') {
            // Split the input value into an array using a delimiter (e.g., comma or space)
            const colorsArray = value.split(',').map(color => color.trim()).filter(Boolean)
            setUserData((prevUserData) => ({ ...prevUserData, favorite_colors: colorsArray }))
        } else {
            setUserData((prevUserData) => ({ ...prevUserData, [id]: value }));
        }
    };

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
        handleInputChange(event);
    };
  
    const handleConfirmation = () => {
      if (selectedOption === 'Yes') {
        alert("Please be advised that we try our best to ensure gifts are based on the desires of the reciever but sometimes there are chances of being gifted an item you already own. As this may not be desired, it is reality and therefore we require that everyone who joins any event understand and accept this possibility to be able to join. If you don't mind please change your response to 'No'.");
        // setShowConfirmation(showConfirmation)
        } else if (Object.values(userData).every(value => value !== '')) {
            const updatedEventsJoined = [...userData.events_joined, userData.eventId];
            setUserData((prevUserData) => ({ ...prevUserData, events_joined: updatedEventsJoined }));
            setShowConfirmation(!showConfirmation);
        };
    }
    // useEffect(() => {
    //     // Set up a listener for changes in authentication state
    //     const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
    //       if (user) {
    //         // User is signed in
    //         setUser(user);
    //       } else {
    //         // User is signed out
    //         setUserId(null);
    //       }
    //     });
    
    //     // Clean up the listener when the component unmounts
    //     return () => unsubscribe();
    //   }, []);

    const handleIconClick = () => {
        setShowDetails(!showDetails);
    };

  return (
    <div className='event-signup-container'>
        <div className=''>
            <h1 className='welcome'>You're One Step Away From...</h1>
        </div>
        <div className='intro-container '>
            <h2 className='section-header'>Thank you for joining this event, before you can register; please complete the form. </h2>
            <span onClick={handleIconClick} className="question-mark-icon">
                <svg xmlns="http://www.w3.org/2000/svg"  
                className="bi bi-question-circle" 
                viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                    <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94"/>
                </svg>
            </span>
        </div>
        {showDetails && (
            <div className="details-box">
                <p><strong>WHY THIS FORM? </strong>
                    <br />
                    In order to be matched, it's required you fill out this form and stick to the rules of every event to ensure you recieve a gift that best suits you. </p>
            </div>
        )}
        <form className='signup-form'>
            <label htmlFor="likes"> Based on the theme, if you could choose- what gift would you desire most? (Be specific): </label>
            <input type="text" id="likes" onChange={handleInputChange} required/>
            <br />
            <label htmlFor="gifts_avoid"> Based on the theme, if you could choose- what gift should your match avoid?(Be specific):</label>
            <input type="text" id="gifts_avoid" onChange={handleInputChange} required/>
            <br />
            <label htmlFor="budget"> What is your gift giving budget?</label>
            <input type="number" id="budget" onChange={handleInputChange} required/>
            <br />
            <label htmlFor="color"> What's your favorite color?:</label>
            <input type="text" id="color"  onChange={handleInputChange} required/>
            <br />
            <label htmlFor="category"> Based on the theme, what category most interests you?(ie: "candy", "tech", "clothes" ):</label>
            <input type="text" id="category" onChange={handleInputChange} required/>
            <br />
            <label htmlFor="clothes"> If applicable, what are your clothing sizes? 
            <br />
            <label htmlFor="clothes">Shirt Size:</label>
            <input type="text" id="clothes"/>
            <br />
            <label htmlFor="clothes">Pants Size:</label>
            <input type="text" id="clothes"/>
            <br />
            <label htmlFor="clothes">Shoes Size:</label>
            <input type="text" id="clothes"/>
            </label>
            <label htmlFor="duplicate"> Do you mind receiving an item or version of an item that you already own? 
                <select id="duplicate" value={selectedOption} onChange={handleOptionChange} required>
                    <option value=""></option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select>
            </label>
            <ul className='rules-container'>
                <h3 className='rules-h3'>Rules For <span className='rules-every'>EVERY</span> Event</h3>
                <li className='rules'>The person you are assigned is not the same person who is assigned to you to prevent violation of our terms</li>
                <li className='rules'>We do <span className='rules-not'>NOT</span> by any means condone deragatory, sexually explicit nor discriminatory actions such has hate speech, bullying nor racially insensitive, comments or gifts. Please keep everything friendly and respectful. We seek to uplift and bring joy to any and everyone's lives.</li>
                <li className='rules'>If in the event you miss the shipping deadline you will be at risk of being banned indefinently, per investigation by our team</li>
            </ul>
            <div className='terms-container'>
                <input type="checkbox" id="terms-checkbox" required/>
                <label htmlFor="terms-checkbox" className='terms-text'>Do You Agree To The Terms?</label>
                <br />
                <button className="confirm button" onClick={handleConfirmation} >Confirm</button>
            </div>
        </form>
            {showConfirmation && (
                <div className='conclusion'>
                    <h2 className='concluson-h2'>Form is complete, you've been added to the event. </h2>
                    <h3 className='conclusion-h3'>Check you messages and notification in the app for updates.</h3>
                </div>
            )}
        <div className=''>
            <h1 className='welcome-2'>Making Someone Feel Special  </h1>
        </div>
    </div>
  )
}