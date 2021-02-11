// #region Global Imports
import styled from "styled-components";
// #endregion Global Imports

export const DropdownContainer = styled.select`
    align-items: center;
    min-height: 100vh;
    transition: 0.35s;
    &:hover {
        background-color: ${({ theme }) => theme.colors.primary};
        color: white;
        transition: 0.35s;
    }
`;
