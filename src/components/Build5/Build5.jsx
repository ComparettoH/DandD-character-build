import { useDispatch, useSelector } from 'react-redux';
import React, {useEffect} from 'react';

function Build5 (){
    const dispatch = useDispatch();
    const background = useSelector(store => store.background)

    useEffect(() => {
    getBackground();
    }, [])

    const getBackground = () => {
        dispatch({type: 'FETCH_BACKGROUND'})
    }
    console.log(background)

    return(
        <h1>Hooray in Character Build Step 5! are we done yet?</h1>
    )
}

export default Build5;