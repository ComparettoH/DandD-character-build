import { useDispatch, useSelector } from 'react-redux';
import React, {Fragment, useEffect} from 'react';
import { useState } from 'react';
import {useHistory} from 'react-router-dom';


function CharacterList (){
    const dispatch = useDispatch();
    const charList = useSelector(store => store.charList)
    const history = useHistory();

    useEffect(() => {
    getCharList();
    }, [])

    const getCharList = () => {
        dispatch({type: 'FETCH_CHARLIST'})
    }
    // console.log(charList)

   
    const goToEdit = (char) => {
        history.push('/character-edit')
    }

    const handleDelete = (char) => {
        dispatch({
            type: 'DELETE_CHAR',
            payload: char.id
        })
    }
    

    return(
        <div id='user-list'>
        <h1>Hooray in Character List</h1>
        <span>
        {charList.map((char) => 
        <Fragment key={char.id}>
            {/* <Character char={char} /> */}
            <h1>{char.character_name}</h1>
            <p>{char.race}</p>
            <p>{char.class}</p>
            <p>{char.background}</p>
            <p>{char.character_backstory}</p>
            <button onClick={() => goToEdit(char)}>
                Edit
            </button> 
            <button onClick={() => handleDelete(char)}>
               Remove
            </button>
            </Fragment>
        )}
        </span>
        </div>
    )
}

export default CharacterList