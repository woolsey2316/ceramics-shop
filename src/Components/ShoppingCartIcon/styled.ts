// #region Global Imports
import styled from "styled-components";
// #endregion Global Imports

import { device } from '../../Definitions/StyledComponents'

export const Icon = styled.i`
  color: black;
  -webkit-transition: all 0.4s ease-in-out;
  -moz-transition: all 0.4s ease-in-out;
  -ms-transition: all 0.4s ease-in-out;
  -o-transition: all 0.4s ease-in-out;
  transition: all 0.4s ease-in-out;
  font-size: 22px;
  @media ${device.laptop} {
    font-size: 26px;
  }
  &:hover {
    color: #fc846b;
    -webkit-transition: all 0.4s ease-in-out;
    -moz-transition: all 0.4s ease-in-out;
    -ms-transition: all 0.4s ease-in-out;
    -o-transition: all 0.4s ease-in-out;
    transition: all 0.4s ease-in-out;
  }
`
