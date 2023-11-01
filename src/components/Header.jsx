import React from "react";
import { Link } from "react-router-dom";
import { HeaderArea } from "../css/Style";

function Header() {
  return (
    <HeaderArea>
      <Link to="/">Store</Link>
      <Link to="/cart">Cart</Link>
    </HeaderArea>
  );
}

export default Header;
