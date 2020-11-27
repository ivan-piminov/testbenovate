import React from "react";
import {Header} from "./components/Header/Header";
import {Routes} from "./components/Routes/Routes";
import _ from 'lodash';
import {api} from "./components/api/api";


class App extends React.Component {

    state = {
        data: [],
        sort: '',
        sortField: 'firstName',
        isLoading: true
    }

    // после монтирования компоненты загружаем данные с сервера
    componentDidMount() {
        api.loadStuff()
            .then(newData => this.setState({...this.state, data: newData, isLoading: false}))
    }

    // для сортировки использую библиотеку lodash
    onSort = (sortField) => {
        const cloneData = [...this.state.data];
        const sortType = this.state.sort === 'asc' ? 'desc' : 'asc';
        const orderedData = _.orderBy(cloneData, sortField, sortType);
        this.setState({
            data: orderedData,
            sort: sortType,
            sortField
        })
    }

    // добавление нового пользовтаелся в state
    addNewWorker = (data) => {
        switch (data.newDepartment) {
            case 'Accounting':
                return this.setState({
                    ...this.state,
                    data: [{
                        id: Math.random(),
                        firstName: data.newName,
                        lastName: data.newLastName,
                        department: 0
                    }, ...this.state.data]
                })
            case 'Economists':
                return this.setState({
                    ...this.state,
                    data: [{
                        id: Math.random(),
                        firstName: data.newName,
                        lastName: data.newLastName,
                        department: 1
                    }, ...this.state.data]
                })
            case 'IT':
                return this.setState({
                    ...this.state,
                    data: [{
                        id: Math.random(),
                        firstName: data.newName,
                        lastName: data.newLastName,
                        department: 2
                    }, ...this.state.data]
                })
            case 'Leadership':
                return this.setState({
                    ...this.state,
                    data: [{
                        id: Math.random(),
                        firstName: data.newName,
                        lastName: data.newLastName,
                        department: 3
                    }, ...this.state.data]
                })
            default:
                return this.setState({
                    ...this.state,
                    data: [{
                        id: Math.random(),
                        firstName: data.newName,
                        lastName: data.newLastName,
                        department: data.newDepartment
                    }, ...this.state.data]
                })
        }
    }

    render() {
        return (
                <div className="App">
                    <Header/>
                    <Routes data={this.state.data} isLoading={this.state.isLoading} onSort={this.onSort}
                            sort={this.state.sort} sortField={this.state.sortField} addNewWorker={this.addNewWorker}/>
                </div>
        );
    }
}
export default App;
