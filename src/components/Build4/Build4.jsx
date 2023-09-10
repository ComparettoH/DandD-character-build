import { useDispatch, useSelector } from 'react-redux';
import React, {useEffect} from 'react';

function Build4 (){
    const dispatch = useDispatch();
    const classR = useSelector(store => store.classR)

    useEffect(() => {
    getClass();
    }, [])

    const getClass = () => {
        dispatch({type: 'FETCH_CLASS'})
    }
    console.log(classR)

    return(
        <h1>Hooray in Character Build Step 4!</h1>
    )
}

export default Build4;