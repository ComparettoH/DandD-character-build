import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

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
    console.log(action.payload)
    yield axios.post('/api/charlist', action.payload)
    yield put({ type: 'FETCH_CHARLIST'})
  }
  catch (error) {
    console.log('User character POST request failed', error)
  }
}

function* deleteChar (action) {
  try {
      yield axios.delete(`/api/charlist/${action.payload}`)
      console.log('in sagaCharList,', action.payload)
      yield put({ type: 'REMOVE_CHAR'})
      yield put({ type: 'FETCH_CHARLIST'})
  }
  catch (error) {
      console.log('User character DELETE request failed', error)
  }
}

function* charListSaga() {
  yield takeLatest('FETCH_CHARLIST', fetchCharList);
  yield takeLatest('ADD_CHAR', AddChar)
  yield takeLatest('DELETE_CHAR', deleteChar)
}

export default charListSaga;
