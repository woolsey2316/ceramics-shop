// #region Global Imports
import * as React from "react";
import { mount } from "enzyme";
// #endregion Global Imports

// #region Local Imports
import { MinimalistNavBar } from "@Components";
// #endregion Local Imports

describe("MinimalistNavBar", () => {
    it("should match snapshot", () => {
        const wrapper = mount(<MinimalistNavBar />);
        expect(wrapper).toMatchSnapshot();
    });
});
