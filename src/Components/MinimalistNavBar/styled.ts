// #region Global Imports
import styled from "styled-components";
// #endregion Global Imports

export const Container = styled.div`
    display: flex;
    flex: 1 1 100%;
    justify-content: flex-start;
    align-items: center;
    margin: 30px 0px;
`;

export const NavLink = styled.a`
    color: white;
    cursor: pointer;
    transition: all 0.3s linear;
    font-size: 18px;
    &:hover {
        color: #fc846b;
        text-decoration: none;
    }
`;

export const Separator = styled.div`
    color: white;
    margin: 0 25px;
    font-size: 20px;
    font-weight: 400;
`;
