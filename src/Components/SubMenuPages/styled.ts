// #region Global Imports
import styled from "styled-components";
// #endregion Global Imports

import { device } from '../../Definitions/StyledComponents'
import { HoverLink } from '../../Definitions/StyledComponents/components'

export const Container = styled.div`
    position: absolute;
    visibility: hidden;
    width: 225px;
    font-size: 12px;
    padding: 5px 20px 10px;
    list-style-type: none;
    background-color: white;
    -webkit-transform: translateY(30px);
    -moz-transform: translateY(30px);
    -ms-transform: translateY(30px);
    -o-transform: translateY(30px);
    transform: translateY(30px);
    @media ${device.tablet} {
        background-color: rgba(255, 255, 255, 0);
    }
    @media ${device.laptop} { 
        opacity: 1;
        background-color: white;
        -webkit-transform: translateY(18px);
        -moz-transform: translateY(18px);
        -ms-transform: translateY(18px);
        -o-transform: translateY(18px);
        transform: translateY(18px);
    }
`;

export const ListItem = styled.li`
    padding: 20px 0 8px;
    border-bottom: 1px solid rgb(228, 228, 228);
    width: 100%;
    &:first-of-type {
        padding-top: 5px;
    }
    &:last-of-type {
        border-bottom: none;
    }
    @media ${device.laptop} { 
        padding: 10px 0px;
    }
    
`

export const Link = styled(HoverLink)`
    padding: 0px;
    line-height: 1.75em;
`
