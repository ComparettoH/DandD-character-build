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

function* charListSaga() {
  yield takeLatest('FETCH_CHARLIST', fetchCharList);
}

export default charListSaga;
