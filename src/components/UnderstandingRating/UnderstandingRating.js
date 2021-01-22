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
import { useDispatch } from 'react-redux';

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
    const history = useHistory()
    const dispatch = useDispatch()

    const handleRating = (event) => {
        setValue(event);
        setDisabled(false)
    }

    const handleSubmit = () => {
        dispatch({ type: 'SET_UNDERSTANDING', payload: value })
        history.push('/support')
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

            <Button onClick={handleSubmit} disabled={disabled} variant="contained" color="primary">Next</Button>

        </div>
    )
}