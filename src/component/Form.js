import React from 'react';
import Button from 'react-bootstrap/Button';


export class Form extends React.Component {


    render() {
        return (
            <div>
                <h1>City Explorer</h1>
                <form onSubmit={this.props.showInfo}>
                    <input type='text' placeholder='city name' name='city' />
                    {/* <input type='submit' value='explore' /> */}
                    <div>
                    <Button type="submit" variant="primary">Primary</Button>{' '}
                    </div>
                </form>
            </div>
        )
    }
}

export default Form
