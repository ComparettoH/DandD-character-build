import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'; 
import {useHistory} from 'react-router-dom';

function Build6 (){
    const dispatch = useDispatch();
    const history = useHistory();
    const [newCharBS, setNewCharBS] = useState('')
    const newChar = useSelector( store => store.newChar)

    const enterBackStory = (event) => {
        setNewCharBS(event.target.value)
    }



    const addBackStory = (event) => {
        event.preventDefault();
        dispatch({
            type: 'ADD_BACKSTORY',
            payload: newCharBS
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch({
            type: 'ADD_CHAR',
            payload: newChar
        })
        console.log('testing submission', newChar)
        
        history.push('/character-review')
    }

    return(
        <div id='step-5'>
        <h1>Step 5: Enter any backstory your character may have!
        </h1>
        <form onSubmit={handleSubmit}>
        <textarea value={newCharBS} onChange={enterBackStory} placeholder='Enter backstory, questions for your DM, and/or thoughts here'/>
        {/* possibly create prompt button if stretch/time allows */}
        <ul>Prompt ideas:
            <li>What motivates your character?</li>
            <li>What was you character's childhood like?</li>
            <li>How old is your character?</li>
        </ul>
        <button>Randomize</button>
        <button onClick={addBackStory}>Next Step</button>
        </form>
        </div>
    )
}

export default Build6;