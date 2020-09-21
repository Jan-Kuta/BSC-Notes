import React, {useState} from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';import makeStyles from "@material-ui/core/styles/makeStyles";
import i18next from 'i18next';
import {useTranslation} from 'react-i18next';

const useStyles = makeStyles(() => ({
    root: {
        marginTop: '10px',
        width: '300px',
        position: 'absolute',
        top: '0'
    }
}));

export const LangSwitcher = () => {
    const [lang, setLang] = useState('en');
    const { t } = useTranslation();
    const classes = useStyles();

    return (
        <FormControl variant="outlined" className={classes.root}>
            <InputLabel id="demo-simple-select-outlined-label">{t('Language')}</InputLabel>
            <Select
                value={lang}
                onChange={(e) => {
                    const lang = e.target.value as string;
                    setLang(lang);
                    i18next.changeLanguage(lang);
                }}
                label="Lang"
            >
                <MenuItem value="en">English</MenuItem>
                <MenuItem value="cs">Česky</MenuItem>
            </Select>
        </FormControl>
    );
};
