import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import ServerList from './components/ServerList';
import request from 'superagent';
import 'bootstrap/dist/css/bootstrap.css';
import './css/app.css';
import NavBar from './components/NavBar';


class App extends React.Component {

  constructor(){
    super();
    this.state = {
      servere: []
    };
    
    const url = `serverliste.json`;
    request.get(url, (err, res) => {
      this.setState({ servere: res.body })
    });    
    
    this.handleTermChange = this.handleTermChange.bind(this); 
  }  
  
  
  handleTermChange(term) {
    const url = `serverliste.json`;
    request.get(url, (err, res) => {
      this.setState({ servere: res.body })
    });
  }
  
  
  render() {
    return (
      <div>
        <Header />
        <SearchBar onTermChange={this.handleTermChange} />
        <NavBar/>
        <ServerList servere={this.state.servere} />
      </div>
    );
  }  

}

ReactDOM.render(<App />, document.getElementById('app'));