import React from 'react'
import Body from '../Landing/Body'
 
import data from "../../Bodydata"

function Compiled() {
  const cards = data.map(item => {
    return (
        <Body
            key={item.id}
            {...item}
            
        />
    )
})
       
    return (
    
        <div>
        
          
          {cards}
    
          
          
        </div>
       
      
    )
  
}

export default Compiled