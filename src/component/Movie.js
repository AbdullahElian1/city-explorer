import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import CardColumns from 'react-bootstrap/CardColumns';

class Movie extends React.Component {
    render() {
        return (
            <div id="movies">
                                <CardColumns>
                {this.props.mpvieList.map((item) => {
                    return (
                        <div>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={item.imagel} />
                    <Card.Body>
                        <Card.Title>{item.title}</Card.Title>
                        <Card.Text>

                        Over View:<br />
                        {item.overview}
                        <br />
                            <br />
                             Date Of Released : 
                            {item.releasedOn}

                        </Card.Text>
                        <Button variant="primary">See The Movie</Button>
                    </Card.Body>
                </Card>


                </div>

                    )
                })}
                </CardColumns>


            </div>
        )
    }
}

export default Movie;

// {this.props.err5 && <p>{item.original} </p>}
//                             {<p>{item.overview}</p>}
//                             {<p>{item.averageVotes}</p>}
//                             {<p>{item.totalVotes} </p>}
//                             {<p>{item.imagel}</p>}
//                             {<p>{item.popularity}</p>}

