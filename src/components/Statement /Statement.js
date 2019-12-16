import React, { Component } from 'react';

class Statement extends Component {
    constructor() {
        super()
        this.state = {
            isEditable: false, 
            statement: '',
            done: false
        }
    }

    componentDidMount() {
        this.setState({
            statement: this.props.data.statement,
            quantity: this.props.data.done 
        })
    }

    toggleEdit() {
        this.setState({
            isEditable: !this.state.isEditable
        })
    }

    handleChange(e, key) {
        this.setState({
            [key]: e.target.value
        })
    }

    store() {
        this.props.updateFn();
        this.toggleEdit();
    }

    render() {
        return(
            <div className='statement'>
                {this.state.isEditable ? (
                    <div>
                        <textarea onChange={e => this.handleChange(e, 'statement')} value={this.state.statement} />
                        <button onClick={() => this.store()}>Save</button>
                    </div>
                ) : (
                    <div>
                        <h2>{this.state.statement}</h2>
                        <button onClick={() => this.props.deleteStatement(this.props.data.id)}>Delete</button>
                        <button onClick={() => this.toggleEdit()}>Edit</button>
                    </div>
                )}
            </div>
        )
    }
}

export default Statement;