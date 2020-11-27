import React, {useEffect, useRef, useState} from 'react';
import {UniversalSortTable} from "./UniversalSortTable";
import Grid from "@material-ui/core/Grid";


export function SortTable({data,isLoading}) {

    // создаем пустые массивы для каждого отдела
    let stateAccounting = []
    let stateEconomists = []
    let stateIT = []
    let stateLeadership = []
    let another = []

    //фильтруем общий массив на отделы, чтобы потом передать в каждую таблицу
        data.filter(item => {
            if (item.department === 0) {
                return (stateAccounting.push(item))
            } else if (item.department === 1) {
                return stateEconomists.push(item)
            } else if (item.department === 2) {
                stateIT.push(item)
            } else if (item.department === 3) {
                stateLeadership.push(item)
            } else
                return another.push(item)
        })

    return (
        <Grid container justify='center'>
            <Grid item lg={11} sm={10} xs={12} >
                <UniversalSortTable isLoading={isLoading} data={another} department={'Another'}/>
                <br/>
                <UniversalSortTable isLoading={isLoading} data={stateAccounting} department={'Accounting'}/>
                <br/>
                <UniversalSortTable isLoading={isLoading}  data={stateEconomists} department={'Economists'}/>
                <br/>
                <UniversalSortTable isLoading={isLoading} data={stateIT} department={'IT'}/>
                <br/>
                <UniversalSortTable isLoading={isLoading} data={stateLeadership} department={'Leadership'}/>
                <br/>
            </Grid>
            </Grid>
    )
}








