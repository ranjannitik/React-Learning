import React from 'react'

const Card = () => {
  return (
    <div className='card'>
        <nav className='nav'>
            <div className="imgBox">
                <img className='img' src="" alt="Amazon" />
            </div>

            <div className="box">
                <h4>Save</h4>

            </div>
            
        </nav>

        <h3>Amazon <p>5 days ago</p></h3>
        <h1>Senior UI/UX Designer</h1>
        <div className="but">
            <button>Part-Time</button>
            <button>Senior Level</button>

            <footer>
                <div className="price">
                    <h2>$120/hr</h2>
                    <p>Mumbai,India</p>
                </div>
                <button>Apply now</button>
            </footer>
        </div>


      
    </div>
  )
}

export default Card
