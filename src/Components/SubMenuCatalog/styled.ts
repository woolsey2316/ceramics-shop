// #region Global Imports
import styled from "styled-components";
// #endregion Global Imports

import { device } from '../../Definitions/StyledComponents/device'
import { HoverLink } from '../../Definitions/StyledComponents/components'

export const Container = styled.ul`
    opacity: inherit;
    -webkit-transition: all 0.4s ease-in-out;
    -moz-transition: all 0.4s ease-in-out;
    -ms-transition: all 0.4s ease-in-out;
    -o-transition: all 0.4s ease-in-out;
    transition: all 0.4s ease-in-out;
    @media ${device.laptop} { 
        position: fixed;
        left: 3%;
        right: 0;
        z-index: 100;
        padding: 20px 30px;
        max-height: 82vh;
        overflow-x: hidden;
        overflow-y: auto;
        opacity: 0;
        background: white;
        -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(opacity=0)";
        filter: alpha(opacity=0);
        visibility: hidden;
        pointer-events: none;
        -webkit-transform: translateY(30px);
        -moz-transform: translateY(30px);
        -ms-transform: translateY(30px);
        -o-transform: translateY(30px);
        transform: translateY(30px);
        -webkit-transition: all 0.35s linear;
        -moz-transition: all 0.35s linear;
        -ms-transition: all 0.35s linear;
        -o-transition: all 0.35s linear;
        transition: all 0.35s linear;
        -webkit-box-shadow: 0 3px 3px -3px rgb(0 0 0 / 10%);
        -moz-box-shadow: 0 3px 3px -3px rgba(0, 0, 0, 0.1);
        box-shadow: 0 3px 3px -3px rgb(0 0 0 / 10%);
    }
    
`;

export const GridContainer = styled.div`
    @media ${device.laptop} { 
        display: grid;
        grid-auto-flow: column;
        grid-template-columns: repeat(4,25%);
        grid-template-rows: repeat(6,16.66%);
        color: #373737;
        font-size: 12px;
        font-family: Poppins;
    }
    
`;

export const TitleLink = styled(HoverLink)`
    font-weight: 600;
    padding: 6px 0 4px;
`

export const Link = styled(HoverLink)`
    padding: 6px 0 4px;
`
