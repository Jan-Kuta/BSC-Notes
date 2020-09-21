import React, {FunctionComponent, useState} from 'react';
import Button, {ButtonProps} from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {useTranslation} from 'react-i18next';

type Props = ButtonProps & {
    dialogTitle: string
    dialogDescription: string
    onClick?: () => void
}

export const ButtonWithDialog: FunctionComponent<Props> = ({dialogTitle, dialogDescription, children, onClick, ...buttonProps} :Props) => {
    const [open, setOpen] = useState(false);
    const { t } = useTranslation();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Button onClick={handleClickOpen} {...buttonProps}>{children}</Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{dialogTitle}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {dialogDescription}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        {t('Cancel')}
                    </Button>
                    <Button
                        onClick={(e) => {
                            if (onClick) {
                                onClick(e);
                            }

                            handleClose();
                        }}
                        color="primary"
                    >
                        {t('OK')}
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
};
