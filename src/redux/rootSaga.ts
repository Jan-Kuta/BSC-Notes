import {all} from 'redux-saga/effects';

import notesSaga from './notes/notes.sagas';

export default function* rootSaga() {
    yield all([
        notesSaga()
    ])
    // code after all-effect
}
