import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./header.styles.scss";

import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon.components";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

import { selectCurrentUser } from "../redux/user/user.selectors";
import { selectCartHidden } from "../redux/cart/cart.selectors";

const Header = ({ currentUser, hidden }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        Shop
      </Link>
      {/* <Link className="option" to="/contact">
        Contact
      </Link> */}
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div> //<img src={`${currentUser.photoURL}`} alt="profile pic"/>
      ) : (
        <Link className="option" to="/signin">
          SignIn
        </Link>
      )}
      <CartIcon />
    </div>
    {!hidden ? <CartDropdown /> : null}
  </div>
);
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});
export default connect(mapStateToProps)(Header);
