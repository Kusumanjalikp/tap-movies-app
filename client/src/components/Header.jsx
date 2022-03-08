import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <Navbar bg="info" expand="lg" variant='dark'>
            <Container>
                <Link to="/" className='navbar-brand'>MOVIES APP</Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link to="/" className="nav-link">HOME</Link>
                        <Link to="/add-movie" className="nav-link">ADD MOVIE</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;
