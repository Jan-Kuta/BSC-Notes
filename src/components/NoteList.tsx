import React from 'react';
import {push} from 'redux-first-history';

import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../redux/rootReducer';
import {NoteCreator} from './NoteCreator';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import MoreIcon from '@material-ui/icons/MoreVert';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from '@material-ui/core/Typography';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';


const useStyles = makeStyles((theme) => ({
    root: {
        width: '300px',
        backgroundColor: theme.palette.background.paper,
    },
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
}));

export const NoteList = () => {
    const dispatch =  useDispatch();
    const notes = useSelector((state: RootState) => state.notes.data);
    const loading = useSelector((state: RootState) => state.notes.loading);
    const classes = useStyles();

    return(
        <div>
            <Typography variant="h3" gutterBottom>
                NOTE LIST
            </Typography>
            {!!notes.length && (
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
            )}
            <NoteCreator />
            <Backdrop open={loading} className={classes.backdrop}>
                <CircularProgress color="inherit" />
            </Backdrop>
        </div>
    );
};
