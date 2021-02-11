// #region Global Imports
import * as React from "react";
import { mount } from "enzyme";
// #endregion Global Imports

// #region Local Imports
import { Banner } from "@Components";
// #endregion Local Imports

describe("Banner", () => {
    it("should match snapshot", () => {
        const wrapper = mount(<Banner />);
        expect(wrapper).toMatchSnapshot();
    });
});
