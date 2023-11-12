//DEPENDENCIES 
import axios from "axios";
import {useState } from "react"
import { Link, useNavigate } from "react-router-dom";
//STYLING
// import "../CSS/
//API
const API = process.env.REACT_APP_API_URL;

export default function Event({event}) {
    
    return (
        
        <div className="card ">
            <p className="d-inline-flex gap-1">
                <a 
                className="btn btn-primary" 
                data-bs-toggle="collapse" 
                href="#collapseExample" 
                role="button" 
                aria-expanded="false" 
                aria-controls="collapseExample"
                >
                    {event.title}
                </a>
            </p>
            <img className="card-img" src={event.image_url} alt={event.title}/>
            <div className="collapse" id="collapseExample">
                <div className="card card-body">
                    <div>
                        <p>
                            {event.minimum_spend}
                            <br />
                            {event.description}
                        </p>
                    </div>
                    <h3>Important Dates</h3>
                    <p>
                        Sign up Opens: {event.open_date}
                        <br />
                        Sign up Closes: {event.open_date}
                        <br />
                        Match Date: {event.open_date}
                        <br />
                        Shipping Deadline: {event.shipping_deadline}
                    </p>
                </div>
            </div>
        </div>
    )
}