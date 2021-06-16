import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion'

export class RendeMovie extends Component {
    render() {
        return (
            <div>
                 <div>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={this.props.img} />
                        <Card.Body>
                            <Card.Title>{this.props.title}</Card.Title>
                            <Card.Text>
                                <br />
                                {this.props.overview}
                                <br />
                                <br />
                                Date Of Released :
                                {this.props.releasedOn}

                            </Card.Text>
                            <Button variant="primary">See The Movie</Button>
                        </Card.Body>
                    </Card>


                </div>
                                 


            </div>
        )
    }
}

export default RendeMovie


