import axios from "axios"
import { useEffect, useState } from "react"
import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Button, IconButton } from "@material-ui/core";
import FlagIcon from '@material-ui/icons/Flag';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

export default function Admin() {
    const [feedback, setFeedback] = useState([])

    const handleDelete = (event) => {
        axios.delete(`/api/feedback/${event}`)
            .then((response) => {
                console.log(response)
                fetchFeedback()
            }).catch((err) => {
                console.error(err)
            })
    }

    const handleFlag = (event) => {
        axios.put(`/api/feedback/${event.id}`, { flagged: event.flagged })
            .then((response) => {
                console.log(response)
                fetchFeedback()
            }).catch((err) => [
                console.error(err)
            ])
    }

    const fetchFeedback = () => {
        axios.get('/api/feedback')
            .then((response) => {
                setFeedback(response.data)
            }).catch((err) => {
                console.error(err)
            })
    }

    useEffect(() => {
        fetchFeedback()
    }, [])

    return (
        <div>
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="left">Flagged</TableCell>
                            <TableCell align="left">Feeling</TableCell>
                            <TableCell align="left">Understanding</TableCell>
                            <TableCell align="left">Support</TableCell>
                            <TableCell align="left">Comments</TableCell>
                            <TableCell align="left">Flag/Delete</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {feedback.map((entry) => (
                            <TableRow key={entry.id}>
                                <TableCell align="left">
                                    {entry.flagged ? (<FlagIcon color="secondary" />) : ''}
                                </TableCell>
                                <TableCell align="left">{entry.feeling}</TableCell>
                                <TableCell align="left">{entry.understanding}</TableCell>
                                <TableCell align="left">{entry.support}</TableCell>
                                <TableCell align="left">{entry.comments}</TableCell>
                                <TableCell align="left">

                                    <IconButton onClick={() => handleFlag({ id: entry.id, flagged: !entry.flagged })} edge="start" size="small">
                                        <FlagIcon />
                                    </IconButton>
                                    <IconButton onClick={() => handleDelete(entry.id)} size="small" color="secondary" edge="end">
                                        <DeleteForeverIcon color="secondary" />
                                    </IconButton>

                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}
