import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Form1 from './component/Form1'
import Show from './component/Show'
import Weather from './component/Weather';
import Movie from './component/Movie';
import Accordion from 'react-bootstrap/Accordion'



class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      locData: '',
      cityInfo: {},
      wheathr: [],
      displayErr: false,
      displayMap: false,
      movies: [],
      err: false,
      cityNameState:''
    }
  }



  explore = async (event) => {
    event.preventDefault();
    try {
      let cityName = event.target.city.value;
      console.log(cityName);
      let url = `https://us1.locationiq.com/v1/search.php?key=pk.b88f218efa97772dabbe983a8f363988&q=${cityName}&format=json`;
      let locResult = await axios.get(url);
      let serverUrl = process.env.REACT_APP_SERVER;
      let weatherUrl = `${serverUrl}/getNames?cityLan=${locResult.data[0].lat}&cityLon=${locResult.data[0].lon}`;
      let weatherResult = await axios.get(weatherUrl);
      console.log(locResult.data);
      let movieUrl = `${serverUrl}/movies?cityName=${cityName}`;
      //http://localhost:3010/movies?cityName=amman
      //${serverUrl}/movies?cityName=
      let movieResult = await axios.get(movieUrl);
      console.log(movieResult);
      this.setState({
        cityInfo: locResult.data[0],
        wheathr: weatherResult.data,
        displayMap: true,
        movies: movieResult.data,
        err: true,
        cityNameState:cityName
      })
      console.log(this.state.movies);


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
       
  
          
        
        <Form1 showInfo={this.explore} />
        <Show map={this.state.displayMap} info={this.state.cityInfo} err={this.state.displayErr} />

        <Weather test={this.state.wheathr} err1={this.state.err} cityName={this.state.cityNameState} />

        <Movie mpvieList={this.state.movies} err5={this.state.err} />

      </div>
    )
  }
}

export default App
