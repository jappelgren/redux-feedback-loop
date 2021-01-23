const express = require('express');
const router = express.Router();

const pool = require('../modules/pool.js')

router.get('/', (req, res) => {
    const queryText = `SELECT * FROM "feedback" ORDER BY "date"`
    pool.query(queryText)
        .then((result) => {
            res.send(result.rows)
        }).catch((err) => {
            console.log(err)
            res.sendStatus(500)
        })
})


router.post('/', (req, res) => {
    const queryText = `
    INSERT INTO "feedback"(feeling, understanding, support, comments)
    VALUES ($1, $2, $3, $4)
    `
    const queryArr = [req.body.feeling, req.body.understanding, req.body.support, req.body.comments]

    pool.query(queryText, queryArr)
        .then((result) => {
            console.log(result)
            res.sendStatus(201)
        }).catch((err) => {
            res.sendStatus(500)
        })
})
module.exports = router;