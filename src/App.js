// import logo from './logo.svg';
import React from 'react';
import Header from './components/Header';
import Card from './components/Card';
// import Words from './components/Words'
import './App.css';

class App extends React.Component {
  render() {
    return (
      <section className="appHeader">
        {/* <header> */}
          <Header/>
        {/* </header> */}
        <main>
          <Card/>
          <p style={{fontSize:45, color: "white", position: "absolute", marginLeft: 380, textAlign: "center"}}>Every <span style={{color: "orange"}}>developer</span> has a <br/> tab open to Stack Overflow</p>
        </main>
      </section>
    )
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

// export default App;
