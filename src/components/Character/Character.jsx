import { Fragment, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { Button } from '@mantine/core';
import { Textarea } from '@mantine/core';


export function Character() {
    const history = useHistory();
    const dispatch = useDispatch();
    const charToEdit = useSelector(store => store.charToEdit)
    // const race = useSelector(store => store.race)
    // const classR = useSelector(store => store.classR)
    // const background = useSelector(store => store.background)


    const handleUpdate = (event, changeProperty) => {
        event.preventDefault();
        dispatch({
            type: 'EDIT_NAME',
            payload: {
                property: changeProperty, // character_name
                value: event.target.value // Name - text/string
            }
        })
        // dispatch({
        //     type: 'EDIT_RACE',
        //     payload: {
        //         property: changeProperty, // character_race
        //         value: event.target.value // Race id
        //     }
        // })
        // dispatch({
        //     type: 'EDIT_CLASS',
        //     payload: {
        //         property: changeProperty, // character_class
        //         value: event.target.value // Class id
        //     }
        // })
        // dispatch({
        //     type: 'EDIT_BACKGROUND',
        //     payload: {
        //         property: changeProperty, // character_background
        //         value: event.target.value // Background id
        //     }
        // })
        dispatch({
            type: 'EDIT_BACKSTORY',
            payload: {
                property: changeProperty, // character_backstory
                value: event.target.value // Backstory - text/string
            }
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch({
            type: 'SUBMIT_EDIT_CHAR',
            payload: charToEdit
        })
        history.push('/character-list')
    }


    const cancelEdit = () => {
        history.push('/character-list');
    }

    console.log('testing for character edit', charToEdit)

    return (
        <div style={{ backgroundColor: "black", color: "white" }} id="one-character">
            <h1>Edit Character</h1>
            <span>
                <form onSubmit={handleSubmit}>
                    <>
                        <Fragment key={charToEdit.id}>
                            <h2>Update Character's Name To:</h2>
                            <input key='1'
                                value={charToEdit.character_name}
                                placeholder='New Name'
                                onChange={(event) => handleUpdate(event, 'character_name')}
                            ></input>

                            <p>Current Race: {charToEdit.race}</p>
                            {/* <Container>
                                    <select key='4' size="4" multiple>
                                        {race.map((oneRace) =>
                                            <option onClick={(event) => handleUpdate(event, 'race')} key={oneRace.id} value={charToEdit.race}>{oneRace.race}</option>
                                        )}
                                    </select>
                                    </Container> */}


                            <p>Current Class: {charToEdit.class}</p>
                            {/* <Container>
                                    <select key='3' size="4" multiple>
                                        {classR.map((oneClass) =>
                                            <option onClick={() => handleUpdate(event, 'character_class')} key={oneClass.id} value={charToEdit.class}>{oneClass.class}</option>
                                        )}
                                    </select>
                                    </Container> */}

                            <p>Current Background: {charToEdit.background}</p>
                            {/* <select size="4" multiple>
                                        {background.map((oneBG) =>
                                            <option onClick={() => handleUpdate(event, 'character_background')} key={oneBG.id} value={charToEdit.character_background}>{oneBG.background}</option>
                                        )}
                                    </select> */}

                            <h2>Update Character Backstory:</h2>
                            <Textarea
                                aria-label="My textarea"
                                placeholder='Enter backstory, questions for your DM, and/or thoughts here'
                                size='xs'
                                px='xl'
                                minRows={2}
                                maxRows={4}
                                value={charToEdit.character_backstory}
                                onChange={(event) => handleUpdate(event, 'character_backstory')} />
                        </Fragment>
                        <br></br>
                        <Button color="dark" type='submit'>Update Character</Button>
                        <Button color="red" style={{ margin: '10px' }} onClick={cancelEdit}>Cancel</Button>
                    </>
                </form>
            </span>
        </div>

    )
}