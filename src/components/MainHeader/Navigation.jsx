import React from "react";
import styled from "styled-components";
import Button from "../UI/Button/Button";
// import classes from './Navigation.module.css';

const Navigation = (props) => {
  return (
    <StyledNav>
      <ul>
        <li>
          <Button onClick={props.visiblePosts}>Users</Button>
        </li>
        <li>
          <Button onClick={props.showTimerHandler} >Timer</Button>
        </li>
        <li>
          <Button onClick={props.onLogout}>Logout</Button>
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  & ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
  }

  & li {
    margin: 0;
    margin-left: 2rem;
  }

  & a {
    text-decoration: none;
    color: white;
  }

  &a:hover,
  & a:active {
    color: #f3cafb;
  }

  & button {
    font: inherit;
    background: #dd0db0;
    border: 1px solid #dd0db0;
    padding: 0.5rem 1.5rem;
    color: white;
    cursor: pointer;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.26);
    border-radius: 20px;
  }
`;
export default Navigation;
