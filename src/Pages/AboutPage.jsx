import React from 'react'
import Card from '../Components/Shared/Card'
import {Link} from 'react-router-dom'

function AboutPage() {

    
  return (
   <Card>
       <div className='about'>

           <h1>About Us</h1>
           <p>TReact is an amazing framework!</p>
           <p>
               <Link to='/'>Take me to the home page</Link>
           </p>
       </div>
   </Card>
  )
}

export default AboutPage