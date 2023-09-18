import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Build5.css';
import { Container, Button } from '@mantine/core';

function Build5 (){
    const dispatch = useDispatch();
    const history = useHistory();
    const background = useSelector(store => store.background)
    const [description, setDescription] = useState([]);
    const [newCharBackG, setNewCharBackG] = useState(Number(''));


    useEffect(() => {
    getBackground();
    }, [])

    const getBackground = () => {
        dispatch({type: 'FETCH_BACKGROUND'})
    }

    const handleClick = (oneBG) => {
        setDescription(oneBG.description)
        setNewCharBackG(oneBG.id)
     }

   const addBackground = () => {
    dispatch({
        type: 'ADD_BACKGROUND',
        payload: newCharBackG
    })
    history.push('/character-build-6')
   }

    console.log(background)
    return(
        <div id='step-4'>
        <h1>Step 4 : Pick a backstory for your character!</h1>
        <select id="background" name="char-background" size ="4" multiple>
            {background.map((oneBG) => 
                    <option onClick={() => handleClick (oneBG)} key={oneBG.id} value={newCharBackG}>{oneBG.background}</option>
                    )}
                    </select>
                    <Container>
                    <p className='backG-p'>
                    {description}
                    </p>
                    </Container>
              
            <Button color="dark" onClick={addBackground}>
                Next Step
            </Button> 
        </div>
    )
}

export default Build5;