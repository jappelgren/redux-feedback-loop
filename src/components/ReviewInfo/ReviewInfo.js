import { Button, List, ListItem, ListItemText, Typography, IconButton } from "@material-ui/core";
import { useSelector } from "react-redux";
import EditIcon from '@material-ui/icons/Edit';
import { useHistory } from "react-router-dom";
import axios from "axios";

//ReviewInfo lets the user confirm their answers.  If something is wrong or needs editing the user can click the 
//edit button and re-answer that particular question.  When they are done editing that entry the user will be sent back
//to this page.
export default function ReviewInfo() {
    const feedbackData = useSelector(state => state)
    const history = useHistory()

    //handleSubmit sends a post request to the database and stores all the collected info.  All info 
    //is pulled from the reducers in Redux.  The user is sent to the SubmitConfirm component on submit.
    const handleSubmit = () => {
        axios.post('/api/feedback', {
            feeling: feedbackData.scoreReducer.feeling,
            understanding: feedbackData.scoreReducer.understanding,
            support: feedbackData.scoreReducer.support,
            comments: feedbackData.feedbackReducer
        }).then((response) => {
            console.log(response)
            history.push('/confirm')
        }).catch((err) => {
            console.error(err)
        })
    }
    return (
        <div className="review-container">
            <Typography variant="h4">Review Your Feedback</Typography>
            <List component="nav" aria-label="main mailbox folders">
                <ListItem button>
                    <IconButton onClick={() => history.push('/')}>
                        <EditIcon />
                    </IconButton>
                    <ListItemText primary={`Feelings: ${feedbackData.scoreReducer.feeling}`} />
                </ListItem>
                <ListItem button>
                    <IconButton onClick={() => history.push('/understanding')}>
                        <EditIcon />
                    </IconButton>
                    <ListItemText primary={`Understanding: ${feedbackData.scoreReducer.understanding}`} />
                </ListItem>
                <ListItem button>
                    <IconButton onClick={() => history.push('/support')}>
                        <EditIcon />
                    </IconButton>
                    <ListItemText primary={`Support: ${feedbackData.scoreReducer.support}`} />
                </ListItem>
                <ListItem button>
                    <IconButton onClick={() => history.push('/feedback')}>
                        <EditIcon />
                    </IconButton>
                    <ListItemText primary={`Feedback: ${feedbackData.feedbackReducer}`} />
                </ListItem>
            </List>
            <Button onClick={handleSubmit} variant="contained" color="primary" type="submit">Submit Feedback</Button>
        </div>
    )
}