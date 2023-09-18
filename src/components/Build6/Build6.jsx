import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'; 
import {useHistory} from 'react-router-dom';
import { Textarea } from '@mantine/core';
import { Container } from '@mantine/core';

function Build6 (){
    const dispatch = useDispatch();
    const history = useHistory();
    const [newCharBS, setNewCharBS] = useState('')
    const newChar = useSelector( store => store.newChar)

    const enterBackStory = (event) => {
        event.preventDefault();
        setNewCharBS(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(
        {
            type: 'ADD_CHAR',
            payload: newChar
        })
        console.log('testing submission', newChar)
        history.push('/character-review')
    }

    const saveBackstory = (event) => {
        event.preventDefault();
        dispatch({
            type: 'ADD_BACKSTORY',
            payload: newCharBS
        })
    }

    return(
        <div id='step-5'>
        <h1>Step 5: Enter any backstory your character may have!
        </h1>
        <form onSubmit={handleSubmit}>
        <Container>
        <Textarea
        aria-label="My textarea"
        placeholder='Enter backstory, questions for your DM, and/or thoughts here'
        size='xs'
        px='xl'
        minRows={2}
        maxRows={4}
        value={newCharBS} onChange={enterBackStory} 
        />
        </Container>
        {/* possibly create prompt button if stretch/time allows */}
        <ul>Prompt ideas:
            <li>What motivates your character?</li>
            <li>What was you character's childhood like?</li>
            <li>How old is your character?</li>
        </ul>
        <button onClick={saveBackstory}>Save Backstory</button>
        <br></br>
        <br></br>
        <button type='submit'>Submit Character</button>
        </form>
        </div>
    )
}

export default Build6;