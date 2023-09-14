const express = require('express');
const pool = require('../modules/pool');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

const router = express.Router();

// GET for single character
router.get('/:id', rejectUnauthenticated, (req, res) => {
  const queryText = `SELECT "character_list"."id", "character_name", "character_race"."race", "character_class"."class", "character_background"."background", "character_backstory" FROM "character_list"
  JOIN "character_race" ON "character_race"."id" = "character_list"."character_race"
  JOIN "character_class" ON "character_class"."id" = "character_list"."character_class"
  JOIN "character_background" ON "character_background"."id" = "character_list"."character_background"
  WHERE "character_list"."id"=$1;`;
  pool.query(queryText, [req.params.id])
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      console.log(`Error with individual character GET`, err);
      res.sendStatus(500);
    })
})


module.exports = router;