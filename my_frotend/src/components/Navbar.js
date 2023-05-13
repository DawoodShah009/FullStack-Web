import {useNavigate} from 'react-router-dom'
import {Navbar, Nav, NavDropdown, Container} from 'react-bootstrap/'
import bg from '../images/bg_image.jpg'
import {useGlobalState, setGlobalState} from './Globalstates'

function Nav_bar() {
  document.title = 'NavBar'
  let navigate = useNavigate()
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <img
    alt=""
    src={bg}
    width="230"
    height="120"
    objectfit='cover'
    className="d-inline-block align-top"
  />
      <Container>

      <Navbar.Brand href="#home">Dawood Property</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#features">Features</Nav.Link>

          <Nav.Link href="#pricing">Pricing</Nav.Link>
          <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>

          <Nav.Link href='#signup' onClick={()=> {navigate('/signup')}}>SignUp</Nav.Link>
          <Nav.Link href='#login' onClick={()=> {navigate('/login')}}> Login</Nav.Link>
          <Nav.Link href='#home' onClick={()=> {navigate('/home')}}> Home</Nav.Link>

        </Nav>
        <Nav>
          <Nav.Link href="#deets">More deets</Nav.Link>
          <Nav.Link eventKey={2} href="#memes">
            Dank memes
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
export default Nav_bar



