import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

//still need to secure
function* fetchClass() {
  try {
    const classResponse = yield axios.get('/api/class');
    console.log('in sagaclass,', classResponse)
    yield put({ type: 'SET_CLASS', payload: classResponse.data });
  }
  catch (error) {
    console.log('User class GET request failed', error);
  }
}

function* classSaga() {
  yield takeLatest('FETCH_CLASS', fetchClass);
}

export default classSaga;
