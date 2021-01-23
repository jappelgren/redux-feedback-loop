import { List, ListItem, ListItemIcon, ListItemText, Typography } from "@material-ui/core";
import { useSelector } from "react-redux";

export default function ReviewInfo() {
    const feedbackData = useSelector(state => state)
    return (
        <div>
            <Typography variant="h4">Review Your Feedback</Typography>
            <List component="nav" aria-label="main mailbox folders">
                <ListItem button>
                    <ListItemIcon>
                    </ListItemIcon>
                    <ListItemText primary={`Feelings: ${feedbackData.scoreReducer.feeling}`} />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                    </ListItemIcon>
                    <ListItemText primary={`Understanding: ${feedbackData.scoreReducer.understanding}`} />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                    </ListItemIcon>
                    <ListItemText primary={`Support: ${feedbackData.scoreReducer.support}`} />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                    </ListItemIcon>
                    <ListItemText primary={`Feedback: ${feedbackData.feedbackReducer}`} />
                </ListItem>
            </List>
        </div>
    )
}