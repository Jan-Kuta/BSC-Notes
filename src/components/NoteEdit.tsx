import React, {useEffect, useState} from 'react';
import Button from '@material-ui/core/Button';
import CancelIcon from '@material-ui/icons/Cancel';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import SubmitIcon from '@material-ui/icons/CheckCircle';
import TextField from '@material-ui/core/TextField';
import {goBack} from "redux-first-history";
import makeStyles from '@material-ui/core/styles/makeStyles';
import styled from 'styled-components';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../redux/rootReducer';
import {RouteComponentProps} from 'react-router';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import {updateNote} from "../redux/notes/notes.actions";

type MatchParams = {
    id: string
}

type Props = RouteComponentProps<MatchParams>

const ButtonsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%
`;

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: '20px',
        width: '300px',
        backgroundColor: theme.palette.background.paper,
    },
    header: {
        display: 'flex',
        flexFlow: 'row-reverse'
    },
    backButton: {
        marginRight: '12px',
    },
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
}));

export const NoteEdit = ({match}: Props) => {
    const dispatch = useDispatch();
    const note = useSelector((state: RootState) => state.notes.data.find((note) => note.id.toString() === match.params.id));
    const loading = useSelector((state: RootState) => state.notes.loading);
    const [title, setTitle] = useState(note?.title || '');
    useEffect(() => {
        if(!note) {
            dispatch(goBack('/'))
        }
    }, [dispatch, note]);
    const classes = useStyles();

    if (! note) {
        return null;
    }

    return (
        <div>
            <Card className={classes.root}>
                <CardHeader
                    title="NOTE EDIT"
                    className={classes.header}
                />
                <CardContent>
                    <TextField
                        variant="outlined"
                        label="Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        multiline
                        fullWidth={true}
                    />
                </CardContent>
                <CardActions>
                    <ButtonsWrapper>
                        <Button onClick={() => dispatch(goBack(`/${match.params.id}`))} startIcon={<CancelIcon />} variant="contained" color="secondary">Cancel</Button>
                        <Button onClick={() => dispatch(updateNote({...note, title}))} startIcon={<SubmitIcon />} variant="outlined" color="primary">Submit</Button>
                    </ButtonsWrapper>
                </CardActions>
            </Card>
            <Backdrop open={loading} className={classes.backdrop}>
                <CircularProgress color="inherit" />
            </Backdrop>
        </div>
    );
};
