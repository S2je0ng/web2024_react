import logo from './logo.svg';
import './App.css';
import Hello from './01/Hello';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //     <a
    //       className="App-link"
    //       href="https://github.com/S2je0ng/web2024_react"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       박세정
    //     </a>
    //     </p>
    //     <Hello />
    //   </header>
    // </div>

    <div className='App-header'>
      <Hello />
    </div>
  );
}

export default App;
