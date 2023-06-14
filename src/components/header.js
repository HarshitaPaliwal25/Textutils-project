import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <div className="header">
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link class="nav-link" to="/about">
                Home<span class="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                {props.abouttext}
              </Link>
            </li>
          </ul>
     

          <div class={`form-check form-switch text-${props.mode==='light' ? 'dark': 'light'}`}>
            <input
              class="form-check-input"
              onClick={props.toggle}
              type="checkbox"
              id="flexSwitchCheckDefault"
            />
            <label class="form-check-label" htmlFor="flexSwitchCheckDefault">
              Enable Dark Mode
            </label>
          </div>
        </div>
      </nav>
    </div>
  );
};
Header.propTypes = {
  title: PropTypes.string,
  abouttext: PropTypes.string,
};
Header.defaultProps = {
  title: "Set of textutils",

  abouttext: "aboutus",
};
export default Header;
