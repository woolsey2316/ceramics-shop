// #region Global Imports
import styled from "styled-components";
import { device } from "../Definitions/StyledComponents/device";
// #endregion Global Imports

export const Container = styled.div`
  z-index: 50;
  padding: 0 0 0 4%;
  float: left;
  width: 100%;
  color: #373737;
  letter-spacing: 0em;
  font-weight: normal;
  font-size: 18px;
  line-height: 1.7;
  -webkit-font-smoothing: antialiased;
  -webkit-text-size-adjust: 100%;
`;

export const HamburgerIcon = styled.img`
  margin: auto 0;
  padding: 20px 30px;
  @media ${device.laptop} {
    display: none;
  }
`

export const Wrap = styled.div`
  height: auto;
  padding-top: 25px;
  padding-right: 35px;
  font-size: 16px;
  color: #3e4253;
`;

export const InnerWrap = styled.div`
  height: 66px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1 1 100%;
  width: 100%;
  margin: 0 auto;
  padding: 0;
  @media ${device.tablet} {
    padding: 0 1.5rem;
  }
`;

export const Left = styled.div`
display: none;
@media ${device.laptop} {
  padding-left: 35px;
  float: left;
  width: 100%;
  text-align: left;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
`;

export const Right = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
  justify-content: center;
  @media ${device.laptop} {
    justify-content: flex-start
  }
`;

export const Dropdown = styled.div`
  transition: all .35s;
  margin: 0;
  padding: 0;
  &:hover {
    background-color: #2c7800;
    color: #fff;
    transition: all .35s;
  }
`;

export const DropdownItemsPicker = styled.ul`
  top: 100%;
  width: 100%;
  transition: all .3s ease-in-out 0s;
  background-color: #f4f4f4;
  list-style: none;
  z-index: 16;
`;

export const DropdownItems = styled.li`
  list-style: none;
  display: inline-block;
  width: 100%;
  padding: .8rem 1.5rem;
  font-size: 1.3rem;
  line-height: 1;
  text-align: center;
  cursor: pointer;
  border-bottom: 1px solid #ededed;
  color: #444645;
  visibility: hidden;
  &:hover {
    visibility: visible;
    background-color: #444645;
    color: #fff;
  }
`;

export const SiteNav = styled.ul`
  padding: 18px 35px;
  float: left;
  width: 100%;
  text-align: left;
  list-style: none;
  media ${device.laptopXL} {
    padding: 18px 55px;
  }
`

export const TopBarItem = styled.li`
  position: relative;
  cursor: pointer;
  padding: 18px 25px;
  height: 60px;
  float: none;
  display: inline-block;
  margin: 0;
  -webkit-transition: all 0.4s ease-in-out;
  -moz-transition: all 0.4s ease-in-out;
  -ms-transition: all 0.4s ease-in-out;
  -o-transition: all 0.4s ease-in-out;
  transition: all 0.4s ease-in-out;
  @media ${device.laptop} { 
    padding: 18px 35px;
  }
  @media ${device.laptopXL} { 
    padding: 18px 55px;
  }
  & > ul, & > div {
    opacity: 0;
    -webkit-transition: all 0.4s ease-in-out;
    -moz-transition: all 0.4s ease-in-out;
    -ms-transition: all 0.4s ease-in-out;
    -o-transition: all 0.4s ease-in-out;
    transition: all 0.4s ease-in-out;
  }
  &:hover > ul, &:hover > div {
    opacity: 1;
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(opacity=100)";
    filter: alpha(opacity=100);
    visibility: visible;
    pointer-events: auto;
    -webkit-transform: translateY(18px);
    -moz-transform: translateY(18px);
    -ms-transform: translateY(18px);
    -o-transform: translateY(18px);
    transform: translateY(18px);
    -webkit-box-shadow: 0 0 2px 1px rgb(0 0 0 / 10%);
    -moz-box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.1);
    box-shadow: 0 0 2px 1px rgb(0 0 0 / 10%);
  }
`;

export const ShoppingCartWrap = styled.li`
  position: relative;
  cursor: pointer;
  padding: 18px;
  height: 60px;
  float: none;
  display: inline-block;
  margin: 0;
  -webkit-transition: all 0.4s ease-in-out;
  -moz-transition: all 0.4s ease-in-out;
  -ms-transition: all 0.4s ease-in-out;
  -o-transition: all 0.4s ease-in-out;
  transition: all 0.4s ease-in-out;
  @media ${device.laptop} { 
    padding: 18px;
  }
  @media ${device.laptopXL} { 
    padding: 18px;
  }
  & > ul, & > div {
    opacity: 0;
    -webkit-transition: all 0.4s ease-in-out;
    -moz-transition: all 0.4s ease-in-out;
    -ms-transition: all 0.4s ease-in-out;
    -o-transition: all 0.4s ease-in-out;
    transition: all 0.4s ease-in-out;
  }
  &:hover > ul, &:hover > div {
    opacity: 1;
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(opacity=100)";
    filter: alpha(opacity=100);
    visibility: visible;
    pointer-events: auto;
    -webkit-transform: translateY(18px);
    -moz-transform: translateY(18px);
    -ms-transform: translateY(18px);
    -o-transform: translateY(18px);
    transform: translateY(18px);
    -webkit-box-shadow: 0 0 2px 1px rgb(0 0 0 / 10%);
    -moz-box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.1);
    box-shadow: 0 0 2px 1px rgb(0 0 0 / 10%);
  }
`;

export const Link = styled.a`
  font-size: 14px;
  font-weight: normal;
  padding: 13px 20px;
  color: inherit;
  @media ${device.tablet} {
    border-color: #fc846b;
    font-size: 18px;
    font-weight: 500;
    letter-spacing: 0;
    line-height: 1.65em;
    -webkit-transition: all 0.4s ease-in-out;
    -moz-transition: all 0.4s ease-in-out;
    -ms-transition: all 0.4s ease-in-out;
    -o-transition: all 0.4s ease-in-out;
    transition: all 0.4s ease-in-out;
    padding: 0;
  }
  &:hover {
    -webkit-transition: all 0.4s ease-in-out;
    -moz-transition: all 0.4s ease-in-out;
    -ms-transition: all 0.4s ease-in-out;
    -o-transition: all 0.4s ease-in-out;
    transition: all 0.4s ease-in-out;
    color: #fc846b;
    text-decoration: none;
  }
  &:active: {
    border-bottom: 1px solid #fc846b;
  }
   
`;

export const Logo = styled.a`
  float: left;
  text-align: center;
  color: #373737;
  padding: 0px;
  display: inline-block;
  margin: 0 auto;
  
`

export const LogoImg = styled.img`
  vertical-align: middle;
  position: static;
  -webkit-transform: translateY(0%);
  -moz-transform: translateY(0%);
  -ms-transform: translateY(0%);
  -o-transform: translateY(0%);
  transform: translateY(0%);
  width: 114px;
  height: 43px;
  @media ${device.laptop} {
    width: 170px;
    height: 64px;
  }
`
export const Icon = styled.i`
  display: none;
  @media ${device.laptop} {
    display: block;
    color: black;
    -webkit-transition: all 0.4s ease-in-out;
    -moz-transition: all 0.4s ease-in-out;
    -ms-transition: all 0.4s ease-in-out;
    -o-transition: all 0.4s ease-in-out;
    transition: all 0.4s ease-in-out;
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