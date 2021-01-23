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
import AdminItem from "../AdminItem/AdminItem";

export default function Admin() {

    //feedback state stores an array of feedback items fetched from the database by the fetchFeedback function
    const [feedback, setFeedback] = useState([])

    const fetchFeedback = () => {
        axios.get('/api/feedback')
            .then((response) => {
                setFeedback(response.data)
            }).catch((err) => {
                console.error(err)
            })
    }

    //Runs fetchFeedback on page load
    useEffect(() => {
        fetchFeedback()
    }, [])

    return (
        <div className="table-container">
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
                            <AdminItem entry={entry} fetchFeedback={fetchFeedback} />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}
