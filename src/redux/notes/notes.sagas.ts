import {all, fork, put, takeLatest} from 'redux-saga/effects';
import {
    AddNoteRequestAction,
    DeleteNoteRequestAction,
    NotesActionTypes,
    UpdateNoteRequestAction
} from "./notesActionTypes";
import {
    addNoteSuccess,
    deleteNoteSuccess,
    loadNotes,
    loadNotesSuccess,
    setNoteFailure,
    updateNoteSuccess
} from "./notes.actions";
import {goBack} from 'redux-first-history';

const apiRoot = process.env.API_URL || 'http://private-9aad-note10.apiary-mock.com';

function* loadNotesRequest() {
    try {
        const res = yield fetch(`${apiRoot}/notes`);
        const data = yield res.json();
        yield put(loadNotesSuccess(data))
    } catch (err) {
        yield put(setNoteFailure(err))
    }
}

function* addNoteRequest(action: AddNoteRequestAction) {
    try {
        const res = yield fetch(`${apiRoot}/notes`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({title: action.payload})
        });
        const data = yield res.json();
        yield put(addNoteSuccess(data))
    } catch (err) {
        yield put(setNoteFailure(err))
    }
}

function* deleteNoteRequest(action: DeleteNoteRequestAction) {
    try {
        const res = yield fetch(`${apiRoot}/notes/${action.payload}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (res.ok) {
            yield put(deleteNoteSuccess(action.payload));
            yield put(goBack('/'))
        }
    } catch (err) {
        yield put(setNoteFailure(err))
    }
}

function* updateNoteRequest(action: UpdateNoteRequestAction) {
    try {
        const res = yield fetch(`${apiRoot}/notes/${action.payload.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({title: action.payload.title})
        });
        const data = yield res.json();
        yield put(updateNoteSuccess(data));
        yield put(goBack(`/${action.payload.id}`))
    } catch (err) {
        yield put(setNoteFailure(err))
    }
}

function* initialSaga() {
    yield put(loadNotes());
}

export default function* notesSaga() {
    yield fork(initialSaga);
    yield all([
        takeLatest(NotesActionTypes.LOAD_NOTES_REQUEST, loadNotesRequest),
        takeLatest(NotesActionTypes.ADD_NOTE_REQUEST, addNoteRequest),
        takeLatest(NotesActionTypes.DELETE_NOTE_REQUEST, deleteNoteRequest),
        takeLatest(NotesActionTypes.UPDATE_NOTE_REQUEST, updateNoteRequest)
    ])
}
