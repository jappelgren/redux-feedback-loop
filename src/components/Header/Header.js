import { AppBar, Toolbar, Typography } from "@material-ui/core";
import FeedbackIcon from '@material-ui/icons/Feedback';

export default function Header() {
    return (
        // <header className='App-header'>
        //     <h1 className='App-title'>Feedback!</h1>
        //     <h4>Don't forget it!</h4>
        // </header>
        <AppBar position="static" style={{ backgroundColor: "#23943f" }}>
            <Toolbar>
                <Typography variant="h2" >
                    Feedback
                </Typography>
                <FeedbackIcon fontSize="large" />
            </Toolbar>
        </AppBar>
    )
}