import React, { Component } from "react";
import "../Styles/main.css";
import { NavbarLinks } from "../Components/NavbarLinks";
import { Link } from "react-router-dom";
import Logo from "../Components/Assets/LandingPageBcg/GreatLogo.png";

class Navbar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <nav className="navbarItems">
        <div>
          {/* <h1 className="navbarLogo">Amnon</h1> */}
          <img className="navbarLogoImage" alt="Image1" src={Logo} />
        </div>

        <div className="menuIcons" onClick={this.handleClick}>
          <i
            className={
              this.state.clicked ? "fas fa-times" : "fas fa-bars-staggered"
            }
          ></i>
        </div>

        <div>
          <ul className={this.state.clicked ? "navMenu active" : "navMenu"}>
            {NavbarLinks.map((item, index) => {
              return (
                <li className="navLinksList" key={index}>
                  <Link className={item.cName} to={item.url}>
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
