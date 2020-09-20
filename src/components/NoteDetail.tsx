import React, {useEffect} from 'react';
import {withRouter, RouteComponentProps} from 'react-router-dom';
import {Button} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import GoBackIcon from '@material-ui/icons/ArrowBack';
import EditIcon from '@material-ui/icons/Edit';
import {useDispatch, useSelector} from 'react-redux';
import {goBack, push} from 'redux-first-history';
import {RootState} from '../redux/rootReducer';
import makeStyles from '@material-ui/core/styles/makeStyles';

type MatchParams = {
    id: string
}

type Props = RouteComponentProps<MatchParams>

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

const PureNoteDetail = ({ match }: Props) => {
    const dispatch = useDispatch();
    const note = useSelector((state: RootState) => state.notes.data.find((note) => note.id.toString() === match.params.id));
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
        <>
            <Card className={classes.root}>
                <CardHeader
                    action={
                        <IconButton onClick={() => dispatch(goBack('/'))} aria-label="settings">
                            <GoBackIcon/>
                        </IconButton>
                    }
                    title="NOTE DETAIL"
                />
                <CardContent>
                    Id: {note.id}
                    Title: {note.title}
                </CardContent>
                <CardActions>
                    <Button startIcon={<DeleteIcon />} variant="contained" color="secondary">Delete</Button>
                    <Button onClick={()=> dispatch(push(`/${match.params.id}/edit`))} startIcon={<EditIcon />} variant="outlined" color="primary">Edit</Button>
                </CardActions>
            </Card>
        </>
    );
};

export const NoteDetail = withRouter(PureNoteDetail);
