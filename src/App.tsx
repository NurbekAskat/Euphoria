import './App.css';
import NavBar from './containers/NavBar/NavBar';
import { Route, Routes } from 'react-router-dom';
import MensPage from './containers/MensPage/MensPage';
import WomensPage from './containers/WomensPage/WomensPage';
import TopBrands from './containers/TopBrands/TopBrands';
import Home from './containers/Home/Home';

function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mens-clothe" element={<MensPage />} />
        <Route path="/womens-clothe" element={<WomensPage />} />
        <Route path="/top-brands" element={<TopBrands />} />
        <Route path="*" element={<h1>Not Found</h1>}></Route>
      </Routes>

    </>
  );
}

export default App;
