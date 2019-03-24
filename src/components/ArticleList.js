import React from 'react'

const ArticleList = props => {
    const articles = props.articles.map((article, description) => {
        return <div>
            <img src ={ article.urlToImage } alt={description} ></img>    
            <h1>{article.title}</h1>      
            <h1>{article.description}</h1>


        </div>
        
    })
    return(
        <div>{ articles }</div>

    )

}

export default ArticleList;