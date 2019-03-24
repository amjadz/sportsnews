import React from 'react'
import '../css/articlelist.css'

const ArticleList = props => {
    const articles = props.articles.map((article, description) => {
        return <div className = "container fluid">
                <div className="card mt-5">
                    <img src ={ article.urlToImage } alt={description} ></img>    
                    <div className="card-body">
                        <h5 className="card-title">{article.title}</h5>      
                        <p className="card-text">{article.description}</p>
                        <a href={ article.url } className="btn btn-primary">Link to the Article</a>
                    </div>
                </div>
            </div>
        
        
    })
    return(
        <div>{ articles }</div>
    )

}

export default ArticleList;