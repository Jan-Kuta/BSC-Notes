import React, {useEffect} from 'react';
import {push} from 'redux-first-history';

import {useDispatch, useSelector} from 'react-redux';
import {loadNotes} from '../redux/notes/notes.actions';
import {RootState} from '../redux/rootReducer';
import {NoteCreator} from './NoteCreator';

export const NoteList = () => {
    const dispatch =  useDispatch();
    const notes = useSelector((state: RootState) => state.notes.data);
    useEffect(() => {
        // Kvuli tomu, ze se nepersistuji zmeny v API
        if (notes.length === 0) {
            dispatch((loadNotes()))
        }
    }, [dispatch, notes]);

    return(
        <>
            <h1>NOTE LIST</h1>
            <ul>
                {notes.map((note => (
                    <li key={note.id} onClick={() => dispatch(push(`/${note.id}`))}>{note.title}</li>
                )))}
            </ul>
            <NoteCreator />
        </>
    );
};
