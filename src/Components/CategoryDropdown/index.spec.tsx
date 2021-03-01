// #region Global Imports
import * as React from "react";
import { mount } from "enzyme";
// #endregion Global Imports

// #region Local Imports
import { CategoryDropdown } from "@Components";
// #endregion Local Imports

describe("CategoryDropdown", () => {
    it("should match snapshot", () => {
        const wrapper = mount(<CategoryDropdown />);
        expect(wrapper).toMatchSnapshot();
    });
});
