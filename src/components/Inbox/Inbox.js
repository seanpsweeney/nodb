import React, { Component } from 'react';
import Statement from '../Statement /Statement';

class Inbox extends Component {
    render(){
        return(
            <div className='inbox'>
                <h2>Notes</h2>
                {this.props.data.map(statementObj => (
                    <Statement updateFn={this.props.updateFn} deleteStatement={this.props.deleteStatement} key={statementObj.id} data={statementObj} />
                ))}
            </div>
        )
    }
}

export default Inbox;