import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchChar(action) {
  try {
    const charResponse = yield axios.get(`/api/character/${action.payload}`);
    console.log('in fetchChar', action.payload)
    console.log('in indivChar saga,', charResponse.data)
    yield put({ type: 'SET_CHAR',
  payload: charResponse.data });
  }
  catch (error) {
    console.log('User character GET request failed', error);
  }
}

function* charSaga() {
  yield takeLatest('FETCH_CHAR', fetchChar);
}

export default charSaga;
