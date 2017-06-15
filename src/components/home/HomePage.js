import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>Pluralsight</h1>
        <Link to="about" className="btn">Learn more</Link>
      </div>
    );
  }
}

export default HomePage;
