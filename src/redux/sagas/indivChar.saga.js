import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

//still need to secure
function* fetchChar() {
  try {
    const charResponse = yield axios.get('/api/character');
    console.log('in sagaCharList,', charResponse)
    yield put({ type: 'SET_CHARLIST', payload: charResponse.data });
  }
  catch (error) {
    console.log('User character GET request failed', error);
  }
}

//still need to secure
function* deleteChar () {
    try {
        yield axios.delete('/api/character/:id')
        yield put({ type: 'REMOVE_CHAR'})
    }
    catch (error) {
        console.log('User character DELETE request failed', error)
    }
}

function* charSaga() {
  yield takeLatest('FETCH_CHAR', fetchChar);
  yield takeLatest('DELETE_CHAR', deleteChar)
}

export default charSaga;
