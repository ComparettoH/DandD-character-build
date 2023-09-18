import { useState } from 'react';
import { useDispatch } from 'react-redux'; 
import {useHistory} from 'react-router-dom';
import { Button, Container } from '@mantine/core';
import { TextInput } from '@mantine/core';


function Build1 (){
    const dispatch = useDispatch();
    const history = useHistory();
    const [newCharName, setNewCharName] = useState('')
    // const newChar = useSelector( store => store.newChar)

    const enterName = (event) => {
        event.preventDefault();
        setNewCharName(event.target.value)
    }

    const addName = (event) => {
        event.preventDefault();
        dispatch({
            type: 'ADD_NAME',
            payload: newCharName
        })
        //sends new data to reducer then sends user to next step in character build
        history.push('/character-build-3')
    };

    // console.log('submit', newCharName)
    return(
        <div id="step-1">
        <h1>Step 1: Enter Character's Name</h1>
        <form>
        <Container>
        <TextInput
        placeholder="Character's name"
        label="Character's name"
        variant="filled"
        size="sm"
        type='text'
        value={newCharName}
        onChange={enterName}
        />
        </Container>
        <br></br>
        <Button color="dark" onClick={addName}>Next Step</Button>
        </form>
        </div>
    )
}

export default Build1;