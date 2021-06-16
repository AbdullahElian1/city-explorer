import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'


export class Form1 extends React.Component {

    
    render() {
        return (
            <div >
                <h1 className='container'>City Explorer</h1>
                <Form onSubmit={this.props.showInfo}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>City Name</Form.Label>
                        <Form.Control type="text" placeholder="Amman" name='city' size="lg" />
                    </Form.Group>
                    <div>
                        <Button type="submit" variant="primary">Search</Button>{' '}
                    </div>
                </Form>
            </div>
        )
    }
}

export default Form1;

                // <form onSubmit={this.props.showInfo}>
                //     <input type='text' placeholder='city name' name='city' />
                //     {/* <input type='submit' value='explore' /> */}
                //     <div>
                //     <Button type="submit" variant="primary">Primary</Button>{' '}
                //     </div>
                // </form>