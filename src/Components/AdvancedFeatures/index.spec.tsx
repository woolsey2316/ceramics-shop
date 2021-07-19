// #region Global Imports
import * as React from "react";
import { mount } from "enzyme";
// #endregion Global Imports

// #region Local Imports
import { AdvancedFeatures } from "@Components";
// #endregion Local Imports

describe("AdvancedFeatures", () => {
    it("should match snapshot", () => {
        const wrapper = mount(<AdvancedFeatures />);
        expect(wrapper).toMatchSnapshot();
    });
});
