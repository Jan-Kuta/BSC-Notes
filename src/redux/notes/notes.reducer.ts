import {NotesState} from './notes.types';
import {NotesActions} from './notesActionTypes';
import {NotesActionTypes} from './notesActionTypes';

const initialState: NotesState = {
    loading: true,
    data: [],
    error: null
};

function notesReducer(state: NotesState = initialState, action: NotesActions): NotesState {
    switch (action.type) {
        case NotesActionTypes.LOAD_NOTES_REQUEST:
        case NotesActionTypes.ADD_NOTE_REQUEST:
        case NotesActionTypes.DELETE_NOTE_REQUEST:
        case NotesActionTypes.UPDATE_NOTE_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };

        case NotesActionTypes.LOAD_NOTES_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload
            };

        case NotesActionTypes.ADD_NOTE_SUCCESS:
            return {
                ...state,
                loading: false,
                data: [...state.data, action.payload]
            };

        case NotesActionTypes.DELETE_NOTE_SUCCESS:
            return {
                ...state,
                loading: false,
                data: state.data.filter(note => note.id !== action.payload)
            };

        case NotesActionTypes.UPDATE_NOTE_SUCCESS:
            return {
                ...state,
                loading: false,
                data: state.data.map(note => note.id === action.payload.id ? action.payload : note)
            };

        case NotesActionTypes.SET_NOTE_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };


        default:
            return state;
    }
}

export default notesReducer
