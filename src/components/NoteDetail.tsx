import React from 'react';
import {useRouteMatch} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import GoBackIcon from '@material-ui/icons/ArrowBack';
import EditIcon from '@material-ui/icons/Edit';
import Typography from '@material-ui/core/Typography';
import {useDispatch, useSelector} from 'react-redux';
import {goBack, push} from 'redux-first-history';
import {RootState} from '../redux/rootReducer';
import makeStyles from '@material-ui/core/styles/makeStyles';
import styled from 'styled-components';
import {ButtonWithDialog} from "./ButtonWithDialog";
import {deleteNote} from "../redux/notes/notes.actions";
import {useTranslation} from 'react-i18next';

type MatchParams = {
    id: string
}

const SpaceBetweeenWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%
`;

const FlexWrapper = styled.div`
    display: flex;
    width: 100%
`;

const FlexGrow1 = styled.div`
    flex: 1;
`;

const FlexGrow3 = styled.div`
    flex: 3;
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
}));

export const NoteDetail = () => {
    const dispatch = useDispatch();
    const match = useRouteMatch<MatchParams>();
    const note = useSelector((state: RootState) => state.notes.data.find((note) => note.id.toString() === match.params.id));
    const classes = useStyles();
    const { t } = useTranslation();

    if (! note) {
        return null;
    }

    return (
        <div>
            <Card className={classes.root}>
                <CardHeader
                    action={
                        <IconButton className={classes.backButton} onClick={() => dispatch(goBack('/'))} aria-label="settings">
                            <GoBackIcon/>
                        </IconButton>
                    }
                    title={t('Note detail')}
                    className={classes.header}
                />
                <CardContent>
                    <FlexWrapper>
                        <FlexGrow1>
                            <Typography variant="body1" gutterBottom>Id:</Typography>
                        </FlexGrow1>
                        <FlexGrow3>
                            <Typography variant="body1" gutterBottom>{note.id}</Typography>
                        </FlexGrow3>
                    </FlexWrapper>
                    <FlexWrapper>
                        <FlexGrow1>
                            <Typography variant="body1" gutterBottom>{t('Title')}:</Typography>
                        </FlexGrow1>
                        <FlexGrow3>
                            <Typography variant="body1" gutterBottom>{note.title}</Typography>
                        </FlexGrow3>
                    </FlexWrapper>
                </CardContent>
                <CardActions>
                    <SpaceBetweeenWrapper>
                        <ButtonWithDialog
                            dialogTitle={t("Dialog title")}
                            dialogDescription={t("Dialog description")}
                            onClick={() => {dispatch(deleteNote(parseInt(match.params.id)))}}
                            startIcon={<DeleteIcon />}
                            variant="contained"
                            color="secondary"
                        >
                            {t('Delete')}
                        </ButtonWithDialog>
                        <Button onClick={()=> dispatch(push(`/${match.params.id}/edit`))} startIcon={<EditIcon />} variant="outlined" color="primary">{t('Edit')}</Button>
                    </SpaceBetweeenWrapper>
                </CardActions>
            </Card>
        </div>
    );
};
