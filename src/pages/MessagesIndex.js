// DEPENDENCIES
import axios from "axios";
import { React, useState, useEffect } from "react";
// import { Link, useParams, useNavigate } from "react-router-dom";
// COMPONENT
import MessageMatch from '../components/MessageMatch'
import MessageProof from '../components/MessageProof'
// STYLING
import "../css/messages.css"
// APT
const API = process.env.REACT_APP_API_URL;

export default function AllMessages({ userData }) {
    // console.log(userData) //workinga
    const [userEvents, setUserEvents] = useState([])

    useEffect(() => {
        axios
          .get(`${API}/events`)
          .then((response) => {
            console.log(response.data)
          })
          .catch((c) => console.warn("catch", c));
      }, []);
    return (
    <div>
        <h2 className='name'>Welcome, {userData.name_first}</h2>
         
        <MessageMatch/>
        <MessageProof/>
    </div>
    )
}