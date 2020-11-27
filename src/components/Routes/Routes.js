import React from 'react';
import {Redirect, Route} from "react-router-dom";
import {StartPage} from "../StartPage/StartPage";
import {CommonTable} from "../CommonTable/CommonTable";
import {ChoiceButtons} from "../ChoiceButtons/ChoiceButtons";
import {SortTable} from "../SortTable/SortTable";


export const MAIN = '/main'
export const TABLES = '/tables'
export const COMMON_TABLE = '/common_table'
export const SORT_TABLE = '/sort_table'


export const Routes = (props) => {
    return (
        <div>
            <Route exact path='/' render={() => <Redirect to={MAIN}/>}/>
            <Route path={MAIN} render={() => <StartPage isLoading={props.isLoading}/>}/>
            <Route path={TABLES} render={() => <ChoiceButtons/>}/>
            <Route path={COMMON_TABLE} render={() => <CommonTable isLoading={props.isLoading} data = {props.data} onSort = {props.onSort} sort = {props.sort} field = {props.sortField} addNewWorker={props.addNewWorker} />}/>
            <Route path={SORT_TABLE} render={() => <SortTable isLoading={props.isLoading}  data = {props.data}/>}/>
        </div>
    )
}
