import React from 'react'

class SearchBar extends React.Component {
    state = {searchTerm: ""}

    onSearchSubmit = (e) => {
        e.preventDefault();

        this.props.onSubmit(this.state.searchTerm)
    }

    render(){
        return(
            <div className="container fluid">
                <h3 style={{ textAlign: "center" }} className="mt-5">Press Enter To Search</h3>
                <div className="form-group mt-5">
                    <form onSubmit= { this.onSearchSubmit } >
                        <input 
                            className="form-control"
                            type="text" 
                            value = { this.state.searchTerm }
                            onChange={(e) => this.setState({searchTerm: e.target.value})}
                            placeholder="Search" > 
                        </input>
                    </form>
                
                </div>
            </div>
        )
    }
}

export default SearchBar;