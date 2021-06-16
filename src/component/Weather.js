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
            <aside>
                {this.props.test.map((item)=>{
                    return(
                        <div>
                            {<p>{item.description} </p>}
                             {<p>{ item.date}</p>}
                            </div>
                    )
                })}
                
                
            </aside>
        );
    }
      
}
export default Weather;
