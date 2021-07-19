// #region Global Imports
import styled from "styled-components";
// #endregion Global Imports

export const Container = styled.div`
    background-color: #ececec;
    margin-top: 2.5rem;
    color: #333333;
`;

export const Wrap = styled.div`
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    padding: 0 1.5rem;
`;

export const NavWrap = styled.nav`
    margin-left: auto;
    z-index: 11;
`;

export const MenuList = styled.ul`
    justify-content: space-between;
    list-style: none;
    align-items: center;
    flex-wrap: wrap;
    display: flex;
`;

export const MenuItem = styled.li`
    font-size: 1.3rem;
    font-family: Roboto, sans-serif;
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 0.1em;
    text-transform: none;
`;

export const MenuLink = styled.a`
    justify-content: center;
    padding-top: 1.6rem;
    padding-bottom: 1.6rem;
    color: #333333;
    font-weight: 500;
    transition: opacity 0.3s;
    padding: 1.5rem 2rem;
`;
