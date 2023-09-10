import { useDispatch, useSelector } from 'react-redux';
import React, {useEffect} from 'react';

function CharacterList (){
    const dispatch = useDispatch();
    const charList = useSelector(store => store.charList)

    useEffect(() => {
    getCharList();
    }, [])

    const getCharList = () => {
        dispatch({type: 'FETCH_CHARLIST'})
    }
    console.log(charList)

    return(
        <h1>Hooray in Character List</h1>
    )
}

export default CharacterList