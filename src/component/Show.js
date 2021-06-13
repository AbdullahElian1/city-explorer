import React from 'react';


export class Show extends React.Component {


    render() {
        return (
            <div>
                 <p>abod</p>
                <p>{this.props.display_name}</p>
                {this.props.err && 'error'}
                {this.props.Map && <img src={`https://maps.locationiq.com/v3/staticmap?key=pk.b88f218efa97772dabbe983a8f363988&center=${this.props.lat},${this.props.lon}`} alt='map' />}
            </div>
        )
    }
}

export default Show;
