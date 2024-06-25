import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-md">
      <div className="container-xxl">
        <NavLink to="/" className="navbar-brand me-5">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmofjaoLTbXbSWh3i1tk7STE-wYK06xA_W4OEi9wqe7DH-F6IUvI2xzVXACBX79aLnk_4&usqp=CAU" alt="Euphoria keer it classy" className="logo"/>
        </NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navigation"
                aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navigation">
          <ul className="navbar-nav fs-5">
            <li className="nav-item me-4">
              <NavLink to="/" className="nav-link active">Shop</NavLink>
            </li>
            <li className="nav-item me-4">
              <NavLink to="/mens-clothe" className="nav-link">Mens</NavLink>
            </li>
            <li className="nav-item me-4">
              <NavLink to="/women" className="nav-link">Women</NavLink>
            </li>
            <li className="nav-item me-4">
              <NavLink to="/top-brands" className="nav-link">Top Brands</NavLink>
            </li>
            <li className="nav-item me-4">
              <NavLink to="/feedback" className="nav-link">Feedback</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;