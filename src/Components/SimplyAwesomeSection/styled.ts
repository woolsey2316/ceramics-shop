// #region Global Imports
import styled from "styled-components";
import { device } from "@Definitions/StyledComponents";
// #endregion Global Imports

export const Container = styled.div`
    background-color: white;
    display: block;
`;

export const Image = styled.img`
    max-width: 100%;
    height: auto;
`;

export const Grid1x2 = styled.div`
    display: flex;
    max-width: 1230px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
`;

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 0 20px;
    @media ${device.tablet} {
        padding: 0 50px;
    }
`;
