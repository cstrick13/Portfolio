import { Component } from "react";
import "./Navbar.css";
import { Link } from 'react-router-dom';

class Navbar extends Component{
    state = {clicked:false};
    onClick = () => { this.setState({clicked:!this.state.clicked})}
    render(){
        return (
        <nav className="NavbarItems">
            <h1 className="logo">
            <Link to="/" className="home-link">
                        Cory <i className="fab fa-react"></i>
                    </Link>
            </h1>
            <div className="menu-icons" onClick={this.onClick}>
                    <i className={this.state.clicked ? "fas fa-times": "fas fa-bars"}></i>
            </div>
            <ul className={this.state.clicked ? "nav-menu active":"nav-menu"}>
                <li>
                    <Link to="/" className="nav-links">
                            <i className="fa-solid fa-house-user"></i> Home
                    </Link>
                    <Link to="/about" className="nav-links">
                        <i className="fa-solid fa-user"></i> About
                    </Link>
                </li>
            </ul>
        </nav>
        );
    }
}

export default Navbar;
