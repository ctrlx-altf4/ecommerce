import React from "react";
import "./App.css";

import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import Header from "./components/header/header.component";
import Homepage from "./pages/homepage/homepage.component";
import Shop from "./pages/shop/shop.component";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import CheckOut from "./pages/checkout/checkout.component";

import { setCurrentUser } from "./components/redux/user/user-actions";
import { selectCurrentUser } from "./components/redux/user/user.selectors";

import {
  auth,
  createUserProfileDocument
} from "./components/firebase/firebase.utils";


function App(props) {
  React.useEffect(() => {
    const { setCurrentUser } = props;
    const unSubscribefromAuth = auth.onAuthStateChanged(async user => {
      if (user) {
        const userRef = await createUserProfileDocument(user);
        userRef.onSnapshot(snapshot => {
          setCurrentUser({ id: user.uid, ...snapshot.data() });
        });
      } else {
        setCurrentUser(user);
      }
    });

    return () => unSubscribefromAuth();
  }, []);
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route  path="/shop" component={Shop} />
        <Route exact path="/checkout" component={CheckOut} />
        <Route
          exact
          path="/signin"
          render={() =>
            props.currentUser ? <Redirect to="/" /> : <SignInAndSignUp />
          }
        />
      </Switch>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
