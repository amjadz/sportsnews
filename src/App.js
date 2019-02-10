import React, { Component } from 'react';
import Search from './Search';
import CurrentSportsNews from './CurrentSportsNews';

import './App.css';

var key = '973163c29a164868b20716a8d64a5851';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
        articles: []
    };
}

handleFormSubmit(item) {
    var url = 'https://newsapi.org/v2/everything?q=' + item +'&from=2019-01-10&sortBy=publishedAt&apiKey=' + key;
  
    fetch(url)
    .then((response) => {
        console.log(response);
        return response.json();

    })
    .then((json) => {
      console.log(json)
        this.setState({

            name: json.articles[2].author,
            title: json.articles[2].title, 
            description: json.articles[2].description,
            url: json.articles[2].url
        });
    })
    .catch((error) => {
      window.alert("Please enter a vaild article!");
      this.setState({
          name: null,
          title: null,
          desc: null,
          url: null,
      });
  });
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
            <h1>Welcome!</h1>
            <Search 
                handleFormSubmit={(item) => {
                this.handleFormSubmit(item); 
                }}/>

            <CurrentSportsNews
                name={this.state.name}
                title = {this.state.title}
                description= {this.state.description}
                url={this.state.url}
            />
                

        </header>
      </div>
    );
  }
}



export default App;
