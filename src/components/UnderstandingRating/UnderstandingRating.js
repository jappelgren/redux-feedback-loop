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

function IconContainer(props) {
    const { value, ...other } = props;
    return <span {...other}>{customIcons[value].icon}</span>;
}

IconContainer.propTypes = {
    value: PropTypes.number.isRequired,
};



export default function UnderstandingRating() {
    const [value, setValue] = useState(0);
    const [disabled, setDisabled] = useState(true)
    const [buttonText, setButtonText] = useState('Next')
    const [route, setRoute] = useState('/support')

    const history = useHistory()
    const dispatch = useDispatch()
    const reducers = useSelector(state => state)

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

    const handleSubmit = () => {
        dispatch({ type: 'SET_UNDERSTANDING', payload: value })
        history.push(route)
    }
    console.log(value)
    return (
        <div>
            <Typography variant="h4">How well are you understanding the content</Typography>
            <br />
            <Box component="fieldset" mb={3} borderColor="transparent">
                <Typography component="legend">Understanding?</Typography>
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