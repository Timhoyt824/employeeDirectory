import React from 'react';

export default class Header extends React.Component {
    render() {
        return (
            <div>
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h1 className="text-center text-white">Employee Directory</h1>
                        <p className="lead text-center text-white">Click on arrrows to filter by selection or use the search box.</p>
                    </div>
                </div>
            </div>
        )
    }
}