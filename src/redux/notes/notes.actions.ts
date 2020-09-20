import {
    AddNoteRequestAction,
    AddNoteSuccessAction,
    DeleteNoteRequestAction,
    DeleteNoteSuccessAction,
    LoadNotesRequestAction,
    LoadNotesSuccessAction,
    NotesActionTypes,
    SetNoteFailureAction,
    UpdateNoteRequestAction,
    UpdateNoteSuccessAction
} from './notesActionTypes';
import {Note} from './notes.types';

export const loadNotes = (): LoadNotesRequestAction => ({
    type: NotesActionTypes.LOAD_NOTES_REQUEST
});

export const loadNotesSuccess = (notes:  Note[]): LoadNotesSuccessAction => ({
    type: NotesActionTypes.LOAD_NOTES_SUCCESS,
    payload: notes
});

export const addNote = (noteTitle: string): AddNoteRequestAction => ({
    type: NotesActionTypes.ADD_NOTE_REQUEST,
    payload: noteTitle
});

export const addNoteSuccess = (note: Note): AddNoteSuccessAction => ({
    type: NotesActionTypes.ADD_NOTE_SUCCESS,
    payload: note
});

export const deleteNote = (id: number): DeleteNoteRequestAction => ({
    type: NotesActionTypes.DELETE_NOTE_REQUEST,
    payload: id
});

export const deleteNoteSuccess = (id: number): DeleteNoteSuccessAction => ({
    type: NotesActionTypes.DELETE_NOTE_SUCCESS,
    payload: id
});

export const updateNote = (note: Note): UpdateNoteRequestAction => ({
    type: NotesActionTypes.UPDATE_NOTE_REQUEST,
    payload: note
});

export const updateNoteSuccess = (note: Note): UpdateNoteSuccessAction => ({
    type: NotesActionTypes.UPDATE_NOTE_SUCCESS,
    payload: note
});

export const setNoteFailure = (message: string): SetNoteFailureAction => ({
    type: NotesActionTypes.SET_NOTE_FAILURE,
    payload: message
});
