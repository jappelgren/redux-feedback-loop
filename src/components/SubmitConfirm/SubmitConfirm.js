import { Button } from "@material-ui/core"
import { useDispatch } from "react-redux"
import { useHistory } from "react-router-dom"

//SubmitConfirm thanks user for their feedback and resets all reducers back to their default state.
export default function SubmitConfirm() {

    const history = useHistory()
    const dispatch = useDispatch()
    const handleClick = () => {
        dispatch({ type: 'RESET_ALL' })
        history.push('/')
    }
    return (
        <div>
            <h1>Thank You!</h1>
            <Button onClick={handleClick} variant="contained" color="primary" type="submit">Leave New Feedback</Button>
        </div>
    )
}