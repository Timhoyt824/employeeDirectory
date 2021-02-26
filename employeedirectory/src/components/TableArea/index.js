import React, {Component} from 'react';
import TableData from '../TableData';
import Search from '../Search';
import Header from '../Header';
import TableHeader from '../TableHeader';
import API from "../../utils/API";


class TableArea extends Component {
    state= {
        search: "name",
        employees: []
    };
    
    componentDidMount() {
        this.loadEmployees();
    }

    handleInputChange(event){
        const { name, value } = event.target;
        this.setState(
            {
                [name]: value
            }
        )
    }

    loadEmployees() {
        API.getEmployees()
            .then((response) => {
                this.setState(
                    {
                        employees: response.data.results
                    }
                )

            })
            .catch((err) => {
                console.log(err);
            })
        }

    
    searchEmployee() {
        API.getEmployees()
            .then((response) => {

                let filter = this.state.search;
                let filteredList = response.data.results.filter(item => { 
                    let values = Object.values(item.name.first)
                        .join("")
                        .toLowerCase();
                    return values.indexOf(filter.toLowerCase()) !== -1;
                });
                this.setState(
                    {
                        employees: filteredList
                    }
                )

            })
            .catch((err) => {
                console.log(err);
            })
        }




    handleInputSubmit (event) {
        event.preventDefault();
        this.searchEmployee();

    }

    
    SortByName  (e) {
        function handleClick(e) {
            e.preventDefault();
        }
    }

    
    render() {
        return (
            <div className="wrapper" >

                <Header />

                <Search
                    search={this.state.search}
                    handleInputChange={this.handleInputChange}
                    handleSubmit={this.handleInputSubmit}
                />

                <TableHeader SortByName={this.SortByName} />
                <TableData
                    employees={this.state.results}
                />

            </div>
        );
    }

}

export default TableArea

