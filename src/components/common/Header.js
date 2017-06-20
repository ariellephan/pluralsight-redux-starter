import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';
import LoadingDots from './LoadingDots';

const Header = ({loading}) => {
  return (
    <nav>
      <IndexLink to="/" activeClassName="active">Home</IndexLink>
      <IndexLink to="/about" activeClassName="active">About</IndexLink>
      <IndexLink to="/courses" activeClassName="active">Course</IndexLink>
      {loading && <LoadingDots interval={100} dots={20}/>}
    </nav>
  );
};

Header.PropTypes = {
  loading: PropTypes.bool.isRequired
};

export default Header;
