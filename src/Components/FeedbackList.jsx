import Feedbackitem from "./Feedbackitem"
//import {motion, animatePresence} from 'framer-motion'
import {useContext} from 'react'
import FeedbackContext from "../Context/FeedbackContext"

function FeedbackList() {

  const {feedback} = useContext(FeedbackContext)
    

    if (!feedback|| feedback.length===0){
        return <h1>No feedbackyet</h1>
    }
  return (
    <div className='feedback-list'>
        {feedback.map((item)=>(
        <Feedbackitem key={item.id} item={item} 
       
        />
        ))}</div>
  )
}

export default FeedbackList