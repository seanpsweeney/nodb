import React, { Component } from 'react';

class Input extends Component {
    constructor() {
        super();
        this.state = {
            statement: '',
        }
    }

    handleChange(e, key) {
        this.setState({
            [key]: e.target.value
        })
    }

    handleSubmit() {
        const {statement} = this.state;
        this.props.addFn({statement});
        this.setState({
            statement: ''
        })
    }

    render() {
        const {statement} = this.state;
        return(
            <div className='input'>
                <textarea onChange={e => this.handleChange(e, 'statement')} value={this.state.statement} placeholder='Enter your note here' type='text' />
                <button onClick={() => this.handleSubmit({statement})}>Save Note</button>
            </div>
        )
    }
}

export default Input;