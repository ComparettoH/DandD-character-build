import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

//still need to secure
function* fetchChar(action) {
  try {
    
    const charResponse = yield axios.get(`/api/character/:id`);
    console.log('charResponse:', charResponse);
    console.log('in saga fetchCHAR,', charResponse.data)
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
