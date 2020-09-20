import {Note} from "./notes.types";

export enum NotesActionTypes {
    LOAD_NOTES_REQUEST = 'LOAD_NOTES_REQUEST',
    LOAD_NOTES_SUCCESS = 'LOAD_NOTES_SUCCESS',
    ADD_NOTE_REQUEST = 'ADD_NOTE_REQUEST',
    ADD_NOTE_SUCCESS = 'ADD_NOTE_SUCCESS',
    DELETE_NOTE_REQUEST = 'DELETE_NOTE_REQUEST',
    DELETE_NOTE_SUCCESS = 'DELETE_NOTE_SUCCESS',
    UPDATE_NOTE_REQUEST = 'UPDATE_NOTE_REQUEST',
    UPDATE_NOTE_SUCCESS = 'UPDATE_NOTE_SUCCESS',
    SET_NOTE_FAILURE = 'SET_NOTE_FAILURE',
}

export type LoadNotesRequestAction = {
    type: typeof NotesActionTypes.LOAD_NOTES_REQUEST
};

export type LoadNotesSuccessAction = {
    type: typeof NotesActionTypes.LOAD_NOTES_SUCCESS
    payload: Note[]
};

export type AddNoteRequestAction = {
    type: typeof NotesActionTypes.ADD_NOTE_REQUEST
    payload: string
};

export type AddNoteSuccessAction = {
    type: typeof NotesActionTypes.ADD_NOTE_SUCCESS
    payload: Note
};

export type DeleteNoteRequestAction = {
    type: typeof NotesActionTypes.DELETE_NOTE_REQUEST
    payload: number
};

export type DeleteNoteSuccessAction = {
    type: typeof NotesActionTypes.DELETE_NOTE_SUCCESS,
    payload: number
};

export type UpdateNoteRequestAction = {
    type: typeof NotesActionTypes.UPDATE_NOTE_REQUEST
    payload: Note
};

export type UpdateNoteSuccessAction = {
    type: typeof NotesActionTypes.UPDATE_NOTE_SUCCESS
    payload: Note
};

export type SetNoteFailureAction = {
    type: typeof NotesActionTypes.SET_NOTE_FAILURE
    payload: string
}

export type NotesActions =
    | LoadNotesRequestAction
    | LoadNotesSuccessAction
    | AddNoteRequestAction
    | AddNoteSuccessAction
    | DeleteNoteRequestAction
    | DeleteNoteSuccessAction
    | UpdateNoteRequestAction
    | UpdateNoteSuccessAction
    | SetNoteFailureAction
