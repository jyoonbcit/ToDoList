
import './App.css';
import Header from './components/header/header';
import Button from './components/button/button';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Submission from './pages/submission';
import Overview from './pages/overview';

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <Button text='Description1' />
        <Button text='Description2' />
        <Button text='Description3' />
        <Routes>
          <Route path='/' element={<Overview />} />
          <Route path='/submission' element={<Submission />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
