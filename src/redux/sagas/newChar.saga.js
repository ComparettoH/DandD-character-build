import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

//still need to secure
function* addChar(action) {
  try {
    const newCharResponse = yield axios.post('/api/charlist', action.payload);
    console.log('in sagaclass,', newCharResponse)
    yield put({ type: 'ADD_CHAR', payload: newCharResponse.data });
  }
  catch (error) {
    console.log('User character POST request failed', error);
  }
}

function* newCharSaga() {
  yield takeLatest('FETCH_CLASS', addChar);
}

export default newCharSaga;
