const express = require('express');
const pool = require('../modules/pool');


const router = express.Router();

// GET for entire user's character list
router.get('/', (req, res) => {
  const queryText = `SELECT "character_name", "character_race"."race", "character_class"."class", "character_background"."background", "character_backstory" FROM "character_list"
  JOIN "character_race" ON "character_race"."id" = "character_list"."character_race"
  JOIN "character_class" ON "character_class"."id" = "character_list"."character_class"
  JOIN "character_background" ON "character_background"."id" = "character_list"."character_background";`
  pool.query(queryText)
  .then( (result) => {
    res.send(result.rows);
  })
  .catch((err) => {
    console.log('Error with user character list GET', err);
    res.sendStatus(500);
  })
});

// GET for single character
router.get('/:id', (req, res) => {
  console.log("inside character GET", req.params.id)
  const charId = req.params.id
  const queryText = `SELECT FROM "character_list" WHERE "id"=$1;`
  const queryValue = [ds]

})



module.exports = router;
