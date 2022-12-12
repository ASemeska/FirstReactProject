import { useState } from 'react'
import './App.css'
import Navbar from './navbar'
import data from './data'
import Card from './card'

function App() {
  const cards = data.map(item =>{
    return(
      <Card 
        key = {item.id}
        item = {item}
      
      />
    )
  })

  return (
    <div className="App">
        <Navbar />

        <div className='cards'>
          {cards}

        </div>
        
    </div>
  )
}

export default App
