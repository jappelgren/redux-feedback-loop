import { AppBar, Toolbar, Typography } from "@material-ui/core";
import FeedbackIcon from '@material-ui/icons/Feedback';

export default function Header() {
    //Header is a very simple Material-UI AppBar component.
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h2" >
                    Feedback
                </Typography>
                <FeedbackIcon fontSize="large" />
            </Toolbar>
        </AppBar >
    )
}