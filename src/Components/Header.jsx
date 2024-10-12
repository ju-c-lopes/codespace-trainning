/**
 * Header Component
 *
 * Sample of a single responsibility component
 */

import React from "react";
import PropTypes from "prop-types";

const Header = ({ title }) => {
  return <h1>Educator React Codespaces JS Template - {title}</h1>;
};

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
