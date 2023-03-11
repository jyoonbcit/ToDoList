import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
import Button from './components/button/button';

const App = () => {
  return (
    <>
      <Header />

      <Button text='Description1' />
      <Button text='Description2' />
      <Button text='Description3' />

    </>
  );
}

export default App;
