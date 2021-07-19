// #region Global Imports
import styled from "styled-components";
// #endregion Global Imports

import { device } from "@Definitions/StyledComponents";

export const Container = styled.div`
    background-image: url("../images/section-bgimage-5.png");
    display: flex;
    flex-direction: column;
    flex: 1 1 100%;
    justify-content: flex-start;
    align-items: center;
    padding: 90px 0;
`;

export const BlogListContainer = styled.div`
    margin-top: 38px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media ${device.laptop} {
        flex-direction: row;
    }
`;
