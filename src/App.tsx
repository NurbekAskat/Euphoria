import './App.css';
import NavBar from './containers/NavBar/NavBar';
import { Route, Routes } from 'react-router-dom';
import MensPage from './containers/MensPage/MensPage';
import WomensPage from './containers/WomensPage/WomensPage';
import TopBrands from './containers/TopBrands/TopBrands';

function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<h1>MMMMMM</h1>} />
        <Route path="/mens-clothe" element={<MensPage />} />
        <Route path="/womens-clothe" element={<WomensPage />} />
        <Route path="/top-brands" element={<TopBrands />} />
      </Routes>

    </>
  );
}

export default App;
