import { useDispatch, useSelector } from 'react-redux';
import React, {useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function CharacterEdit (){
    const dispatch = useDispatch();
    const history = useHistory();
    const indivChar = useSelector(store => store.indivChar)

    useEffect(() => {
        getCharList();
        }, [])
    
        const getCharList = () => {
            dispatch({type: 'FETCH_CHAR'})
        }
    return(
        <h1>Hooray in Character Edit!</h1>
    )
}

export default CharacterEdit