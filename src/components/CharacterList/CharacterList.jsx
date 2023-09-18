import { useDispatch, useSelector } from 'react-redux';
import React, {Fragment, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import './CharacterList.css';

function CharacterList (){
    const dispatch = useDispatch();
    const charList = useSelector(store => store.charList)
    const history = useHistory();
    const user = useSelector((store) => store.user);

    useEffect(() => {
    getCharList();
    }, [])

    const getCharList = () => {
        dispatch({type: 'FETCH_CHARLIST'})
    }
    // console.log(charList)

   
    function goToEdit (char) {
        history.push(`/character/${char.id}`)
        dispatch({
            type: 'SET_EDIT_STUDENT',
            payload: char
        })
    }

    const handleDelete = (char) => {
        dispatch({
            type: 'DELETE_CHAR',
            payload: char.id
        })
    }
    

    return(
        <>
        <h1 style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%"
          }}>{user.username}'s Character List</h1>
        <div id='user-list'
        style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            backgroundColor: 'black',
            margin: "15%",
          }}>
        <span>
        {charList.map((char) => 
        <Fragment key={char.id}>
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
        </>
    )
}

export default CharacterList