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
            <h1>In Character !!!!</h1>
            <span>
            </span>
        </div>

    )
}