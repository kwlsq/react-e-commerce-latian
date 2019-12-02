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
import { login,logout } from "../redux/Action";

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
                  props.username
                    ?
                    props.username
                    :
                    'Unknown User'
                }
              </DropdownToggle>
              <DropdownMenu right>
                <Link to="/login">
                  <DropdownItem>
                    Log In
                </DropdownItem>
                </Link>
                <DropdownItem divider />
                <DropdownItem>
                  Register
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

const mapStatetoProps = (state) => {
  return {
      username: state.user.username
  }
}

export default connect(mapStatetoProps, { login, logout })(Header);