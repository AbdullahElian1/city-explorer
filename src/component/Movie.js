import React from 'react'

class Movie extends React.Component {
    render() {
        return (
            <div>
                {this.props.mpvieList.map((item) => {
                    return (
                        <div>
                            {this.props.err5 && <p>{item.original} </p>}
                            {<p>{item.overview}</p>}
                            {<p>{item.averageVotes}</p>}
                            {<p>{item.totalVotes} </p>}
                            {<p>{item.imagel}</p>}
                            {<p>{item.popularity}</p>}
                        </div>

                    )
                })}


            </div>
        )
    }
}

export default Movie
