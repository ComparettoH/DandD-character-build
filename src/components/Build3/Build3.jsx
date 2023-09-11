import { useDispatch, useSelector } from 'react-redux';
import React, {useEffect} from 'react';

function Build3 (){
    const dispatch = useDispatch();
    const race = useSelector(store => store.race)

    useEffect(() => {
    getRace();
    }, [])

    const getRace = () => {
        dispatch({type: 'FETCH_RACE'})
    }
    console.log(race)

    return(
        <h1>Step 2: Pick a race for your character!</h1>
    )
}

export default Build3;