const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();
  
  // GET for single character
  router.get('/:id', (req, res) => {
    if (req.isAuthenticated()){
      const user = req.user.id
      const charId = req.params.id;
      const queryText = `SELECT "character_name", "character_race"."race", "character_class"."class", "character_background"."background", "character_backstory" FROM "character_list"
      JOIN "character_race" ON "character_race"."id" = "character_list"."character_race"
      JOIN "character_class" ON "character_class"."id" = "character_list"."character_class"
      JOIN "character_background" ON "character_background"."id" = "character_list"."character_background"
      WHERE ("character_list"."user_id"=$1 AND "character_list"."id"=$2);`
  
      const queryValues = [
        user, charId
      ]
      pool.query(queryText, queryValues)
      .then( (result) => {
      console.log(`character with id ${req.params.id}`, result.rows)
      res.send(result.rows);
       })
        .catch((err) => {
        console.log(`Error with individual character ${req.params.id}`, err);
        res.sendStatus(500);
        })}
    else {
      res.sendStatus(403);
    }
  })

  module.exports = router;