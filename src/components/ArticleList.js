import React from 'react'

const ArticleList = props => {
    const articles = props.articles.map((article, description) => {
        return <div className = "card">
                <img src ={ article.urlToImage } alt={description} ></img>    
            <div className="card-body">
                <h5 className="card-title">{article.title}</h5>      
                <p className="card-text">{article.description}</p>
                <a href={ article.url } class="btn btn-primary">Link to the Article</a>
            </div>
        </div>
        
    })
    return(
        <div>{ articles }</div>
    )

}

export default ArticleList;