//DEPENDENCIES
import axios from 'axios';
import React, {useState, useEffect} from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom';

// COMPONENTS

import "../css/UserProfile.css"

const API = process.env.REACT_APP_API_URL;

export default function Profile({user, userData}) {
  if (userData) {
    // console.log(`The Logged in User Is`, userData) //working
    // console.log(`
    // Checking if this loads up, if not it's due to ASYNC functionality. 
    // Reason: This is to set up user specific UI/UX. 
    // Currently logged in User's UID:`, 
    // userData.firebase_uid) //working
  }
  // console.log(`The User Info On Screen`,user) //working
  // console.log(user.likes)
  // console.log(user.likes[0][0])  //crashes the site if likes array is empty.
  const [picturePosts, setPicturePosts] = useState([]);
  const [postsToggle, setPostsToggle] = useState(false);
  const [interestsToggle, setInterestsToggle] = useState(true);
  const [pointsIcon, setPointsIcon] = useState('')
  const [luxuryStatus, setLuxuryStatus] = useState(false)
  const navigate = useNavigate()
  const { userId } = useParams();

  const defaultImageUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1024px-Default_pfp.svg.png";

  // const handlePictureChangeToFirebase = () => {

  // }

  const handleClick = () => {
    if (user.profile_pic === defaultImageUrl) {
      navigate('./account-edit')
      console.log(`Redirect to edit page for user with ID ${userId}`);
    } else {
      navigate('./account-edit')
      console.log(`Show zoom-in options for user with ID ${userId}`);
    }
  };
  const handlePostsToggle = () => {
    setPostsToggle(true)
    setInterestsToggle(false)
  }
  const handleInterestToggle = () => {
    setPostsToggle(false)
    setInterestsToggle(true)
  }
  const points = user.points === null ? 0 : user.points
  // const handlePoints = () => {
  //   points > 1000 ? setLuxuryStatus (true) : 
  //   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
  //     <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
  //   </svg>
  // }
  //Getting The Dates 
  const regularDateFormat = user.date_created.split("T")[0].split("-")
  const monthJoined = regularDateFormat[1]
  const yearJoined = regularDateFormat[0]


  useEffect(() => {
    // const fetchUserData = async () => {
    //   try {
    //     const response = await axios.get(`${API}/users/${userId}`);
    //     setUser(response.data);
    //   } catch (error) {
    //     console.error('Error fetching user data:', error);
    //   }
    // }


    const fetchPicturePosts = async () => {
      try {
        const response = await axios.get(`${API}/pictures`);
        const filteredPicturePosts = response.data.filter(
          (picturePost) => picturePost.receiver_id === parseInt(userId, 10)
        );
        setPicturePosts(filteredPicturePosts);
      } catch (error) {
        console.error('Error fetching picture posts:', error);
      }
    }
    fetchPicturePosts();
  }, [userId]);

  return (
    <div className='profile-container'>
      <div className='profile-header'>
        <img className='cover-pic' src="https://images.unsplash.com/photo-1504805572947-34fad45aed93?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFjZWJvb2slMjBjb3ZlcnxlbnwwfHwwfHx8MA%3D%3D"/>
      </div>
      <div className='profile-content'>
        <section className='bio-container-left'>
          <div className='pfp-container'>
          { user.profile_pic ? ( 
            <img className='pfp-uploaded' src= {user.profile_pic}/> 
            ) : (
              <div>
                { userData && user.firebase_uid === userData.firebase_uid? (
                <img className='pfp' src= {defaultImageUrl} onClick={handleClick}/>
                ) : (
                  <img className='pfp' src= {defaultImageUrl}/>
                )}
              </div>
            )
          }
          
          </div>
          <div className='bio-content'>
            <p className='username'> @{user.username}
            <span>{ points > 100 ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="gold" className="bi bi-star-fill" viewBox="0 0 16 16">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                </svg>
            ) : (
              <div>

              </div>
            )}
            </span>
            </p>
            
            <p className='bio-location bio-details'>
              <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="16"
              height="16" 
              fill="#EDBB64" 
              className="bi bi-geo-alt-fill" 
              viewBox="0 0 16 16">
                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
              </svg> {user.address_state}
            </p>
            { userData ?(
              <p className='bio-joined'>
                <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="16" 
                height="16" 
                fill="#EDBB64" 
                className="bi bi-clock-fill" 
                viewBox="0 0 16 16">
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"/>
                </svg> Joined {monthJoined}/{yearJoined}
                <br />
              </p>
            ) : ( 
              <p className='bio-details'>
                <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="16" 
                height="16" 
                fill="#EDBB64" 
                className="bi bi-clock-fill" 
                viewBox="0 0 16 16">
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"/>
                </svg> Loading 
              </p>
            )}
            {/* <p className='bio'>{user.bio}</p> */}

            <section className='bio-score' > 
                <p id='points'>Points:
                  <span className='points-num'>{points}</span>
                </p>
                <p id='level'>Level:
                  <span className='level-num '> {user.level} </span>
                </p>
              </section>
            <section className='bio-followers' > 
              <p id='followers'>
                {/* <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="16" 
                height="16" 
                fill="#EDBB64" 
                className="bi bi-people-fill" 
                viewBox="0 0 16 16">
                  <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"/>
                </svg>  */}
                Followers
                <span className='bio-num '> 0 </span>
              </p>
              <p id='following'>
              Following
                <span className='bio-num '> 0 </span>
              </p>
            </section>
            <p className='bio'>{user.bio}</p>
            <button className='button'> Follow </button>
          </div>
            {/* <div className="logo-container">
              <img className="insta logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png"/>
              <img className="fb logo" src='https://pngimg.com/uploads/facebook_logos/small/facebook_logos_PNG19757.png'/>
              <img className="twitter logo" src="https://seeklogo.com/images/T/twitter-new-logo-8A0C4E0C58-seeklogo.com.png?v=638258088440000000"/>
            </div> */}
        </section>
        <main className='posts-container-right'>
          <div className="posts-headings">
            <p id='posts' onClick={handlePostsToggle}>Posts
              <span className='posts-num'> {picturePosts.length}</span>
            </p>
            <p id='interests' onClick={handleInterestToggle}>Interests</p>
          </div>
          {postsToggle ? (
            <div className="gifts-container">
            {picturePosts.map((picturePost) => (
                <img key={picturePost.id} className="gifts" 
                src={picturePost.pictures_post_url} 
                alt={picturePost.pictures_post_title} />
            ))}
            </div>
          ) : (
          <div className='interests-container'>
            <section className='get-to-know'>
            
              <h2 className='likes-title'>Likes</h2>
              {user.likes && user.likes[0] ? (
                  <ul className='funfacts likes'>
                    {/* {console.log("User on the screen:", user.firebase_uid)} */}
                    {/* {console.log("User logged in:", userData.firebase_uid)} */}
                    {user.likes.map((like, index) => (
                      <li key={index}>{like.toUpperCase()}</li>
                    ))}
                  </ul>
              ) : (
                <div>
                  {/* {console.log("userData.firebase_uid:", userData.firebase_uid)} */}
                  {/* {console.log("user.firebase_uid:", user.firebase_uid)} */}
                  {/* {user ? ( */}
                  {userData && user.firebase_uid === userData.firebase_uid? (
                    <Link className='edit-link' to={`./account-edit`}>Click to add details</Link>
                  ) : (
                    <div className='temp-empty'> 
                    </div>
                  )}
                </div>
              )}
              <div>
              </div>
              <h2 className='dislikes-title'>Dislikes</h2>
              {user.dislikes && user.dislikes[0] ? (
                  <ul className='funfacts dislikes'>
                    {/* {console.log("User on the screen:", user.firebase_uid)} */}
                    {/* {console.log("User logged in:", userData.firebase_uid)} */}
                    {user.dislikes.map((dislike, index) => (
                      <li key={index}>{dislike.toUpperCase()}</li>
                    ))}
                  </ul>
              ) : (
                <div>
                  {/* {console.log("userData.firebase_uid:", userData.firebase_uid)} */}
                  {/* {console.log("user.firebase_uid:", user.firebase_uid)} */}
                  {/* {user ? ( */}
                  {userData && user.firebase_uid === userData.firebase_uid? (
                    <Link className='edit-link' to={`./account-edit`}>Click to add details</Link>
                  ) : (
                    <div className='temp-empty'> 
                    </div>
                  )}
                </div>
              )}
            </section>
            <section className=''>
              <h2 className='personal-title'>Personal Details</h2>
              <ul className='funfacts'>
                <li>SHIRT SIZE: {user.shirt_size ? user.shirt_size.toUpperCase() 
                : 
                  <div>
                    {userData && user.firebase_uid === userData.firebase_uid? (
                      <Link className='edit-link' to={`./account-edit`}>Click to add details</Link>
                    ) : (
                      <div className='temp-empty'> 
                      </div>
                    )}
                  </div>}
                </li>
                <li>PANTS SIZE: {user.pants_size ? user.pants_size.toUpperCase() :  <div>
                    {userData && user.firebase_uid === userData.firebase_uid? (
                      <Link className='edit-link' to={`./account-edit`}>Click to add details</Link>
                    ) : (
                      <div className='temp-empty'> 
                      </div>
                    )}
                  </div>}
                </li>
                <li>SHOE SIZE: {user.shoe_size ? user.shoe_size.toUpperCase() :  <div>
                    {userData && user.firebase_uid === userData.firebase_uid? (
                      <Link className='edit-link' to={`./account-edit`}>Click to add details</Link>
                    ) : (
                      <div className='temp-empty'> 
                      </div>
                    )}
                  </div>}
                </li>
              </ul>
              <h2 className='color-title'>Favorite Colors</h2>
              {user.favorite_color && user.favorite_color[0] ? (
                <ul className='funfacts'>
                  {user.favorite_color.map((color, index) => (
                    <li key={index}>{color.toUpperCase()}</li>
                  ))}
                </ul>
              ) : (
              <div>
                {/* {console.log("userData.firebase_uid:", userData.firebase_uid)} */}
                {/* {console.log("user.firebase_uid:", user.firebase_uid)} */}
                {/* {user ? ( */}
                {userData && user.firebase_uid === userData.firebase_uid? (
                  <Link className='edit-link' to={`./account-edit`}>Click to add details</Link>
                ) : (
                  <div className='temp-empty'> 
                  </div>
                )}
              </div>
              )}
    
            </section>
            
            {/* <section className='achievements'>
              <h2 className='achievements-title'>Achievements</h2>
              <div className=''>
                <h4 className='card-header'>Early Shipper</h4>
              </div>
              <div className='card'>
                <h4 className='card-header'>Sage</h4>
                <p className='card-header'>Leave 50 comments to complete.
                </p>
              </div>
            </section> */}

          </div>
          )
          }
        </main>
      </div>
    </div>
  )
}

