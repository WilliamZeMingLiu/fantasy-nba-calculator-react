import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

class Header extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div style={{marginBottom:"20px"}}>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">NBA Fantasy Basketball Calculator</Navbar.Brand>
          <Nav className="mr-auto">
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default Header;