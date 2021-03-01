// #region Global Imports
import * as React from "react";
import { mount } from "enzyme";
// #endregion Global Imports

// #region Local Imports
import { SubMenu } from "@Components";
// #endregion Local Imports

describe("SubMenu", () => {
    it("should match snapshot", () => {
        const wrapper = mount(<SubMenu />);
        expect(wrapper).toMatchSnapshot();
    });
});
