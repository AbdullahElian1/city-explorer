import React from 'react'

 class Weather extends React.Component {
    // constructor(props){
    // //     super(props)
    //     this.state={
    //         // wheathe1: {},
    //     }

    // }


    render() {
        return(
            <div>
                {<p>{this.props.test.description} </p>}
                 {<p>{this.props.test.date}</p>}
                
            </div>
        );
    }
      
}
export default Weather;
