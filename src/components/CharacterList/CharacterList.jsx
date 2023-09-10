import { useDispatch, useSelector } from 'react-redux';
import React, {useEffect} from 'react';
import { Character } from '../Character/Character';

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
        <div id='user-list'>
        <h1>Hooray in Character List</h1>
        {charList.map((char, index) => 
        <span key={index}>
            <Character char={char} />
        </span>)}
        </div>
    )
}

export default CharacterList