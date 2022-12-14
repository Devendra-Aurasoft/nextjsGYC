import Link from "next/link"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from "next/image";
import classes from './header.module.css'

// import logo from '../public/Image/logo/gyclogo.png';
// const MenuLIst = [
//     { text: "Home", path: "/" },
//     { text: "About", path: "/users" },
//     { text: "Post", path: "/posts" }
// ]

// const MenuItem = ({ text, path }) => {
//     return (
//         <Link href={path}>
//             <Nav.Link >{text}</Nav.Link>
//         </Link>
//     )
// }
function Header() {
    return (
        <>
            {/* ----------------------------------------------- */}
            {/* ============== Navbar Start =================== */}
            {/* ----------------------------------------------- */}
            <Navbar bg="" className={`${classes.C_navbar}`}  expand="lg">
                <Container>
                    <Image src="/Image/logo/gyclogo.png" width="130px" height="100px" />
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link className={`${classes.C_link}`} href="/">Home</Nav.Link>
                            <Nav.Link className={`${classes.C_link}`} href="/about">About</Nav.Link>
                            <Nav.Link className={`${classes.C_link}`} href="#link">Institution</Nav.Link>
                            <Nav.Link className={`${classes.C_link}`} href="/exams">Exams</Nav.Link>
                            <Nav.Link className={`${classes.C_link}`} href="/gd">GD/PI</Nav.Link>
                            <Nav.Link className={`${classes.C_link}`} href="/accommodation">Allied Services</Nav.Link>
                            <Nav.Link className={`${classes.C_link}`} href="https://getyourcollege.in/blog/all-blogs">Blog</Nav.Link>
                            <Nav.Link className={`${classes.C_link}`} href="/careers">Careers</Nav.Link>
                            <Nav.Link className={`${classes.C_link}`} href="/contact">Contact Us</Nav.Link>
                            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown> */}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header