import { useDispatch, useSelector } from 'react-redux';
import React, {Fragment, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import './CharacterList.css';
import { Container, Button } from '@mantine/core';

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
        <h1 className='list-header'>{user.username}'s Character List</h1>
        <div id='user-list'>
        <Container className='char'>
        {charList.map((char) => 
        <Fragment key={char.id}>
            <h1>{char.character_name}</h1>
            <p>Character Race: {char.race}</p>
            <p>Character Class: {char.class}</p>
            <p>Character Background: {char.background}</p>
            <p>Character Backstory:
                <br></br>
                {char.character_backstory}</p>
            <Button color="lime" onClick={() => goToEdit(char)}>
                Edit
            </Button> 
            <Button color="red"  style={{margin: '10px'}} onClick={() => handleDelete(char)}>
               Remove
            </Button>
            </Fragment>
        )}
        </Container>
        </div>
        </>
    )
}

export default CharacterList