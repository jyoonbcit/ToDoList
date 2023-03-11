import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
import Button from './components/button/button';

const App = () => {
  return (
    <>
      <Header />

      <Button />
      <Button />
      <Button />
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </>
  );
}

export default App;
