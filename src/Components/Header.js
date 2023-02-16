import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../images/logoHQ.svg";

const styles = {
  
  img: { height: "clamp(1.7rem, 3.5vw, 4rem)" },
  nav: { marginLeft: "auto" },
  navLink: { fontSize: "clamp(1rem, 1.5vw, 4rem)", alignItems: "center" },
};

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid style={styles.container}>
          <Navbar.Brand href="#home">
            <img style={styles.img} src={logo} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav style={{ ...styles.nav, ...styles.navLink }}>
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#home">Celestial Body Info</Nav.Link>
              <Nav.Link href="#home">Future Space Missions</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
