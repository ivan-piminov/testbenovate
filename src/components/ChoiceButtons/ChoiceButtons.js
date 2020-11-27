import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core/styles';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import withStyles from "@material-ui/core/styles/withStyles";
import purple from "@material-ui/core/colors/purple";
import React from "react";
import {Box} from "@material-ui/core";
import {COMMON_TABLE, SORT_TABLE} from "../Routes/Routes";
import {NavLink} from "react-router-dom";
import Grid from "@material-ui/core/Grid";

const ColorButton = withStyles((theme) => ({
    root: {
        color: theme.palette.getContrastText(purple[500]),
        backgroundColor: purple[500],
        '&:hover': {
            backgroundColor: purple[700],
        },
    },
}))(Button);

const useStyles = makeStyles((theme) => ({
    position: {
        textAlign: 'center'
    },
    link: {
        textDecoration: "none",
    }
}));

// компонент с 2 кнопками для выбора варианта загрузки списка пользователей
export const ChoiceButtons = () => {

    const classes = useStyles();

    return (
        <Grid container justify='center'>
            <Grid item lg={8} md={10}>
                <Box boxShadow={3} p={2} m={5} bgcolor='#FFEECC'>
                    <Box p={2} className={classes.position}>
                        Общая таблица с пользователями
                    </Box>
                    <Box className={classes.position}>
                        <NavLink to={COMMON_TABLE} className={classes.link}>
                            <ColorButton variant="contained"
                                         startIcon={<CloudUploadIcon/>}
                                         color="primary" size="large"
                                         className={classes.margin}
                            >
                                Показать
                            </ColorButton>
                        </NavLink>
                    </Box>
                </Box>
            </Grid>

            <Grid item lg={8} md={10}>
                <Box boxShadow={3} m={5} p={2} bgcolor='#FFEECC'>
                    <Box p={2} className={classes.position}>
                        Таблица с сортировкой по группам
                    </Box>
                    <Box className={classes.position}>
                        <NavLink to={SORT_TABLE} className={classes.link}>
                            <ColorButton variant="contained"
                                         startIcon={<CloudUploadIcon/>}
                                         color="primary" size="large"
                                         className={classes.margin}>
                                Показать
                            </ColorButton>
                        </NavLink>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    );
}