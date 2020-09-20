import React from 'react';
import {NavLink} from 'react-router-dom';

export const NoteDetail = () => (
    <>
        <NavLink to="/1/edit">Edit</NavLink>&nbsp;
        <NavLink to="/">Home</NavLink>
        <h1>NOTE DETAIL</h1>
    </>
);
