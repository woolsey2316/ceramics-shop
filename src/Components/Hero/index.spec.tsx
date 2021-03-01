// #region Global Imports
import * as React from "react";
import { mount } from "enzyme";
// #endregion Global Imports

// #region Local Imports
import { Hero } from "@Components";
// #endregion Local Imports

describe("Hero", () => {
    it("should match snapshot", () => {
        const wrapper = mount(<Hero />);
        expect(wrapper).toMatchSnapshot();
    });
});
