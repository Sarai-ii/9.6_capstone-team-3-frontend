import React from 'react'

export default function Account({ userData }) {
  return (
    <div>
      <h2 lassName='name'>Welcome, {userData.name_first}</h2> 
    </div>
  )
}