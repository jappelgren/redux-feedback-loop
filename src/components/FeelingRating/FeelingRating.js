import { useState } from 'react'
import Rating from '@material-ui/lab/Rating';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

//customIcons is an object that stores the Material-UI icons displayed on the ratings page.
const customIcons = {
    1: {
        icon: <SentimentVeryDissatisfiedIcon />,
        label: 'Very Dissatisfied',
    },
    2: {
        icon: <SentimentDissatisfiedIcon />,
        label: 'Dissatisfied',
    },
    3: {
        icon: <SentimentSatisfiedIcon />,
        label: 'Neutral',
    },
    4: {
        icon: <SentimentSatisfiedAltIcon />,
        label: 'Satisfied',
    },
    5: {
        icon: <SentimentVerySatisfiedIcon />,
        label: 'Very Satisfied',
    },
};

//IconContainer is how Material-UI creates the rating component.
function IconContainer(props) {
    const { value, ...other } = props;
    return <span {...other}>{customIcons[value].icon}</span>;
}

IconContainer.propTypes = {
    value: PropTypes.number.isRequired,
};


export default function FeelingRating() {
    //value stores the rating selected by the user in local state.
    const [value, setValue] = useState(0);
    //disabled on loaf is true.  This state is sent to the disabled prop on the next button. Making sure
    //a user inputs a value before proceeding to the next step.
    const [disabled, setDisabled] = useState(true)
    //buttonText is 'Next' by default.  If all the necessary information is entered the button will change to Done Editing.
    const [buttonText, setButtonText] = useState('Next')
    //route is by default the next part of the feedback form.  If you are editing a previously answered question, the done editing button
    //will direct the user to ReviewInfo component.
    const [route, setRoute] = useState('/understanding')

    const history = useHistory()
    const dispatch = useDispatch()
    const reducers = useSelector(state => state)

    //handleRating sets the value to be sent to the scoreReducer in Redux, sets the next button to enabled.  
    //handleRating also checks to see if all other info in the form exists and if it does will change the next button.
    //to done editing and will redirect the user to ReviewInfo component
    const handleRating = (event) => {
        setValue(event);
        setDisabled(false)
        if (reducers.scoreReducer.feeling > 0
            && reducers.scoreReducer.support > 0
            && reducers.scoreReducer.understanding > 0
            && reducers.feedbackReducer.length > 0) {
            setButtonText('Done Editing')
            setRoute('/review')
        }
    }

    //handleSubmit sends the value to the scoreReducer in Redux and directs the user to the next piece of the form.
    const handleSubmit = () => {
        dispatch({ type: 'SET_FEELING', payload: value })
        history.push(route)
    }

    return (
        <div>
            <Typography variant="h4">How are you feeling today</Typography>
            <br />
            <Box component="fieldset" mb={3} borderColor="transparent">
                <Typography component="legend">Feeling?</Typography>
                <Rating
                    name="simple-controlled"
                    getLabelText={(value) => customIcons[value].label}
                    IconContainerComponent={IconContainer}
                    value={value}
                    onChange={(event, newValue) => {
                        handleRating(newValue);
                    }}
                />
            </Box>

            <Button onClick={handleSubmit} disabled={disabled} variant="contained" color="primary">{buttonText}</Button>

        </div>
    )
}