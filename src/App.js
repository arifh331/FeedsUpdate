import Header from './Components/Header'
import FeedbackList from './Components/FeedbackList'
import { useState } from 'react'
import FeedbackData from './data/FeedbackData'
import FeedbackStats from './Components/FeedbackStats'
import FeedbackForm from './Components/FeedbackForm'

import AboutPage from './Pages/AboutPage'
import Card from './Components/Shared/Card'
import {BrowserRouter as Router,Route, Routes, NavLink} from 'react-router-dom'
import AboutIconLink from './Components/AboutIconLink'
import {FeedbackProvider} from './Context/FeedbackContext'

function App(){
    
    return (
      <FeedbackProvider>
        <Router>
          
        
        <Header />
       <div className='container'>
       <Routes>
        <Route exact path='/' element={
          <>
          <FeedbackForm />
         <FeedbackStats  />
         <FeedbackList   />
          
          </>
        }></Route>
         
         
         
       
         <Route path='/about' element={<AboutPage />}/>
       </Routes>
       <Card>
         <NavLink to='/' activeClassName='active'>
           Home
         </NavLink>

         <NavLink to='/about' activeClassName='active'>
           About
         </NavLink>
       </Card>
       <AboutIconLink />
       </div>
       
       </Router>
       </FeedbackProvider>
    )
}


export default App