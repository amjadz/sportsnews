import React, { Component } from 'react';
import { Col, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';


class CurrentSportsNews extends Component{
    render(){
        return(
            <div className="articles">
                <Col sm = "6">
                <Card>
                    <CardImg  src={this.props.urlToImage} alt="Card image cap" />
                    <CardBody>
                    <CardTitle>{this.props.name}</CardTitle>
                    <CardSubtitle>Card subtitle</CardSubtitle>
                    <CardText>{this.props.description}</CardText>
                    <Button>{this.props.url}</Button>
                    </CardBody>
                </Card>
                
                </Col> 
            </div>
        )
    }
}

export default CurrentSportsNews;