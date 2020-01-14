import React from "react";
import styled from "styled-components";

const MenuItem = ({ className, title, size }) => {
  return (
    <div className={`${className} ${size}`}>
      <div className="background-image" />
      <div className="content">
        <div className="title">{title}</div>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

const MenuItemStyled = styled(MenuItem)`
  min-width: 30%;
  height: 240px;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  margin: 0 7.5px 15px;
  overflow: hidden;

  &:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }

  &.large {
    height: 380px;
  }

  &:hover {
    cursor: pointer;

    & .background-image {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }

    & .content {
      opacity: 0.9;
    }
  }

  .background-image {
    background-image: url(${props => props.imageUrl});
    width: 100%;
    height: 100%;
  }

  .content {
    height: 90px;
    padding: 0 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    background-color: white;
    opacity: 0.7;
    position: absolute;

    .title {
      font-weight: bold;
      margin-bottom: 6px;
      font-size: 22px;
      color: #4a4a4a;
      text-transform: uppercase;
    }

    .subtitle {
      font-weight: lighter;
      font-size: 16px;
    }
  }
`;

export { MenuItemStyled as MenuItem };
