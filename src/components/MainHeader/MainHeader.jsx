import React from 'react';
import styled from 'styled-components';
import Navigation from './Navigation';
// import classes from './MainHeader.module.css';

const MainHeader = (props) => {
  return (
    <MainHeaderStyled >
      <H1TextHeader>A Typical Page</H1TextHeader>
       {props.isAuthenticated && <Navigation visiblePosts={props.visiblePosts} showTimerHandler={props.showTimerHandler} onLogout={props.onLogout}/>}
    </MainHeaderStyled>
  );
};

const MainHeaderStyled=styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #741188;
  padding: 0 2rem;
`

const H1TextHeader=styled.h1`
  color: white;

`
export default MainHeader;
