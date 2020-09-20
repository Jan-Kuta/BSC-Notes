import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {addNote} from "../redux/notes/notes.actions";

export const NoteCreator = () => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    return (
        <>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>
            <button onClick={() => dispatch(addNote(title))}>Pridat</button>
        </>
    );
};
