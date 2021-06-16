import React from 'react'
import WeatherDay from './WeatherDay';

 class Weather extends React.Component {
    // constructor(props){
    // //     super(props)
    //     this.state={
    //         // wheathe1: {},
    //     }

    // }


    render() {
        return(
            <div className="aside">
                <WeatherDay cityName={this.props.cityName} 
                WeatherInfo={this.props.test}
                err={this.props.err1}
                />
            </div>
            
        );
    }
      
}
export default Weather;
