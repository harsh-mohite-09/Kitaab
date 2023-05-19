import React from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../context/authContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faHeart,
  faCartShopping,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { useDataContext } from "../../context/dataContext";

const NavBar = () => {
  const { token } = useAuthContext();
  const { wishlist, cart } = useDataContext();

  return (
    <header>
      <nav>
        <div className="logo">
          <Link to="/">Kitaab</Link>
        </div>
        <div className="search-input">
          <input type="text" />
          <button>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>

        <ul className="nav-links">
          <li className="list">
            <Link to="/wishlist">
              <FontAwesomeIcon icon={faHeart} />
            </Link>
            {wishlist.length > 0 && (
              <div className="list-count">
                <span>{wishlist.length}</span>
              </div>
            )}
          </li>
          <li className="list">
            <Link to="/cart">
              <FontAwesomeIcon icon={faCartShopping} />
            </Link>
            {cart.length > 0 && (
              <div className="list-count">
                <span>{cart.length}</span>
              </div>
            )}
          </li>
          <li>
            {token ? (
              <Link to="/user_profile">
                <FontAwesomeIcon icon={faUser} />
              </Link>
            ) : (
              <Link to="/login">
                <FontAwesomeIcon icon={faUser} />
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
