import React, { Component } from 'react';

class Search extends Component {
    render(){
        return(
            <form onSubmit={(e) => this.handleFormSubmit(e)}>
                <input type="text" id="lookUp" placeholder="Search..." ref="searchBox" />
                <button className="btn btn-primary" type="submit" id="searchButton">Search</button>
            </form>
        )
    }

    handleFormSubmit(e) {
        e.preventDefault();
        var item = this.refs.searchBox.value;
        this.props.handleFormSubmit(item);
    }

}

export default Search;
