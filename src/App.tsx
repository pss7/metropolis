import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Not from './pages/Home';

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<Not/>} />
      </Routes>
    </BrowserRouter>

  )
}

export default App;
