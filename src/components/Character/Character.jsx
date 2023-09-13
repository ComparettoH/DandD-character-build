import { useState } from 'react';
import {useHistory} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';


export function Character({char}) {
    const history = useHistory();
    const dispatch = useDispatch();
    const [charId, setCharId] = useState(Number(''))
   
    const goToEdit = () => {
        history.push('/character-edit')
    }

    const handleDelete = (char) => {
        setCharId
        history.push(`/character-delete`)
        console.log({char})
        dispatch({
            type: 'REMOVE_CHAR',
            payload: char
        })
    }

    return (

        <div key={char.id}>
             <h1>{char.character_name}</h1>
             <p>{char.race}</p>
             <p>{char.class}</p>
             <p>{char.background}</p>
             <p>{char.character_backstory}</p>
            {/* add functionality!!! */}
            <button onClick={goToEdit}>
                Edit
            </button> 
            <button onClick={() => handleDelete(char)}>
               Remove
            </button>
        </div>

    )
}