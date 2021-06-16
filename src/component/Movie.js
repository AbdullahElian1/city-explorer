import React from 'react'
// import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';
import CardColumns from 'react-bootstrap/CardColumns';
import RendeMovie from './RendeMovie'
class Movie extends React.Component {
    render() {
        return (
            <div id="movies">
                <CardColumns>
                    {this.props.mpvieList.map((item) => {
                        return (
                            
                            <RendeMovie
                                img={item.imagel}
                                title={item.title}
                                overview={item.overview}
                                releasedOn={item.releasedOn}
                                 />


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

