import {useState,createContext} from'react'
import {v4 as uuidv4} from 'uuid'

const FeedbackContext = createContext();

export const FeedbackProvider = ({children})=>{
    const [feedback,SetFeedback] = useState([
        {
            id: 1,
            text:'This item is from context',
            rating:10
        }
    ])

    const [feedbackEdit,SetFeedbackEdit] = useState({
        item: {},
        edit: false,
    })

    const editFeedback = (item)=>{
        SetFeedbackEdit({
            item,
            edit:true,
        })
    }
    
    const updateFeedback = (id,updItem) =>{
        //feedback is the list of feedback items
     SetFeedback(feedback.map((item)=>item.id=== id ? {...item,...updItem}:item))
    }


    const addFeedback = (newFeedback) =>{
        newFeedback.id = uuidv4()
        //using the hook to change the array, adding the new feedback to the current feedbacklist
        SetFeedback([newFeedback,...feedback])
        console.log(newFeedback)
  
      }

    const deleteFeedback = (id)=> {
        if (window.confirm("Are you sure you want to delete this review ")){
          SetFeedback(feedback.filter((item)=> item.id !== id))
        }
      }


    return <FeedbackContext.Provider value={{feedback,deleteFeedback,addFeedback,editFeedback,feedbackEdit,updateFeedback}}>

        {children}
    </FeedbackContext.Provider>
}


export default FeedbackContext