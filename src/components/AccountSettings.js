import React from 'react'

export default function Account({ userData }) {
  console.log(`This is Account Settings For${userData}`)
  return (
    <div>
      <h2 className='name'>Welcome, {userData.name_first}</h2> 
    </div>
  )
}