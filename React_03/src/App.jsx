import React from 'react'
import Card from './Card'

const App = () => {
  return (
    <div className='parent'>
      <Card name="Simmi" age={19} image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1974" />
      <Card name="Rohini" age={21} image="https://images.unsplash.com/photo-1688888745596-da40843a8d45?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070" />
      
      
    </div>
  )
}

export default App
