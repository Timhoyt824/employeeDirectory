import React, { Component} from 'react';

class TableHeader extends Component {

    render() {
        return (
            <div>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th scope="col">Image</th>


                            <th scope="col"

                                onClick={this.props.SortByName}
                            >
                                Name

                             </th>
                            <th scope="col">Phone</th>
                            <th scope="col">Email</th>
                            <th scope="col">DOB</th>
                        </tr>
                    </thead>

                </table>
            </div>
        )
    }
    
}

export default TableHeader;