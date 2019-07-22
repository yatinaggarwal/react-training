import React from 'react';
import logo from '../../logo.svg'

const Header = React.forwardRef((props, ref) => {
  return (
    <header style={{textAlign: "center"}}>
      <img src={logo} alt="logo" className="App-logo" />
      <h1>Shopping Portal</h1>
      <input className="searchInput" type="text" ref={ref}/>
      <button onClick={props.onSearchClicked}>Search</button>
    </header>
  )
});

export default Header;