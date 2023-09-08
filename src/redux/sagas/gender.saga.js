import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
function* fetchGender() {
  try {
    const response = yield axios.get('/api/gender');
    yield put({ type: 'SET_GENDER', payload: response.data });
  } catch (error) {
    console.log('User gender GET request failed', error);
  }
}

function* genderSaga() {
  yield takeLatest('FETCH_GENDER', fetchGender);
}

export default genderSaga;
