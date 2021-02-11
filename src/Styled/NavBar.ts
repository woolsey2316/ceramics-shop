// #region Global Imports
import styled from "styled-components";
// #endregion Global Imports

export const Container = styled.div`
  color: #313132;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  font-family: Noto Sans JP,sans-serif;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  text-size-adjust: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  padding: 0;
`;

export const Wrap = styled.div`
  font-size: 1.3rem;
  background-color: #f7f7f7;
  color: #3e4253;
`;

export const InnerWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex: 1 1 100%;
  width: 100%;
  margin: 0 auto;
  padding: 0 1.5rem;
`;

export const Left = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 0;
  padding: 0;
`;

export const Right = styled.div`
  margin-left: auto;  
  position: relative;
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
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

export const TopBarItem = styled.div`
  transition: all .35s;
  position: relative;
  margin: 0;
  padding: 0;
  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: #fff;
    transition: all .35s;
  }
`;

export const Link = styled.a`
  padding: 1rem 2.5rem;
  padding-top: 1.7rem;
  padding-bottom: 1.7rem;
  line-height: 1.6rem;
  color: #3e4253;
  font-size: 13px;
  &:hover {
    cursor: pointer;
    color: #fff;
    transition: all .35s;
    text-decoration: none;
  }
   
`;
