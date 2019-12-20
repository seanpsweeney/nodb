import React, {Component} from 'react';
import axios from 'axios';
import './App.css';
import Header from './components/Header/Header';
import Input from './components/Input/Input';
import Inbox from './components/Inbox/Inbox';
import Intro from './components/Intro/Intro';

class App extends Component {
  constructor() {
    super();
    this.state = {
      list: []
    }
    this.addStatement = this.addStatement.bind(this)
    this.updateStatement = this.updateStatement.bind(this)
    this.deleteStatement = this.deleteStatement.bind(this)
  }

  componentDidMount() { 
    axios
      .get('/api/list')
      .then(res => {
        this.setState({ list: res.data })
      .catch(err => console.log(err)) 
    });
  }

  addStatement(newStatement) {
    axios
      .post('/api/list', {newStatement})
      .then(res => {
        this.setState({ list: res.data })
      .catch(err => console.log(err)) 
    });
  }

  updateStatement(updatedInfo, id) {
    axios
      .put(`/api/list/${id}`, {updatedInfo})
      .then(res => {
        this.setState({ list: res.data })
      .catch(err => console.log(err)) 
    });
  }

  deleteStatement(id) {
    axios
    .delete(`/api/list/${id}`, {id})
    .then( res => {
      this.setState({ list: res.data })
    .catch(err => console.log(err)) 
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Intro />
        <Input addFn={this.addStatement}/>
        <Inbox updateFn={this.updateStatement} data={this.state.list}
        deleteStatement={this.deleteStatement} />
      </div>
    );
  }
}

export default App;
