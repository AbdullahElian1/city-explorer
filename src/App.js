import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Form from './component/Form'
import Show from './component/Show'
import Weather from './component/Weather';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      locData: '',
      cityInfo:{},
      wheathr:{},
      displayErr: false,
      displayMap: false,
    }
  }



  explore = async (event) => {
    try {
      event.preventDefault();
      let cityName = event.target.city.value;
      console.log(cityName);
      let url = `https://us1.locationiq.com/v1/search.php?key=pk.b88f218efa97772dabbe983a8f363988&q=${cityName}&format=json`;
      let locResult = await axios.get(url);
      let serverUrl=process.env.REACT_APP_SERVER;
      let weatherUrl=`${serverUrl}/getNames?cityLan=${locResult.data[0].lat}&cityLon=${locResult.data[0].lon}`;
      let weatherResult= await axios.get(weatherUrl);
      console.log(weatherResult.data);
      console.log(locResult.data[0].lat);
      console.log(locResult.data[0].lon);

      this.setState({
        cityInfo: locResult.data[0],
        wheathr: weatherResult.data,
        displayMap: true
      })
      console.log(this.state.wheathr);

      
    }

    catch {

      this.setState({
        displayErr: true,

      })

    }


  }


  render() {
    return (
      <div>
        <Form showInfo={this.explore} />
        <Show map={this.state.displayMap} info={this.state.cityInfo} err={this.state.displayErr}  />

        <Weather test={this.state.wheathr}/>

      </div>
    )
  }
}

export default App
