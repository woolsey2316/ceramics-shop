// #region Global Imports
import styled from "styled-components";
// #endregion Global Imports

export const Container = styled.picture`
    height: 100%;
    position: relative;
`;

export const BackgroundImage = styled.img`
    width: 100%;
    height: auto;
`;

export const BannerContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 15px;
    position: absolute;
    top: 0%;
    left: 0;
    right: 0;
    margin: 0 auto;
    -webkit-transform: translateY(-75%);
    -moz-transform: translateY(-75%);
    -ms-transform: translateY(-75%);
    -o-transform: translateY(-75%);
    transform: translateY(-75%);
`;
