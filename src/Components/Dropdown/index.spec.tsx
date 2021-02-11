// #region Global Imports
import * as React from "react";
import { mount } from "enzyme";
// #endregion Global Imports

// #region Local Imports
import { Dropdown } from "@Components";
// #endregion Local Imports

describe("Dropdown", () => {
    it("should match snapshot", () => {
        const wrapper = mount(<Dropdown />);
        expect(wrapper).toMatchSnapshot();
    });
});
