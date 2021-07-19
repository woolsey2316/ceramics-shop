// #region Global Imports
import styled from "styled-components";
// #endregion Global Imports

export const Container = styled.div`
    background-color: ${({ theme }) => theme.colors.primary};
    color: #333333;
    padding: 2.5rem 0 0;
`;

export const Wrap = styled.div`
    padding-right: 0;
    align-items: center;
    flex-wrap: wrap;
    display: flex;
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    padding: 0 1.5rem;
`;
