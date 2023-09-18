const express = require('express');
const pool = require('../modules/pool');
const {rejectUnauthenticated} = require('../modules/authentication-middleware');

const router = express.Router();

// GET for logged in user's character list
router.get('/', (req, res) => {
  if (req.isAuthenticated()){
    const queryText = `SELECT "character_list"."id","character_name", "character_race"."race", "character_class"."class", "character_background"."background", "character_backstory" FROM "character_list"
    JOIN "character_race" ON "character_race"."id" = "character_list"."character_race"
    JOIN "character_class" ON "character_class"."id" = "character_list"."character_class"
    JOIN "character_background" ON "character_background"."id" = "character_list"."character_background"
    WHERE user_id = $1 ORDER BY "character_list"."id" DESC;`

    pool.query(queryText, [req.user.id])
    .then( (result) => {
    res.send(result.rows);
    })
    .catch((err) => {
      console.log('Error with user character list GET', err);
      res.sendStatus(500);
    })}
  else {
    res.sendStatus(403);
  }
});

//POST to add a new character
router.post('/', rejectUnauthenticated,(req, res) => {
  const userId = req.user.id
  const newChar = req.body;
  console.log('in charlist post', req.body[0], req.body[1], req.body[2], req.body[3], req.body[4], req.body[5])
  console.log([req.user.id])
  const queryText = `INSERT INTO "character_list"(
    "user_id", "character_name", "character_race", "character_class", "character_background", "character_backstory")
    VALUES ($1, $2, $3, $4, $5, $6);`;
    const queryValues = [
      userId,
      newChar[0],
      newChar[1],
      newChar[2],
      newChar[3],
      newChar[4],
    ];
    pool.query(queryText, queryValues)
    .then(() => { res.sendStatus(201) })
    .catch((err) => {
      console.log('Error completing POST character query', err);
      res.sendStatus(500)
    })
})

//PUT to update character info
router.put('/:id', rejectUnauthenticated, (req, res) => {
  const updatedChar = req.body;

  const queryText = `UPDATE "character_list"
  SET "character_name" = $1,
  "character_backstory" = $2
  WHERE "id"=$3;`

  const queryValues = [
    updatedChar.character_name,
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

// DELETE to remove a character from database list
router.delete('/:id', rejectUnauthenticated, (req, res) => {
  const queryText = `DELETE FROM "character_list" WHERE id=$1;`;
  pool.query(queryText, [req.params.id])
  .then(() => { res.sendStatus(200) })
  .catch((err) => {
    console.log('Error completing DELETE character list query', err)
    res.sendStatus(500);
  })
})


module.exports = router;
