import { useState } from 'react';

export function Character({char}) {
   



    return (
        <div key={char.id}>
             <h1>{char.character_name}</h1>
             <p>{char.race}</p>
             <p>{char.class}</p>
             <p>{char.background}</p>
             <p>{char.character_backstory}</p>
            {/* add functionality!!! */}
            <button>
                Edit
                </button> <button>
                    Remove</button>
        </div>

    )
}