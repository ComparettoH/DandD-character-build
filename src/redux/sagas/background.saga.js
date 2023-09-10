import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

//still need to secure
function* fetchBackground() {
  try {
    const backgroundResponse = yield axios.get('/api/background');
    console.log('in sagabackground,', backgroundResponse)
    yield put({ type: 'SET_BACKGROUND', payload: backgroundResponse.data });
  }
  catch (error) {
    console.log('User background GET request failed', error);
  }
}

function* backgroundSaga() {
  yield takeLatest('FETCH_BACKGROUND', fetchBackground);
}

export default backgroundSaga;
