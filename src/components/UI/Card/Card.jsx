import React from "react";
import styled from "styled-components";

const Card = (props) => {
  return (
    <ContainerCard >
      {props.children}
    </ContainerCard>
  );
};

const ContainerCard = styled.div`
  -webkit-box-shadow: 8px 0px 25px 16px rgba(122, 44, 216, 0.23);
-moz-box-shadow: 8px 0px 25px 16px rgba(122, 44, 216, 0.23);
box-shadow: 8px 0px 25px 16px rgba(122, 44, 216, 0.23);

  border-radius: 10px; 
  width: 90%;
  max-width: 40rem;
  padding: 2rem;
  margin: 2rem auto;
  color:#741188 ;
`;

export default Card;
