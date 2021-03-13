// #region Global Imports
import styled from "styled-components";
// #endregion Global Imports

// resusable components

export const HoverLink = styled.a`
  color: #373737;
  -webkit-transition: all 0.4s ease-in-out;
  -moz-transition: all 0.4s ease-in-out;
  -ms-transition: all 0.4s ease-in-out;
  -o-transition: all 0.4s ease-in-out;
  transition: all 0.4s ease-in-out;
  &:hover {
    color: #fc846b;
    text-decoration: none;
    -webkit-transition: all 0.4s ease-in-out;
    -moz-transition: all 0.4s ease-in-out;
    -ms-transition: all 0.4s ease-in-out;
    -o-transition: all 0.4s ease-in-out;
    transition: all 0.4s ease-in-out;

  }
`

export const Button = styled.a`
  border-radius: 30px;
  color: #fc846b;
  display: inline-block;
  line-height: 1.6em;
  z-index: 1;
  overflow: hidden;
  position: relative;
  padding: 10px 45px;
  margin: 10px 0 0;
  text-decoration: none;
  text-align: center;
  vertical-align: middle;
  white-space: nowrap;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -o-user-select: none;
  user-select: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  font-size: 18px;
  font-weight: 500;
  outline: none;
  -webkit-transition: all 0.4s ease-in-out;
  -moz-transition: all 0.4s ease-in-out;
  -ms-transition: all 0.4s ease-in-out;
  -o-transition: all 0.4s ease-in-out;
  transition: all 0.4s ease-in-out;
`