import { useDispatch, useSelector } from 'react-redux';
import React, {useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { Button, Container } from '@mantine/core';
import './Build3.css';

function Build3 (){
    const dispatch = useDispatch();
    const history = useHistory();
    const race = useSelector(store => store.race)
    const [description, setDescription] = useState([])
    const [newCharRace, setNewCharRace] = useState(Number(''))
    const newChar = useSelector( store => store.newChar)

    useEffect(() => {
    getRaceList();
    }, [])

    const getRaceList = () => {
        dispatch({type: 'FETCH_RACE'})
    }

    const handleClick = (oneRace) => {
       setDescription(oneRace.description)
       setNewCharRace(oneRace.id)
    }

    const addRace = () => {
        dispatch({
            type: 'ADD_RACE',
            payload: newCharRace,
        })
        //sends new data to reducer then sends user to next step in character build
        history.push('/character-build-4')
    }
   
    console.log("in build stage 2", newChar)
    // console.log('in step 2', race)
    return(
        <div id='step-2'>
        <h1>Step 2: Pick a race for your character!</h1>
        <select id="race" name="char-race" size ="4" multiple>
            {race.map((oneRace) => 
                    <option onClick={() => handleClick (oneRace)} key={oneRace.id} value={newCharRace}>{oneRace.race}</option>
                    )}
                    </select>
                    <Container>
                    <p className='race-p'>
                    {description}
                    </p>
                    </Container>
               
            <Button color="dark"  onClick={addRace}>
                Next Step
            </Button> 
        </div>

    )
}

export default Build3;