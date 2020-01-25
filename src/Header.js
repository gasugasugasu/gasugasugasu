import React from 'react';
class Header extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className="header">
        <div className="logo">
          <p>Logo</p>
        </div>
        <nav>
          <ul className="nav-links">
            <li><a href="#">About</a></li>
            <li><a href="#">contact</a></li>
            <li><a href="#">Projects</a></li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Header;
