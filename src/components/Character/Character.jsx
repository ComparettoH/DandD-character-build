import { Fragment, useState } from 'react';
import {useHistory} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';


export function Character() {
    const history = useHistory();
    const dispatch = useDispatch();
    const [charId, setCharId] = useState(Number(''))
   const indivChar = useSelector(store => store.indivChar)
   const [indivChar1, setIndivChar1] = useState([]);

    

    useEffect(() => {
    getChar();
    }, [])
    
    const getChar = () => {
        dispatch({type: 'FETCH_CHAR'})
    }

    return (

        <div id="one-character">
            <h1>In Character !!!!</h1>
            <span>
            {indivChar1.map((char) =>
            <Fragment key={char.id}>
            <h1>{char.character_name}</h1>
            </Fragment>)}
            </span>
        </div>

    )
}