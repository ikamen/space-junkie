import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../images/logoHQ.svg";
import { Link } from "react-router-dom";
import StarPhoto from "./StarPhoto";

const styles = {
  header: { width: "100%" },
  img: { height: "clamp(1.7rem, 3.5vw, 4rem)" },
  nav: {
    marginLeft: "auto",
    fontFamily: "Montserrat",
    fontWeight: "500",
    letterSpacing: "-1px",
  },
  navLink: {
    fontSize: "clamp(1rem, 1.5vw, 4rem)",
    alignItems: "center",
    color: "white",
    textDecoration: "none",
    marginRight: "10px"
  },
};

const Header = () => {
  return (
    <header style={styles.header}>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand>
            <img style={styles.img} src={logo} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav style={{ ...styles.nav, ...styles.navLink }}>
              {/* <Nav.Link href="#home">Home</Nav.Link> */}
              <Link style={styles.navLink} to="/">
                Home
              </Link>
              {/* <Nav.Link href="#home">Celestial Objects</Nav.Link> */}
              <Link style={styles.navLink} to="/celestial">Celestial Objects</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
