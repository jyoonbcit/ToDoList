
import './App.css';
import Header from './components/header/header';
import Button from './components/button/button';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Submission from './pages/submission';
import Overview from './pages/overview';

const App = () => {
  return (
    <div className='App'>
      <Header />

      <BrowserRouter>
        <div className="btn-wrapper">
          <Button to='/' text='Homepage' />
          <Button to='/submission' text='Add Task' />
        </div>
        <Routes>
          <Route path='/' element={<Overview />} />
          <Route path='/submission' element={<Submission />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
