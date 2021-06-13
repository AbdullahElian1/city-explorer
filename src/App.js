import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Form from './component/Form'
import Show from './component/Show'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      locData: '',
      cityInfo:{},
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
      console.log(locResult.data[0]);
      this.setState({
        cityInfo: locResult.data[0],
        displayMap: true
      })
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

      </div>
    )
  }
}

export default App
