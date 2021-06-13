import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Form from './component/Form'
import Alert from 'react-bootstrap/Alert'
import Figure from 'react-bootstrap/Figure'
class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      locData: '',
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
        locData: locResult.data[0],
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

        

        {this.state.displayMap &&<Figure>
          <Figure.Image
            width={400}
            height={500}
            alt="171x180"
            src= {`https://maps.locationiq.com/v3/staticmap?key=pk.b88f218efa97772dabbe983a8f363988&center=${this.state.locData.lat},${this.state.locData.lon}`}  
          />
          <Figure.Caption>
          <Alert variant='info'>
          {this.state.locData && this.state.locData.display_name}
        </Alert>
          </Figure.Caption>
        </Figure>}

        {this.state.displayErr && 'error'}
      </div>
    )
  }
}

export default App
