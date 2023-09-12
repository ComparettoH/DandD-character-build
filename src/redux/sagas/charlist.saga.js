import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

//still need to secure
function* fetchCharList() {
  try {
    const charListResponse = yield axios.get('/api/charlist');
    console.log('in sagaCharList,', charListResponse)
    yield put({ type: 'SET_CHARLIST', payload: charListResponse.data });
  }
  catch (error) {
    console.log('User character list GET request failed', error);
  }
}

function* AddChar (action) {
  try {
    yield axios.post('/api/charlist', action.payload)
    yield put({ type: 'FETCH_CHARLIST'})
  }
  catch (error) {
    console.log('User character POST request failed', error)
  }
}

function* charListSaga() {
  yield takeLatest('FETCH_CHARLIST', fetchCharList);
  yield takeLatest('ADD_CHAR', AddChar)
}

export default charListSaga;
