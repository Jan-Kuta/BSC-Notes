import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {addNote} from "../redux/notes/notes.actions";
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import Save from '@material-ui/icons/Save';
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: '10px',
        width: '100%',
        maxWidth: '36ch',
        backgroundColor: theme.palette.background.paper,
    }
}));

export const NoteCreator = () => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const classes = useStyles();

    return (
        <>
            <TextField
                className={classes.root}
                variant="outlined"
                label="Note"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                InputProps={{endAdornment: (
                    <IconButton  onClick={() => {
                        if (title && title.length > 0) {
                            dispatch(addNote(title))
                        }
                    }}>
                        <Save />
                    </IconButton>
                )}}
            />
        </>
    );
};
