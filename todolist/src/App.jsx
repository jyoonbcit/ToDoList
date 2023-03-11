
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
        <Routes>
          <Route path='/' element={<Header />} />
          <Route path='/' element={<Overview />} />
          <Route path='/' element={<Button text='Description1' />} />
          <Route path='/' element={<Button text='Description2' />} />
          <Route path='/' element={<Button text='Description3' />} />
          <Route path='/submission' element={<Submission />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
