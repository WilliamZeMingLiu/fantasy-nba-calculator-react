import './App.css';
import React from 'react';
import GenerateTable from "../GenerateTable/GenerateTable.js";
import Header from '../Header/Header.js';
import history from '../Routes/history.js';
import {Button} from 'react-bootstrap';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Header />
        <main className="container">
          <h1 className="display-4" style={{fontWeight: "300", color:"#337cf7"}}>NBA Fantasy Basketball Calculator</h1>
          <GenerateTable />
        </main>
      </div>
    );
  }
}

export default App;
