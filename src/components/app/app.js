import {Component} from "react";

import AppInfo from '../app-info/app-info'
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployersList from "../employers-list/employers-list";
import EmployersAddForm from "../employers-add-form/employers-add-form";

import './app.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: "John C.", salary: 1000, increase: false, id: 1},
                {name: "Alex W.", salary: 3000, increase: true, id: 2},
                {name: "Carl M.", salary: 5000, increase: false, id: 3}
            ]
        }
        this.maxId = 4;
    }



    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(elem => elem.id !== id)
            }
        })
    }

    addItem = (e, name, salary) => {
        e.preventDefault();
        const newItem = {
            name,
            salary,
            id: this.maxId++
        }
        this.setState(() => {
            return ({
                data: [...this.state.data, newItem]
            });
        })
    }

    render() {
        return (
            <div className="app">
                <AppInfo/>
                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>
                <EmployersList data={this.state.data} onDelete={this.deleteItem}/>
                <EmployersAddForm onSubmitAdd={this.addItem}/>
            </div>
        );
    }
}

export default App;