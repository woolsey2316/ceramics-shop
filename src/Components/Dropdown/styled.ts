// #region Global Imports
import styled from "styled-components";
// #endregion Global Imports

import { device } from "@Definitions/StyledComponents";

export const Main = styled.div`
  font-family: 'Poppins', sans-serif;
`;

export const DropdownContainer = styled.div`
  margin: 0 auto;
  cursor: pointer;
  display: none;
  @media ${device.laptop} {
    display: block;
  }
`;

export const DropdownHeader = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 85px;
  margin-left: auto;
  padding: 5px 0;
  font-weight: 500;
  font-size: 15px;
  color: rgb(55,55,55);
  background: transparent;
  &:hover {
    color: rgb(252, 132, 107);
  }
`;

export const DropdownListContainer = styled.div`
  position: absolute;
  border: 1px solid #e4e4e4;
  -webkit-box-shadow: 0 1px 6px rgb(0 0 0 / 10%);
  -moz-box-shadow: 0 1px 6px rgba(0, 0, 0, 0.1);
  box-shadow: 0 1px 6px rgb(0 0 0 / 10%);
  -moz-border-radius: 1px;
  -webkit-border-radius: 1px;
  -ms-border-radius: 1px;
  -o-border-radius: 1px;
  border-radius: 1px;
  box-sizing: border-box;
  color: rgb(55,55,55);
  font-size: 15px;
  font-weight: 500;
 `

export const DropdownList = styled.ul`
  padding: 0;
  margin: 0;
  padding-left: 1em;
  background: #ffffff;
  &:first-child {
    padding-top: 0.8em;
  }
`;

export const ListItem = styled.li`
  width: 100px;
  list-style: none;
  padding-bottom: 0.8em;
  -webkit-transition: all 0.4s ease-in-out;
  -moz-transition: all 0.4s ease-in-out;
  -ms-transition: all 0.4s ease-in-out;
  -o-transition: all 0.4s ease-in-out;
  transition: all 0.4s ease-in-out;
  &:hover {
    color: rgb(252, 132, 107);
    -webkit-transition: all 0.4s ease-in-out;
    -moz-transition: all 0.4s ease-in-out;
    -ms-transition: all 0.4s ease-in-out;
    -o-transition: all 0.4s ease-in-out;
    transition: all 0.4s ease-in-out;
  }
`;