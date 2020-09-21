import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {addNote} from "../redux/notes/notes.actions";
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import Save from '@material-ui/icons/Save';
import makeStyles from "@material-ui/core/styles/makeStyles";
import {useTranslation} from 'react-i18next';

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
    const { t } = useTranslation();

    return (
        <>
            <TextField
                className={classes.root}
                variant="outlined"
                label={t('New note')}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                InputProps={{endAdornment: (
                    <IconButton  onClick={() => {
                        if (title && title.length > 0) {
                            dispatch(addNote(title));
                            setTitle('');
                        }
                    }}>
                        <Save />
                    </IconButton>
                )}}
            />
        </>
    );
};
