import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Aboutus from './pages/Aboutus';
import AddEditUser from './pages/AddEditUser';
import UserInfo from './pages/UserInfo';
import Navbar from './components/Navbar';
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<Aboutus />} />
        <Route path='/addUser' element={<AddEditUser />} />
        <Route path='/editUser/:id' element={<AddEditUser />} />
        <Route path='/userInfo/:id' element={<UserInfo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
