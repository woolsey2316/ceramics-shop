// #region Global Imports
import * as React from "react";
import { mount } from "enzyme";
// #endregion Global Imports

// #region Local Imports
import { TheRightHeadPhones } from "@Components";
// #endregion Local Imports

describe("TheRightHeadPhones", () => {
    it("should match snapshot", () => {
        const wrapper = mount(<TheRightHeadPhones />);
        expect(wrapper).toMatchSnapshot();
    });
});
