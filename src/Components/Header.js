import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../images/logoHQ.svg";
import { Link } from "react-router-dom";

const styles = {
  header: { width: "100%", position: "fixed", zIndex: "100" },
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
  },
};

const Header = () => {
  return (
    <header style={styles.header}>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#home">
            <img style={styles.img} src={logo} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav style={{ ...styles.nav, ...styles.navLink }}>
              <Link style={styles.navLink} to="/">
                Home
              </Link>
              <Link
                style={{ ...styles.navLink, ...{ marginLeft: "1em" } }}
                to="/celestial"
              >
                Constellation Maps
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
