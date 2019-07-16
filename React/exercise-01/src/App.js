import React, { Component } from 'react';
import Header from './components/Header/Header';
import Products from './components/Products/Products';
import productsData from './data/productsData';
// import logo from './logo.svg';
// import './App.css';

class App extends Component {

  state = {
    products: productsData
  }

  render() {
    return (
      <div>
        <Header />
        <Products allProductInfo={this.state.products} />
      </div>      
    );
  }
}

export default App;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

