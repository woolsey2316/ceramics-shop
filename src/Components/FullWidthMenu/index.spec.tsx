// #region Global Imports
import * as React from "react";
import { mount } from "enzyme";
// #endregion Global Imports

// #region Local Imports
import { FullWidthMenu } from "@Components";
// #endregion Local Imports

describe("FullWidthMenu", () => {
    it("should match snapshot", () => {
        const wrapper = mount(<FullWidthMenu />);
        expect(wrapper).toMatchSnapshot();
    });
});
