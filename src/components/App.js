import React from 'react'
import SearchBar from './SearchBar'

class App extends React.Component {
    onSearchSubmit(searchTerm){
        console.log(searchTerm)

    }

    render(){
        return(
            <div>
                <SearchBar
                    onSubmit= { this.onSearchSubmit }
                />

            </div>
        )
    }
}

export default App;