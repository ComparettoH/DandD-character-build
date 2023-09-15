import { Fragment, useState } from 'react';
import {useHistory} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';


export function Character() {
    const history = useHistory();
    const dispatch = useDispatch();
    const character = useSelector(store => store.character)
    const charToEdit = useSelector(store => store.charToEdit)
    const race = useSelector(store => store.race)
    const classR = useSelector(store => store.classR)
    const background = useSelector(store => store.background)

    const handleUpdate = (event, changeProperty) => {
        event.preventDefault();
        dispatch({
            type: 'EDIT_NAME',
            payload: {
                property: changeProperty, // character_name
                value: event.target.value // Name - text/string
            }
        })
        dispatch({
            type: 'EDIT_RACE',
            payload: {
                property: changeProperty, // character_race
                value: event.target.value // Race id
            }
        })
        dispatch({
            type: 'EDIT_CLASS',
            payload: {
                property: changeProperty, // character_class
                value: event.target.value // Class id
            }
        })
        dispatch({
            type: 'EDIT_BACKGROUND',
            payload: {
                property: changeProperty, // character_background
                value: event.target.value // Background id
            }
        })
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
            type: 'SUBMIT_EDIT_STUDENT',
            payload: charToEdit
        })
        history.push('/character-list')
    }

    console.log('testing for character edit', charToEdit)

    const cancelEdit = () => {
        history.push('/character-list');
    }
    // console.log('testing', charList)
    console.log('testing', character)

    return (
        <div id="one-character">
            <h1>Edit Character</h1>
            <span>
            <form onSubmit={handleSubmit}>
                <>
                {character.map((infoInDB) =>
                <Fragment key={infoInDB.id}>

                    <h2>Current Name: {infoInDB.character_name}</h2>
                    <input key={infoInDB.character_name}
                    value={charToEdit.character_name}
                    placeholder={infoInDB.character_name}
                    onChange={(event) => handleUpdate(event, 'character_name')}
                    ></input>

                    <p>Current Race: {infoInDB.race}</p>
                    <select size ="4" multiple>
                    {race.map((oneRace) => 
                    <option onChange={(event) => handleUpdate (event,'race')} key={oneRace.id} value={charToEdit.race}>{oneRace.race}</option>
                    )}
                    </select>

                    <p>Current Class: {infoInDB.class}</p>
                    <select key={infoInDB.class} size ="4" multiple>
                    {classR.map((oneClass) => 
                    <option onClick={() => handleUpdate (event, 'character_class')} key={oneClass.id} value={charToEdit.class}>{oneClass.class}</option>
                    )}
                    </select>

                    <p>Current Background: {infoInDB.background}</p>
                    <select size ="4" multiple>
                    {background.map((oneBG) => 
                    <option onClick={() => handleUpdate (event, 'character_background')} key={oneBG.id} value={charToEdit.character_background}>{oneBG.background}</option>
                    )}
                    </select>

                    <p>Current Backstory: {infoInDB.character_backstory}</p>
                    <textarea key={infoInDB.id}
                    value={charToEdit.character_backstory}
                    placeholder={infoInDB.character_backstory}/>
                </Fragment>)}
                <br></br>
                <button type='submit'>Update Character</button>
                <button onClick={cancelEdit}>Cancel</button>
                </>
            </form>
            </span>
        </div>

    )
}