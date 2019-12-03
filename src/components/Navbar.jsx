import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { login, logout } from "../redux/Action";

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div >
      <Navbar color="dark" dark expand="lg" className="justify-content-end nav">
        <Link to="/">Home</Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                {
                    props.role //if ini true maka keluar props.username, if ini false, dia nampilin string
                    ?
                    props.username
                    :
                    'Unknown User'
                }
              </DropdownToggle>
              {
                props.role
                ?
                <DropdownMenu right>
                <Link to="/">
                  <DropdownItem onClick={props.logout}>
                    Log Out
                  </DropdownItem>
                </Link>
                <DropdownItem divider />
                <Link to="/register">
                  <DropdownItem>
                    Register
                </DropdownItem>
                </Link>
                <Link to="/belajar">
                  <DropdownItem>
                    Belajar Redux
                </DropdownItem>
                </Link>
              </DropdownMenu>
              :
              <DropdownMenu right>
                <Link to="/login">
                  <DropdownItem>
                    Log In
                  </DropdownItem>
                </Link>
                <DropdownItem divider />
                <Link to="/register">
                  <DropdownItem>
                    Register
                </DropdownItem>
                </Link>
                <Link to="/belajar">
                  <DropdownItem>
                    Belajar Redux
                </DropdownItem>
                </Link>
              </DropdownMenu>
              }
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

const mapStatetoProps = (state) => {
  return {
    username: state.user.username,
    role:state.user.role
  }
}

export default connect(mapStatetoProps, { login, logout })(Header);