import './header.css'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { useLocation } from 'react-router-dom';


const Header = () => {
    const location = useLocation();
    const path = location.pathname;
    console.log(path)
    
    return (
        <Navbar expand="lg" className='nav-bar'>
            <Container>
                <Navbar.Brand href="/"><img src="/mani.png" alt="logo" className='logo' /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="/" className={`nav-link ${path === '/' ? 'active' : ''}`}>Home</Nav.Link>
                        <Nav.Link href="/about" className={`nav-link ${path === '/about' ? 'active' : ''}`}>About</Nav.Link>
                        <Nav.Link href="/projects" className={`nav-link ${path === '/projects' ? 'active' : ''}`}>Projects</Nav.Link>
                        <Nav.Link href="/contact" className={`nav-link ${path === '/contact' ? 'active' : ''}`}>Contact</Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header
