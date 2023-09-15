import { useDispatch, useSelector } from 'react-redux';
import React, {useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function CharacterReview (){
    const dispatch = useDispatch();
    const history = useHistory();
    const newChar = useSelector( store => store.newChar)

    return(
        <div id='char-review'>
        <h1>Omg... freaking finally we made a dang character sheesh
        </h1>
        <p>ok but seriously...</p>
        </div>
    )
}

export default CharacterReview;