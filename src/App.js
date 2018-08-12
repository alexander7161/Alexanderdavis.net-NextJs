import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button,
  Collapse,
  Navbar,
 NavbarToggler,
 NavbarBrand,
 Nav,
 NavItem,
 NavLink,
 Dropdown,
 DropdownToggle,
 DropdownMenu} from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar color="dark">
        <Nav>
          hi
          </Nav>
        </Navbar>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
