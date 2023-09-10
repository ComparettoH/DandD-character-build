import { useDispatch, useSelector } from 'react-redux';
import React, {useEffect} from 'react';


function Build2 (){
    const dispatch = useDispatch();
    const gender = useSelector(store => store.gender)

    useEffect(() => {
    getGender();
    }, [])

    const getGender = () => {
        dispatch({type: 'FETCH_GENDER'})
    }
    console.log(gender)
    return(
        <div>
        <h1>Hooray in Character Build Step 2!</h1>
        <ul>
            {gender.map((option) => {
                <li key={option.id}>
                {option.gender}
                </li>
            })}
        </ul>
        </div>
    )
}

export default Build2;