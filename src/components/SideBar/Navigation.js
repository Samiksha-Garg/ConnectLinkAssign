import styled from "styled-components";
import home from "../../assets/images/home.svg";
import chart from "../../assets/images/bar-chart-2.svg";
import user from "../../assets/images/user.svg";
import message from "../../assets/images/message-square.svg";
import connection from "../../assets/images/users.svg";
import tag from "../../assets/images/tag.svg";
import layer from "../../assets/images/3-layers.svg";
import menu from "../../assets/images/menu.svg";
import { useState, useEffect } from "react";
import home2 from "../../assets/images/home2.svg";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

export default function NavigationLinks(props) {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Nav>
      <NavigationTile
        onClick={() => {
          props.setSelectedPage(0);
        }}
        className={props.selectedPage == 0 ? "selected" : ""}
      >
        <img
          src={
            props.selectedPage == 0 && windowDimensions.width <= 700
              ? home2
              : home
          }
        ></img>
        <p>Home</p>
      </NavigationTile>
      <NavigationTile
        onClick={() => {
          props.setSelectedPage(1);
        }}
        className={props.selectedPage == 1 ? "selected" : ""}
      >
        <img src={chart}></img>
        <p>Dashboard</p>
      </NavigationTile>
      <NavigationTile
        onClick={() => {
          props.setSelectedPage(2);
        }}
        className={props.selectedPage == 2 ? "selected" : ""}
      >
        <img src={user}></img>
        <p>Profile</p>
      </NavigationTile>
      <NavigationTile
        onClick={() => {
          props.setSelectedPage(3);
        }}
        className={props.selectedPage == 3 ? "selected" : ""}
      >
        <img src={message}></img>
        <p>Messages</p>
      </NavigationTile>
      <NavigationTile className="hide">
        <img src={connection}></img>
        <p>Connections</p>
      </NavigationTile>
      <NavigationTile className="hide">
        <img src={tag}></img>
        <p>Promotions & Advertising</p>
      </NavigationTile>
      <NavigationTile className="hide">
        <img src={layer}></img>
        <p>Integrations</p>
      </NavigationTile>
      <NavigationTile className="more">
        <img src={menu}></img>
        <p>More</p>
      </NavigationTile>
    </Nav>
  );
}

const Nav = styled.div`
  @media screen and (max-width: 700px) {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }
`;

export const NavigationTile = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 4px;
  padding: 8px 12px;

  &.selected {
    border: 2.5px solid #d0d5dd;
    border-radius: 8px;
  }

  &.more {
    display: none;
  }

  & > img {
    width: 24px;
    height: 24px;
    margin-right: 12px;
  }

  & > p {
    padding: 0;
    margin: 0;
    font-size: 16px;
    font-weight: 500;
    color: #344054;
  }

  @media screen and (max-width: 700px) {
    flex-direction: column;
    padding: 0;
    margin: 0;
    & > img {
      margin: 0;
    }

    &.more {
      display: block;
    }

    &.hide {
      display: none !important;
    }

    &.selected {
      border: none;

      p {
        color: #004aad;
      }
    }
  }
`;
