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
  const queryText = `SELECT "character_name", "character_race"."race", "character_class"."class", "character_background"."background", "character_backstory" FROM "character_list"
  JOIN "character_race" ON "character_race"."id" = "character_list"."character_race"
  JOIN "character_class" ON "character_class"."id" = "character_list"."character_class"
  JOIN "character_background" ON "character_background"."id" = "character_list"."character_background"
  WHERE "character_list"."id"=$1;`
  pool.query(queryText, req.params.id)
  .then( (result) => {
    res.send(result.rows);
  })
  .catch((err) => {
    console.log('Error with individual character GET', err);
    res.sendStatus(500);
  })
})

router.post('/', (req, res) => {
  const newChar = req.body;
  const queryText = `INSERT INTO "character_list"(
    "user_id", "character_name", "character_race", "character_class", "character_background", "character_backstory")
    VALUES ($1, $2, $3, $4, $5, $6);`;
    const queryValues = [
      newChar.userid,
      newChar.character_name,
      newChar.character_race,
      newChar.character_class,
      newChar.character_background,
      newChar.character_backstory,
    ];
    pool.query(queryText, queryValues)
    .then(() => { res.sendStatus(201) })
    .catch((err) => {
      console.log('Error completing POST character query', err);
      res.sendStatus(500)
    })
})

router.put('/', (req, res) => {
  const updatedChar = req.body;

  const queryText = `UPDATE "character_list"
  SET "character_name" = $1,
  "character_race" = $2,
  "character_class" = $3,
  "character_background" = $4,
  "character_backstory" = $5
  WHERE id=$6;`

  const queryValues = [
    updatedChar.character_name,
    updatedChar.character_race,
    updatedChar.character_class,
    updatedChar.character_background,
    updatedChar.character_backstory,
    updatedChar.id
  ];

  pool.query(queryText, queryValues)
  .then(() => { res.sendStatus(200) })
  .catch((err) => {
    console.log('Error completing PUT/edit query', err)
    res.sendStatus(500);
  })
})



module.exports = router;
