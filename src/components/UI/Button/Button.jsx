import React from 'react';
import styled from 'styled-components';


const Button = (props) => {
  return (
    <Btns
      type={props.type || 'button'}
      className={` ${props.className}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </Btns>
  );
};

const Btns=styled.button`
  font: inherit;
  border: 1px solid #4f005f;
  background: #4f005f;
  color: white;
  padding: 0.75rem 3.5rem;
  cursor: pointer;
  font-size: 1.15rem;
  border-radius: 30px;


  &:hover,
&:active {
  background: #741188;
  border-color: #741188;
}

&:focus {
  outline: none;
}

&:disabled,
&:focus:disabled,
&:hover:disabled,
&:active:disabled {
  background: #ccc;
  border-color: #ccc;
  color: #666666;
  cursor: not-allowed;
  }
`

export default Button;
