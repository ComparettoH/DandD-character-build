import { Fragment, useState } from 'react';
import {useHistory} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';


export function Character() {
    const history = useHistory();
    const dispatch = useDispatch();
    const character = useSelector(store => store.character)
    const charToEdit = useSelector(store => store.charToEdit)

    // useEffect(() => {
    //     getChar();
    //     }, [])
    
    //     const getChar = () => {
    //         dispatch({type: 'FETCH_CHAR'})
    //     }

    const handleUpdate = (event, changeProperty) => {
        event.preventDefault();
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
                {character.map((infoInDB) =>
                <Fragment key={infoInDB.id}>
                    <h2>Current Name: {infoInDB.character_name}</h2>
                    <input key={infoInDB.name}
                    value={charToEdit.character_name}
                    placeholder={infoInDB.character_name}
                    onChange={(event) => handleUpdate()}
                    ></input>
                    <p>Current Race: {infoInDB.race}</p>
                    <input key={infoInDB.race}
                    value={charToEdit.race}
                    placeholder={infoInDB.race}></input>
                    <p>Current Class: {infoInDB.class}</p>
                    <input key={infoInDB.class}
                    value={charToEdit.class}
                    placeholder={infoInDB.class}></input>
                    <p>Current Background: {infoInDB.background}</p>
                    <input key={infoInDB.background}
                    value={charToEdit.background}
                    placeholder={infoInDB.background}></input>
                    <p>Current Backstory: {infoInDB.character_backstory}</p>
                    <textarea key={infoInDB.character_backstory}
                    value={charToEdit.character_backstory}
                    placeholder={infoInDB.character_backstory}/>
                </Fragment>)}
                <button type='submit'>Update Character</button>
                <button onClick={cancelEdit}>Cancel</button>
            </form>
            </span>
        </div>

    )
}