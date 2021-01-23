import { Button, List, ListItem, ListItemIcon, ListItemText, Typography, IconButton } from "@material-ui/core";
import { useSelector } from "react-redux";
import EditIcon from '@material-ui/icons/Edit';
import { useHistory } from "react-router-dom";

export default function ReviewInfo() {
    const feedbackData = useSelector(state => state)
    const history = useHistory()
    const handleSubmit = () => {

    }
    return (
        <div>
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