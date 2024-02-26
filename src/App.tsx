import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Not from './pages/Home';
import MyPage from './pages/MyPage';

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/mypage' element={<MyPage />} />
        <Route path='*' element={<Not/>} />
      </Routes>
    </BrowserRouter>

  )
}

export default App;
