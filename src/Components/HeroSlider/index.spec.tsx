// #region Global Imports
import * as React from "react";
import { mount } from "enzyme";
// #endregion Global Imports

// #region Local Imports
import { HeroSlider } from "@Components";
// #endregion Local Imports

describe("HeroSlider", () => {
    it("should match snapshot", () => {
        const wrapper = mount(<HeroSlider />);
        expect(wrapper).toMatchSnapshot();
    });
});
