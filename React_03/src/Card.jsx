import React from 'react'

const Card = (props) => {
  return (
    <div className='card'>
        <img src={props.image} alt="Error" />
        <h1>{props.name},{props.age}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, vel.</p>
        <button>View Profile</button>
      
    </div>
  )
}

export default Card
