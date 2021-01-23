import { IconButton } from "@material-ui/core";
import FlagIcon from '@material-ui/icons/Flag';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import axios from "axios"
import { useEffect, useState } from "react"
import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';


export default function AdminItem({ entry, fetchFeedback }) {

    //handleDelete sends a delete request to the database and removes the specified entry by unique id
    //After the delete the table will refresh with updated info.
    const handleDelete = (event) => {
        axios.delete(`/api/feedback/${event}`)
            .then((response) => {
                console.log(response)
                fetchFeedback()
            }).catch((err) => {
                console.error(err)
            })
    }

    //handleFlag sends a put request to the database.  Pressing the flag button will toggle the 
    //flagged value from false to true and vice versa on the database. The table is refreshed after each
    //toggle
    const handleFlag = (event) => {
        axios.put(`/api/feedback/${event.id}`, { flagged: event.flagged })
            .then((response) => {
                console.log(response)
                fetchFeedback()
            }).catch((err) => [
                console.error(err)
            ])
    }


    return (
        <TableRow key={entry.id}>
            <TableCell align="left">
                {/* Ternary checks if flagged value is true or false on database and displays a flag icon on dom if true */}
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
    )
}