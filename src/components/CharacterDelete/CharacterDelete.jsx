import { useDispatch, useSelector } from 'react-redux';
import React, {useEffect} from 'react';

function CharacterDelete (){
    const dispatch = useDispatch();
    const indivChar = useSelector(store => store.indivChar)


    // useEffect(() => {
    //     getChar();
    //     }, [])
    
    //     const getChar = () => {
    //         dispatch({type: 'FETCH_CHAR'})
    //     }
        // console.log(charList)


    return(
        <div id='user-delete'>
        <h1>Hooray in Character Delete!</h1>
        {indivChar.map((one, index) =>
        <span key={index}>
            {one}
        </span>)}
        </div>
    )
}

export default CharacterDelete