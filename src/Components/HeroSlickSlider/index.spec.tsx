// #region Global Imports
import * as React from "react";
import { mount } from "enzyme";
// #endregion Global Imports

// #region Local Imports
import { HeroSlickSlider } from "@Components";
// #endregion Local Imports

describe("HeroSlickSlider", () => {
    it("should match snapshot", () => {
        const wrapper = mount(<HeroSlickSlider />);
        expect(wrapper).toMatchSnapshot();
    });
});
