import React from 'react'
import news from '../api/news'
import SearchBar from './SearchBar'
import ArticleList from './ArticleList';

class App extends React.Component {
    
     state = { articles: [] }   
     onSearchSubmit = async (q) => {
        const response = await news.get('everything', {
            params:{ q }
        });


        this.setState({ articles: response.data.articles })
    }

    render(){
        return(
            <div>
                <SearchBar
                    onSubmit= { this.onSearchSubmit }
                />

                <ArticleList 
                    articles = { this.state.articles }
                />

            </div>
        )
    }
}

export default App;