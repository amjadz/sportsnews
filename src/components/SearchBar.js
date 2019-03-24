import React from 'react'

class SearchBar extends React.Component {
    state = {searchTerm: ""}

    onSearchSubmit = (e) => {
        e.preventDefault();

        this.props.onSubmit(this.state.searchTerm)
    }

    render(){
        return(
            <div>
                <form onSubmit= { this.onSearchSubmit } >
                    <input 
                        type="text" 
                        value = { this.state.searchTerm }
                        onChange={(e) => this.setState({searchTerm: e.target.value})}
                        placeholder="Search" > 
                    </input>
                </form>
            </div>
        )
    }
}

export default SearchBar;