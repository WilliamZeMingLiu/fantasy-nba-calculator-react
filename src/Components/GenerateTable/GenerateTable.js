import './GenerateTable.css';
import React from 'react';
import Header from '../Header/Header.js';
import Table from './Table.js';
import { Nav, NavDropdown, Form, Row, Col, Button } from 'react-bootstrap';
import { TextField } from '@material-ui/core';

class GenerateTable extends React.Component{
	constructor(props){
		super(props);
		this.state = {
      season: "",
      players: [],
      categories: ['GP','GS','MP','FGM','FGA','FTM','FTA','3PM','3PA','ORB','DRB','TRB','AST','STL','BLK','TOV','PF','PTS'],
      categoryValues:[0,0,0,2,-1,1,-1,1,0,0,0,1,2,4,4,-2,0,1]
    };
	}

	callAPI(urlPath) {
    fetch(urlPath)
      .then(res => res.json())
      .then(res => this.setState({players: res}))
      .catch(err => console.log(err));
  }

  componentWillMount() {
    let url = "http://localhost:9000/";
    var seasonYear = "2019_2020_Season_Totals";
    this.setState({season: seasonYear});
    this.callAPI(url + seasonYear);
  }

  dropdownCall(seasonYear) {
    let url = "http://localhost:9000/";
    this.setState({season: seasonYear});
    this.callAPI(url + seasonYear);
  }

  showTextfield() {
    var textfield = document.getElementById("textfield");
    if(textfield.style.display = "none"){
      textfield.style.display = "block";
    }
  }

  textfieldCall(e) {
    const index = e.target.id;
    const newValue = e.target.value;
    var newArray = this.state.categoryValues.slice();
    newArray[index] = Number(newValue);
    console.log(newArray);
    //newArray.push.apply(this.state.categoryValues.slice(index+1, this.state.categoryValues.length));
    this.setState({categoryValues: newArray});
    
  }

  addSpaces(string) {
    string = string.replace('_', '-');
    return string.split('_').join(' ');
  }

	render(){
    var counter = -1;
		return(
      <div>
        <div className="GenerateTable">
          <div className="menu-select">
            <Nav variant="pills" className="justify-content-center" style={{marginBottom: "20px"}}>
              <Nav.Item>
                <Nav.Link onClick={() => this.dropdownCall(this.state.season.substring(0,17) + "Totals")} eventKey={this.state.season.substring(0,9)} active={this.state.season.substring(17) === "Totals"}>Total</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link onClick={() => this.dropdownCall(this.state.season.substring(0,17) + "Per_Game")} eventKey={this.state.season.substring(0,9)} active={this.state.season.substring(17) === "Per_Game"}>Per Game</Nav.Link>
              </Nav.Item>              
              <NavDropdown title="Season" id="nav-dropdown">
                <NavDropdown.Item onSelect={() => this.dropdownCall("2019_2020_Season_Totals")} eventKey={"2019_2020"} active={this.state.season.substring(0,9) === "2019_2020"}>2019-2020</NavDropdown.Item>
                <NavDropdown.Item onSelect={() => this.dropdownCall("2018_2019_Season_Totals")} eventKey={"2018_2019"}>2018-2019</NavDropdown.Item>
                <NavDropdown.Item onSelect={() => this.dropdownCall("2017_2018_Season_Totals")} eventKey={"2017_2018"}>2017-2018</NavDropdown.Item>
                <NavDropdown.Item onSelect={() => this.dropdownCall("2016_2017_Season_Totals")} eventKey={"2016_2017"}>2016-2017</NavDropdown.Item>
                <NavDropdown.Item onSelect={() => this.dropdownCall("2015_2016_Season_Totals")} eventKey={"2015_2016"}>2015-2016</NavDropdown.Item>
              </NavDropdown>
              <Button variant="outline-dark"onClick={() => this.showTextfield()}>Fantasy Scoring</Button>
            </Nav>
            <form style={{display: "none", marginBottom: "10px"}} noValidate autoComplete="off" className="textfield" id="textfield">
              {
                this.state.categories.map(category => {
                  counter++;
                  return <TextField id={counter} label={category} type="number" placeholder={this.state.categoryValues[counter]} onChange={this.textfieldCall.bind(this)} style={{margin:"5px", width: "50px"}}
                          InputLabelProps={{shrink: true,}}/>
                  
                })
              }
              <br></br>
            </form>
          </div>
          <Table data={this.state.players} season={this.addSpaces(this.state.season)} categories={this.state.categories} categoryValues={this.state.categoryValues}/>
        </div>
      </div>
		)
	}
}

export default GenerateTable; 