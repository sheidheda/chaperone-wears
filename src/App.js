import React from 'react'
import './App.css'
 
import Footer from './components/Landing/Footer'
import Navbar from './components/Landing/Navbar'
 
import { Route, Routes } from 'react-router-dom'
import Compiled from './components/Compiled/BodyCompiled'
import Discount from './components/files/Discount'
import Joggers from './components/files/Joggers'
 
import Trending from './components/files/Trending'
import About from './components/files/About'
import Speed from './components/Landing/Speed'
import ShopCompiled from './components/Compiled/ShopCompiled'
 

function App() {
     
  
       
    return (
     <div className='myBox'>
        <Navbar />
        <div className='nnam'>
            
                <Routes>
                     
                        <Route path='/' element={<Trending />} />
                        <Route path='/discount' element={<Discount />} />
                        <Route path='/joggers' element={<Joggers />} />
                        <Route path='/shop'    element={<ShopCompiled />} />
                        <Route path='/trending' element={<Compiled />} />
                        <Route path='/about' element={<About />} />
                     
                    

              </Routes>
 
            <div className="speed">
                <Speed  /> 
            </div>
               
            
            
        </div>
        
        <Footer />
     
     </div>
        
       
      
    )
  
}

export default App
