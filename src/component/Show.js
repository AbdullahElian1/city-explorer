import React from 'react';
import Alert from 'react-bootstrap/Alert'
import Figure from 'react-bootstrap/Figure'


export class Show extends React.Component {


    render() {
        return (
            <div>
                {/* <p>abod</p>
                <p>{this.props.display_name}</p>
                {this.props.err && 'error'}
                {this.props.Map && <img src={`https://maps.locationiq.com/v3/staticmap?key=pk.b88f218efa97772dabbe983a8f363988&center=${this.props.lat},${this.props.lon}`} alt='map' />} */}

                {this.props.map &&
                    <Figure>
                        <Figure.Image
                            width={400}
                            height={500}
                            alt="171x180"
                            src={`https://maps.locationiq.com/v3/staticmap?key=pk.b88f218efa97772dabbe983a8f363988&center=${this.props.info.lat},${this.props.info.lon}`}
                        />
                        <Figure.Caption>
                            <Alert variant='info'>
                               { this.props.info.display_name}
                            </Alert>
                        </Figure.Caption>
                    </Figure>}

                {this.props.err && 'error'}
            </div>
        )
    }
}

export default Show;
