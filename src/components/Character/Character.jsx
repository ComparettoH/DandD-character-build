import { Fragment, useState } from 'react';
import {useHistory} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';


export function Character() {
    const history = useHistory();
    const dispatch = useDispatch();
    const character = useSelector(store => store.character)

    

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