import React, {useEffect, useRef, useState} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import _ from "lodash";
import Preloader from "../Preloader/Preloader";


export function UniversalSortTable (props) {

    const [state, setState] = useState({
        data: props.data ,
        sort:'',
        sortField: 'firstName'
    })

   // для сортировки использую библиотеку lodash
    const onSort = (sortField) => {
        const cloneData = [...state.data];
        const sortType = state.sort === 'asc' ? 'desc' : 'asc';
        const orderedData = _.orderBy(cloneData, sortField, sortType);
        setState({...state,
            data: orderedData,
            sort: sortType,
            sortField
        })
    }

    useEffect(()=>setState({...state, data: props.data}),[props.data])

    const rows = state.data.map((item => createData(item.id, item.firstName, item.lastName)))
    function createData(id, firstName, lastName) {
        return {id, firstName, lastName};
    }

    const useStyles = makeStyles({
        table: {
            minWidth: 280,
        },
    });
    const classes = useStyles();


    // при отсутствии данных таблица не отражается
    if (props.data.length === 0){
        return null
    }
    // preloader если данные грузятся с сервера
    if (props.isLoading || state.data.length === 0){
        return <Preloader/>
    }

    // таблица сотрудников отдела
    return (
        <TableContainer component={Paper} >
            <Box fontWeight="fontWeightBold" p={2}  align="center" >
                {props.department}
            </Box>
            <Table className={classes.table} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell align="center" onClick={()=>onSort('firstName')} >Имя {state.sortField === 'firstName' ?
                            <small>{state.sort}</small> : null}</TableCell>
                        <TableCell align="center" onClick={()=>onSort('lastName')}>Фамилия {state.sortField === 'lastName' ?
                            <small>{state.sort}</small> : null}</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.id + Math.random()}>
                            <TableCell align="center" component="th" scope="row">
                                {row.firstName}
                            </TableCell>
                            <TableCell align="center">{row.lastName}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}