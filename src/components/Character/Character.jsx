import { useState } from 'react';
import {useHistory} from 'react-router-dom';

export function Character({char}) {
    const history = useHistory();
   
    const goToEdit = () => {
        history.push('/character-edit')
    }

    const goToDelete = () => {
        history.push('/character-delete')
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
            <button onClick={goToDelete}>
               Remove
            </button>
        </div>

    )
}