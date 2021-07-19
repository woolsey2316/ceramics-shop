// #region Global Imports
import * as React from "react";
import { mount } from "enzyme";
// #endregion Global Imports

// #region Local Imports
import { GoodTreblePerformance } from "@Components";
// #endregion Local Imports

describe("GoodTreblePerformance", () => {
    it("should match snapshot", () => {
        const wrapper = mount(<GoodTreblePerformance />);
        expect(wrapper).toMatchSnapshot();
    });
});
