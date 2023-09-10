import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

//still need to secure
function* fetchRace() {
  try {
    const raceResponse = yield axios.get('/api/race');
    console.log('in sagarace,', raceResponse)
    yield put({ type: 'SET_RACE', payload: raceResponse.data });
  }
  catch (error) {
    console.log('User race GET request failed', error);
  }
}

function* raceSaga() {
  yield takeLatest('FETCH_RACE', fetchRace);
}

export default raceSaga;
