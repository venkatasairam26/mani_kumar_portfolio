import './header.css'
import { Container, Nav, Navbar } from 'react-bootstrap'


const Header = () => {
    return (
        <Navbar expand="lg" className='nav-bar'>
            <Container>
                <Navbar.Brand href="/"><img src="/mani.png" alt="logo" className='logo' /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="/" className='nav-link'>Home</Nav.Link>
                        <Nav.Link href="/about" className='nav-link'>About</Nav.Link>
                        <Nav.Link href="/projects" className='nav-link'>Projects</Nav.Link>
                        <Nav.Link href="/contact" className='nav-link'>Contact</Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header
