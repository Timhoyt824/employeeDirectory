import React, {Component} from 'react';


class Search extends Component {


    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit}>
                    <input
                        name="search"
                        value={this.props.search}
                        onChange={this.props.handleInputChange}>

                    </input>

                    <button>

                        Search
                    </button>
                </form>
            </div>
        )
    };
}

export default Search;