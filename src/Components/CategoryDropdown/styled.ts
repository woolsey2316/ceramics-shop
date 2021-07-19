// #region Global Imports
import styled from "styled-components";
// #endregion Global Imports

export const DropdownContainer = styled.select`
    margin-right: 2rem;
    line-height: 3.3rem;
    font-size: 1.4rem;
    letter-spacing: 0.02em;
    color: #333333;
`;

export const ListWrap = styled.option`
    opacity: 1;
    visibility: visible;
    animation: menuGrowDown 300ms ease-in-out forwards;
    transform-origin: top center;
    top: 100%;
    left: -0.9rem;
`;
