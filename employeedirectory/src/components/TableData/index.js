import React, { Component}from 'react';
import TableHeader from '../TableHeader'


class TableData extends Component {
    render() {
        return (
            <div>

                <table className="table">


                    <tbody>


                        {this.props.employees.map((employee) => (
                            // Key 
                            < tr >
                                <th scope="row"></th>

                                <td>
                                    <img
                                        src={employee.picture.medium}
                                        alt='employee'
                                    />
                                </td>


                                <td>{employee.name.first} {employee.name.last}</td>
                                <td>{employee.phone}</td>
                                <td>{employee.email}</td>
                                
                            </tr>

                        ))}


                    </tbody>
                </table>
            </div >


        )
    }

}

export default TableData;