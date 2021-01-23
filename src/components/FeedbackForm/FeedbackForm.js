import { Button, TextField, Typography } from "@material-ui/core";
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'

export default function FeedbackForm() {

    //feedbackReducer populates the input with stored value.  Making it easier for the user to edit their comments
    //incase they made a mistake when they originally submitted.
    const feedbackReducer = useSelector(state => state.feedbackReducer)
    const [value, setValue] = useState(feedbackReducer);
    const history = useHistory()
    const dispatch = useDispatch()

    //handleSubmit stores the values from the feedback input in the Redux feedbackReducer. After submitting the 
    //user is directed to the SubmitConfirm component.
    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch({ type: 'SET_FEEDBACK', payload: value })
        history.push('/review')
    }
    console.log(feedbackReducer)
    return (
        <div className="feedback-container">
            <form>
                <Typography variant="h4">Any comments you want to leave?</Typography>
                <br />
                <TextField
                    id="outlined-multiline-static"
                    label="Comments"
                    multiline
                    rows={4}
                    variant="outlined"
                    fullWidth={true}
                    value={value}
                    onChange={(event) => setValue(event.target.value)}
                    required={true}
                />
                <span className="btn-container">
                    <Button onClick={() => history.push('/support')} variant="contained" color="primary">Previous</Button>
                    <div className="spacer"></div>
                    <Button onClick={handleSubmit} variant="contained" color="primary" type="submit">Next</Button>
                </span>
            </form>
        </div>
    )
}