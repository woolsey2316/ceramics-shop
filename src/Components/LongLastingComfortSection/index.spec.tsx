// #region Global Imports
import * as React from "react";
import { mount } from "enzyme";
// #endregion Global Imports

// #region Local Imports
import { LongLastingComfortSection } from "@Components";
// #endregion Local Imports

describe("LongLastingComfortSection", () => {
    it("should match snapshot", () => {
        const wrapper = mount(<LongLastingComfortSection />);
        expect(wrapper).toMatchSnapshot();
    });
});
