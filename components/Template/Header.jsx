import React, { useState } from 'react';
import { Navbar, NavbarToggler, NavbarBrand } from 'reactstrap';

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/">To Do List</NavbarBrand>
        <NavbarToggler onClick={toggle} />
      </Navbar>
    </>
  );
}

export default Header;
