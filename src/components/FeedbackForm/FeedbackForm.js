import { Button, TextField, Typography } from "@material-ui/core";
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'

export default function FeedbackForm() {
    const feedbackReducer = useSelector(state => state.feedbackReducer)
    const [value, setValue] = useState(feedbackReducer);
    const history = useHistory()
    const dispatch = useDispatch()

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
                <Button onClick={handleSubmit} variant="contained" color="primary" type="submit">Next</Button>
            </form>
        </div>
    )
}