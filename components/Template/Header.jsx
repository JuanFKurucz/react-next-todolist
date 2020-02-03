import React, { useState } from 'react';
import { Navbar, NavbarToggler, NavbarBrand } from 'reactstrap';

const Header = (props) => (
  <Navbar color="dark" dark expand="md">
    <NavbarBrand href="/">To Do List</NavbarBrand>
  </Navbar>
)

export default Header;
