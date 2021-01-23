import { Button } from "@material-ui/core"
import { useDispatch } from "react-redux"
import { useHistory } from "react-router-dom"

//SubmitConfirm thanks user for their feedback.
export default function SubmitConfirm() {

    const history = useHistory()
    const handleClick = () => {
        history.push('/')
    }
    return (
        <div>
            <h1>Thank You!</h1>
            <Button onClick={handleClick} variant="contained" color="primary" type="submit">Leave New Feedback</Button>
        </div>
    )
}