// #region Global Imports
import * as React from "react";
import { mount } from "enzyme";
// #endregion Global Imports

// #region Local Imports
import { SimplyAwesomeSection } from "@Components";
// #endregion Local Imports

describe("SimplyAwesomeSection", () => {
    it("should match snapshot", () => {
        const wrapper = mount(<SimplyAwesomeSection />);
        expect(wrapper).toMatchSnapshot();
    });
});
