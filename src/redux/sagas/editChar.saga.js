import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* editChar(action) {
    // Update selected student in the database
    try {
        yield axios.put(`/students/${action.payload.id}`, action.payload);
        yield put({ type: 'FETCH_STUDENTS' });  
    } catch(err) {
        console.log(err);
    }
}

export default editChar;