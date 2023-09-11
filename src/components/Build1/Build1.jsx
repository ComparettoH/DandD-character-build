import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'; 
import {useHistory} from 'react-router-dom';


function Build1 (){
    const dispatch = useDispatch();
    const history = useHistory()
    const [newCharName, setNewCharName] = useState('')
    const newChar = useSelector( store => store.newChar)

    const enterName = (event) => {
        setNewCharName(event.target.value)
    }

    const addName = () => {
        dispatch({
            type: 'ADD_NAME',
            payload: newCharName
        })
        //sends new data to reducer then sends user to next step in character build
        history.push('/character-build-3')
    };

    console.log("in build stage 1", newChar)
    console.log('submit', newCharName)
    return(
        <div>
        <h1>Step 1: Enter Character's Name</h1>
        <input
        type='text'
        value={newCharName}
        onChange={enterName}></input>
        <button>Randomize</button>
        <button onClick={addName}>Next Step</button>
        </div>
    )
}

export default Build1;