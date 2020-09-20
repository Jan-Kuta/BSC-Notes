import {
    AddNoteRequestAction,
    DeleteNoteRequestAction,
    LoadNotesRequestAction,
    NotesActionTypes,
    UpdateNoteRequestAction
} from './notesActionTypes';
import {Note} from './notes.types';

export const loadNotes = (): LoadNotesRequestAction => ({
    type: NotesActionTypes.LOAD_NOTES_REQUEST
});

export const addNote = (noteTitle: string): AddNoteRequestAction => ({
    type: NotesActionTypes.ADD_NOTE_REQUEST,
    payload: noteTitle
});

export const deleteNote = (id: number): DeleteNoteRequestAction => ({
    type: NotesActionTypes.DELETE_NOTE_REQUEST,
    payload: id
});

export const updateNotes = (note: Note): UpdateNoteRequestAction => ({
    type: NotesActionTypes.UPDATE_NOTE_REQUEST,
    payload: note
});
