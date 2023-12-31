import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// still need to secure
function* fetchGender() {
  try {
    const genderResponse = yield axios.get('/api/gender');
    console.log('in sagagender,', genderResponse)
    yield put({ type: 'SET_GENDER', payload: genderResponse.data });
  }
  catch (error) {
    console.log('User gender GET request failed', error);
  }
}

function* genderSaga() {
  yield takeLatest('FETCH_GENDER', fetchGender);
}

export default genderSaga;
