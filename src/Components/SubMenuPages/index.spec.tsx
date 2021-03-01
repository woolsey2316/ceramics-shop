// #region Global Imports
import * as React from "react";
import { mount } from "enzyme";
// #endregion Global Imports

// #region Local Imports
import { SubMenuPages } from "@Components";
// #endregion Local Imports

describe("SubMenuPages", () => {
    it("should match snapshot", () => {
        const wrapper = mount(<SubMenuPages />);
        expect(wrapper).toMatchSnapshot();
    });
});
