import { Fragment, useState } from 'react';
import {useHistory} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';


export function Character() {
    const history = useHistory();
    const dispatch = useDispatch();
    const character = useSelector(store => store.character)
    const charToEdit = useSelector(store => store.charToEdit)

    const handleUpdate = (event, changeProperty) => {
        dispatch({
            type: 'EDIT_NAME',
            payload: {
                property: changeProperty, // character_name
                value: event.target.value // Name
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

        // console.log('testing', charList)
        console.log('testing', character)

    return (

        <div id="one-character">
            <h1>Edit Character</h1>
            <form onSubmit={handleSubmit}>
                <span>
                {character.map((infoInDB) =>
                <Fragment key={infoInDB.id}>
                    <h2>Current Name: {infoInDB.character_name}</h2>
                    <input
                    value={charToEdit.character_name}
                    placeholder={infoInDB.character_name}
                    ></input>
                    <p>Current Race: {infoInDB.race}</p>
                    <input key={infoInDB.id}
                    value={charToEdit.race}
                    placeholder='Character`s new race'></input>
                    <p>Current Class: {infoInDB.class}</p>
                    <input key={infoInDB.id}
                    value={charToEdit.class}
                    placeholder='Character`s new class'></input>
                    <p>Current Background: {infoInDB.background}</p>
                    <input key={infoInDB.id}
                    value={charToEdit.background}
                    placeholder='Character`s new background'></input>
                    <p>Current Backstory: {infoInDB.character_backstory}</p>
                    <input key={infoInDB.id}
                    value={charToEdit.character_backstory}
                    placeholder='Character`s new backstory'></input>
                </Fragment>)}
                </span>
            </form>
        </div>

    )
}