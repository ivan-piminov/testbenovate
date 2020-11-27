import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {ModalWindow} from "../ModalWindow/ModalWindow";
import Preloader from "../Preloader/Preloader";
import Grid from "@material-ui/core/Grid";

// функция, определяющая назваине отдела на основании входящего номера от 1 до 3
const departmentName = (number) => {
    switch (number) {
        case 0:
            return 'Accounting'
        case 1:
            return 'Economists'
        case 2:
            return 'IT'
        case 3:
            return 'Leadership'
        default:
            return 'Another'
    }
}

const useStyles = makeStyles({
    table: {
        minWidth: 280,
    }
});

// функция по отрисовке общего списка пользователей
export function CommonTable(props) {
    function createData(id, firstName, lastName, department) {
        return {id, firstName, lastName, department};
    }

    const rows = props.data.map(item => {
        return createData(item.id, item.firstName, item.lastName, item.department)
    })

    const classes = useStyles();

// preloader если грузятся данные с сервера
    if (props.isLoading) {
        return <Preloader/>
    }

    return (
        <Grid container justify="center">
            <Grid item lg={11} md={11} sm={12}>
                <ModalWindow addNewWorker={props.addNewWorker}/>
                <TableContainer component={Paper}>
                    <Table className={classes.table} size="small" aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell
                                    onClick={props.onSort.bind(null, "firstName")}>Имя {props.field === "firstName" ?
                                    <small>{props.sort}</small> : null}</TableCell>
                                <TableCell align="center"
                                           onClick={props.onSort.bind(null, "lastName")}>Фамилия {props.field === "lastName" ?
                                    <small>{props.sort}</small> : null}</TableCell>
                                <TableCell align="center">Отдел</TableCell>
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {rows.map((row) => (
                                <TableRow key={row.id + Math.random()}>
                                    <TableCell component="th" scope="row">
                                        {row.firstName}
                                    </TableCell>
                                    <TableCell align="center">{row.lastName}</TableCell>
                                    <TableCell align="center">{departmentName(row.department)}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
        </Grid>
    );
}
