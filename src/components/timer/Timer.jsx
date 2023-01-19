import React, { useEffect, useRef, useState } from "react";
import Card from "../UI/Card/Card";
import styled from "styled-components";
const Timer = () => {
  const [countDown, setCountDown] = useState(0);
  const Timer = useRef();

  useEffect(() => {
    Timer.current = setInterval(() => {
      setCountDown((prevState) => prevState + 1);
    }, 1000);
    return () => clearInterval(Timer.current);
  }, []);
  useEffect(() => {
    if (countDown >= 60) clearInterval(Timer.current);
  }, [countDown]);

  return (
    <Card>
    <TextContainer>
      <h1>Timer:{countDown}</h1>
    </TextContainer>
    </Card>
  );
};


const TextContainer  = styled.div`
    margin: auto 0;
    display: flex;
    justify-content: center;

    & h1{
        color:#741188 ;
    }
`

export default Timer;