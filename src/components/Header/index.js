// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <div className="header-container ">
    <img
      src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
      alt="wave"
    />

    <h1 className="wave">Wave</h1>
    <ul className="ul-container ">
      <li className="wave">
        <Link className="nav-link" to="/">
          Home
        </Link>
      </li>
      <li className="wave">
        {' '}
        <Link className="nav-link" to="/about">
          About
        </Link>
      </li>
      <li className="wave">
        {' '}
        <Link className="nav-link" to="/contact">
          Contact
        </Link>
      </li>
    </ul>
  </div>
)

export default Header