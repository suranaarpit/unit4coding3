import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import styled from "styled-components";

export const NavBar = styled.div`
 display: flex;
 gap: 20px;
 margin-left: 600px;
 padding: 15px;
`;


export const Navbar = () => {
  const { token } = useContext(AuthContext);
  // use token to chnage the text from Login to Logout once logged in successfully
 
  return (
    <>
      <nav>
        {/* keep all the NavLinks here */}
        <NavBar>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/books"}>Books</NavLink>
        {token ? (
           <NavLink to={"/logout"}>Logout</NavLink>
        ) : (
          <NavLink to={"/login"}>Login</NavLink>
        )}
        </NavBar>
        
      </nav>
    </>
  );
};
