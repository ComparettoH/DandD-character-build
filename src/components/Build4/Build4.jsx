import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

function Build4 (){
    const dispatch = useDispatch();
    const history = useHistory();
    const classR = useSelector(store => store.classR)
    const [description, setDescription] = useState([]);
    const [newCharClass, setNewCharClass] = useState(Number(''));

    useEffect(() => {
        getClassList();
        }, [])
    
     const getClassList = () => {
        dispatch({type: 'FETCH_CLASS'})
    }

    const handleClick = (oneClass) => {
        console.log('in handleClick', oneClass.description)
        setDescription(oneClass.description)
        setNewCharClass(oneClass.id)
     }

   const addClass = () => {
    dispatch({
        type: 'ADD_CLASS',
        payload: newCharClass
    })
    history.push('/character-build-5')
   }

    console.log(classR)

    return(
        <div id='step-3'>
        <h1>Step 3: Pick a class for your character!</h1>
        <select id="class" name="char-class" size ="4" multiple>
            {classR.map((oneClass) => 
                    <option onClick={() => handleClick (oneClass)} key={oneClass.id} value={newCharClass}>{oneClass.class}</option>
                    )}
                    </select>
                    <p>
                    {description}
                    </p>
              
            <button onClick={addClass}>
                Next Step
            </button> 
        </div>
    )
}

export default Build4;