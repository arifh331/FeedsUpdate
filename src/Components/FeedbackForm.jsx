import { useState,useContext,useEffect } from "react"
import Button from "./Shared/Button"
import Card from "./Shared/Card"
import RatingSelect from "./RatingSelect"
import FeedbackContext from "../Context/FeedbackContext"






function FeedbackForm(  ) {

    const [text,setText] = useState('')
    const [rating,setRating] = useState(10)

    const [btnDisabled,setBtnDisabled] = useState(true)

    //This is the message given to the user about warnings 
    const [message,setMessage] = useState('')

    const {addFeedback,feedbackEdit,updateFeedback} =useContext(FeedbackContext)

    useEffect(()=>{

      if (feedbackEdit.edit===true){
          setBtnDisabled(true)
          setText(feedbackEdit.item.text)
          setRating(feedbackEdit.item.rating)
      }
    }, [feedbackEdit])

    
    //This is for checking if 
    const handleTextChange = (e)=>{

        if (text== ''){
        setBtnDisabled(true)
        setMessage(null)
        }
        else if (text != '' && text.trim().length<=10){
            setMessage("The submission must be at least 10 characters long")
            setBtnDisabled(true)
        }
        else {
            setMessage(null)
            setBtnDisabled(false)

        }

        setText(e.target.value)
    }


  const handleSubmit = (e)=> {
      e.preventDefault()

      //we want it to be greater than 10
      if(text.trim().length> 10 ){
          
          const newFeedback = {
              text,
              rating,
          }

          if (feedbackEdit.edit===true) {
              updateFeedback(feedbackEdit.item.id,newFeedback)
          }
          else{
            addFeedback(newFeedback)
          }
          
          setText('')

      }
  }

  return (
    <Card> 
        <form onSubmit={handleSubmit}>
            <h2>How would you rate your service with us?</h2>
            <RatingSelect select={(rating)=>setRating(rating)}/>
            <div className="input-group">
                <input onChange={handleTextChange} type="text" placeholder="Write a review" value={text} />
                <Button type='submit' isDisabled={btnDisabled}>Send </Button>
            </div>
            {message && <div className="message">{message}</div>}
        </form>
    </Card>
  )
}

export default FeedbackForm