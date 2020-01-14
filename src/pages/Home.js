import React from "react";
import styled from "styled-components";
import { Directory } from "components/Directory";

const Home = ({ className }) => {
  return (
    <div className={className}>
      <h1>Welcome to my Homepage</h1>
      <Directory />
    </div>
  );
};

const HomeStyled = styled(Home)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 80px;
`;

export { HomeStyled as Home };
