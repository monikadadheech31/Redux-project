import React from 'react';
import { useSelector } from 'react-redux';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBBtn
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

export default function Navbar() {
  // Ensure cart is an array to prevent length errors
  // const cart = useSelector((state) => state.allCart?.cart || []);
   const { cart } = useSelector((state) => (state.allcard))

  return (
    <MDBNavbar light bgColor='light' id="navbar">
      <MDBContainer fluid>
        <MDBNavbarBrand>Monika</MDBNavbarBrand>

        <MDBBtn color='primary' rippleColor='dark' id="button">
          <Link to="/" style={{ color: "black", textDecoration: "none" }}>All Products</Link>
        </MDBBtn>

        <MDBBtn color='dark'>
          <Link to="/cartpage" style={{ color: "white", textDecoration: "none" }}>
          <i class="bi bi-cart-fill"></i> ({cart.length })
          </Link>
        </MDBBtn>
      </MDBContainer>
    </MDBNavbar>
  );
}
