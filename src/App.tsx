import './App.css';
import NavBar from './containers/NavBar/NavBar';
import { Route, Routes } from 'react-router-dom';
import MensPage from './containers/MensPage/MensPage';

function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<h1>MMMMMM</h1>} />
        <Route path="/mens-clothe" element={<MensPage />} />
      </Routes>

    </>
  );
}

export default App;
