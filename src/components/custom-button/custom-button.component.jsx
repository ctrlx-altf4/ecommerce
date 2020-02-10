import React from "react";

import "./custom-button.styles.scss";

const CustomButton = ({
  children,
  isGoogleSignIn,
  inverted,
  ...OtherProps
}) => (
  <button
    className={`${isGoogleSignIn ? "google-sign-in" : ""} 
        ${inverted ? "inverted" : ""} 
        custom-button`}
    {...OtherProps}
  >
    {children}
  </button>
);

export default CustomButton;
