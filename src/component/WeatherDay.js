import React, { Component } from 'react'
import ListGroup from 'react-bootstrap/ListGroup';

export class WeatherDay extends Component {

    render() {
        return (
          
            <aside>
                { this.props.err && <ListGroup.Item>{this.props.cityName} Weather</ListGroup.Item> }
                    {this.props.WeatherInfo.map((item) => {
                        return (
                            <div>
                                
                                <ListGroup>
                                    <ListGroup.Item variant="dark">📆{item.date} <br /> 🌧️ {item.description}</ListGroup.Item>
                                </ListGroup>
                            </div>
                        )
                    })}


                </aside>
              






        
        )
    }
}

export default WeatherDay;