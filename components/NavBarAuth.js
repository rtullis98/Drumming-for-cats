/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import {
  Navbar, Container, Nav, Button,
} from 'react-bootstrap';
import { signOut } from '../utils/auth';

export default function NavBarAuth() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Link passHref href="/">
          <Navbar.Brand>Drumming for Cats</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* CLOSE NAVBAR ON LINK SELECTION: https://stackoverflow.com/questions/72813635/collapse-on-select-react-bootstrap-navbar-with-nextjs-not-working */}
            <Link passHref href="/">
              <Nav.Link>Cats</Nav.Link>
            </Link>
            <Link passHref href="/appointments">
              <Nav.Link>Appointments</Nav.Link>
            </Link>
            <Link passHref href="/teacher">
              <Nav.Link>Teacher Cats</Nav.Link>
            </Link>
            <Link passHref href="/appointment/new">
              <Nav.Link>Create Apppointment</Nav.Link>
            </Link>
            <Link passHref href="/cat/new">
              <Nav.Link>Create Cat</Nav.Link>
            </Link>
            <Button variant="danger" onClick={signOut}>Sign Out</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
