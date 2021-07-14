// import logo from './logo.svg';
import React from 'react';
import Header from './components/Header';
import Card from './components/Card';
import SearchLogo from './icons8_Search_32.png'
import LockLogo from './icons8_Lock_2.ico'
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
          <section className='cardGroup'>
          <Card clip={"polygon(0% 0%, 100% 0%, 100% 100%, 95% 88%, 0% 88%)"} bgColor={"rgba(253, 189, 159, 0.7)"} logo={SearchLogo} margin="150px" text="Find the best answer to your technical question, help others answer theirs" btnColor="rgb(204, 92, 40)" join="Join the Community" link="search content"/>

          <Card clip={"polygon(0% 0%, 100% 0%, 100% 85%, 5% 86%, 0 100%)"} bgColor={"rgba(207,234,254, 1)"} logo={LockLogo} margin="30px" text="Want a secure, private space for your technical knowledge?" btnColor="rgb(0,119,200)" join="Create a free team" link="search team"/>
          </section>
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
