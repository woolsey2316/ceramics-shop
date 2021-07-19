// #region Global Imports
import * as React from "react";
import { mount } from "enzyme";
// #endregion Global Imports

// #region Local Imports
import { SubscribeSection } from "@Components";
// #endregion Local Imports

describe("SubscribeSection", () => {
    it("should match snapshot", () => {
        const wrapper = mount(<SubscribeSection />);
        expect(wrapper).toMatchSnapshot();
    });
});
