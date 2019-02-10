import React, { Component } from 'react';


class CurrentSportsNews extends Component{
    render(){
        return(
            <div className="articles">
                <h1>{this.props.name}</h1>
                <h1>{this.props.description}</h1>
                <h1>{this.props.url}</h1>
            </div>
        )
    }
}

export default CurrentSportsNews;