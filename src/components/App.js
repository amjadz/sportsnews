import React from 'react'
import axios from 'axios'
import SearchBar from './SearchBar'

class App extends React.Component {
    onSearchSubmit(searchTerm){
        axios.get('https://newsapi.org/v2/top-headlines', {
            params:{ searchTerm },
            headers:{
                Authorization: "Client-ID 973163c29a164868b20716a8d64a5851"
            }


        })
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