import React, {useEffect} from 'react';
import {push} from 'redux-first-history';

import {useDispatch, useSelector} from 'react-redux';
import {loadNotes} from '../redux/notes/notes.actions';
import {RootState} from '../redux/rootReducer';
import {NoteCreator} from './NoteCreator';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import MoreIcon from '@material-ui/icons/MoreVert';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: '36ch',
        backgroundColor: theme.palette.background.paper,
    },
    inline: {
        display: 'inline',
    },
}));

export const NoteList = () => {
    const dispatch =  useDispatch();
    const notes = useSelector((state: RootState) => state.notes.data);
    useEffect(() => {
        // Kvuli tomu, ze se nepersistuji zmeny v API
        if (notes.length === 0) {
            dispatch((loadNotes()))
        }
    }, [dispatch, notes]);
    const classes = useStyles();

    return(
        <>
            <h1>NOTE LIST</h1>
            <List className={classes.root}>
                {notes.map((note => (
                    <ListItem key={note.id}>
                        <ListItemText
                            primary={note.title}
                        />
                        <ListItemSecondaryAction>
                            <IconButton onClick={() => dispatch(push(`/${note.id}`))} edge="end" aria-label="delete">
                                <MoreIcon/>
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                )))}
            </List>
            <NoteCreator />
        </>
    );
};
