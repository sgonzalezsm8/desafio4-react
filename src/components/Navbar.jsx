import { FaRegUser } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaSignInAlt } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import { formatNumberToES } from "../utils/format-numbers";

function Navbar() {
  const total = 25000;
  const token = true; //Simulacion de si el usuario esta logueado o no

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">Pizzería Mamma Mía</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#"><FaHome /> Home</a>
          </li>
          {token ? (
            <>
              <li className="nav-item">
                <a className="nav-link" href="#"><FaRegUser /> Profile</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#"><FaSignOutAlt /> Logout</a>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item">
                <a className="nav-link" href="#"><FaSignInAlt /> Login</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#"><FaUserPlus /> Register</a>
              </li>
            </>
          )}
        </ul>
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <a className="nav-link" href="#">
              <FaShoppingCart /> Total: ${formatNumberToES(total)}
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;