import React from "react";
import {MAIN, TABLES} from "../Routes/Routes";
import {NavLink} from "react-router-dom";
import Button from '@material-ui/core/Button';
import Box from "@material-ui/core/Box";
import {makeStyles} from "@material-ui/core/styles";

// "шапка" приложения с 2 кнопками навигации
export function Header() {
    const useStyles = makeStyles({
        header: {
            textDecoration: "none"
        }
    });

    const classes = useStyles();

    return (
        <div>
            <Box display="flex" p={2} bgcolor="#4791db" justifyContent="space-around">
                <NavLink to={MAIN} className={classes.header}> <Button variant="contained"> Главная </Button></NavLink>
                <NavLink to={TABLES} className={classes.header}><Button variant="contained"> Таблицы </Button></NavLink>
            </Box>
        </div>
    );
}