const express = require('express');
const pool = require('../modules/pool');


const router = express.Router();


router.get('/', (req, res) => {
  const queryText = `SELECT * FROM "character_gender";`
  pool.query(queryText)
  .then( () => {
    res.send(req.body);
    console.log('router', req.body)
  })
  .catch((err) => {
    console.log('Error with gender GET', err);
    res.sendStatus(500);
  })
});


module.exports = router;
