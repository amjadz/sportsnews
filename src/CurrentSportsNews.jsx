import React, { Component } from 'react';


class CurrentSportsNews extends Component{
    render(){
        return(
            <div className="articles">
                <img src={this.props.urlToImage} alt="None"/>
                <h1>{this.props.name}</h1>
                <p>{this.props.description}</p>
                <p>{this.props.url}</p>
            </div>
        )
    }
}

export default CurrentSportsNews;