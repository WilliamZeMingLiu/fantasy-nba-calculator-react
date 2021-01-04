import React from 'react';
import history from './history';
import { Router, Link, Route, Switch } from "react-router-dom";
import App from '../App/App.js'
import GenerateTable from '../GenerateTable/GenerateTable.js'

class Routes extends React.Component{
	render(){
		return(
      <Router history={history}>
          <Switch>
              <Route exact path="/" component={App} />
          </Switch>
      </Router>
		)
	}
}

export default Routes; 