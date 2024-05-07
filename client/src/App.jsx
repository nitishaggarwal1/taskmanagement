import Navbar  from './components/Navbar';
import AddTask from './pages/AddTask';
import Home from './pages/Home';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  

  return (
    <>
    <BrowserRouter>
    <Navbar />
    <div className="d-flex justify-content-center align-items-center" style={{minHeight: "82vh"}}>
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/add' element={<AddTask />}></Route>
      <Route path='*' element={<h1>Not found</h1>}></Route>
    </Routes>
    </div>
    </BrowserRouter>
    </>
  );
        
}

export default App
