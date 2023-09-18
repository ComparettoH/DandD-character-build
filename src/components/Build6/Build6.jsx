import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Textarea } from '@mantine/core';
import './Build6.css';
import { Container, Button } from '@mantine/core';

function Build6() {
    const dispatch = useDispatch();
    const history = useHistory();
    const [newCharBS, setNewCharBS] = useState('')
    const newChar = useSelector(store => store.newChar)

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

    return (
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
                <Container>
                    <ul className='prompt'><b><u>Prompt ideas:</u></b>
                        <li style={{maxWidth: '350px', margin: 'auto'}}>What motivates your character?</li>
                        <li style={{maxWidth: '350px', margin: 'auto'}}>What was you character's childhood like?</li>
                        <li style={{maxWidth: '350px', margin: 'auto'}}>How old is your character?</li>
                    </ul>
                </Container>
                <Button variant="outline" color="dark" onClick={saveBackstory}>
                    Save Backstory
                </Button>
                <br></br>
                <br></br>
                <Button color="dark" type='submit'>
                    Submit Character
                </Button>
            </form>
        </div>
    )
}

export default Build6;