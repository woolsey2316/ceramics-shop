// #region Global Imports
import * as React from "react";
import { mount } from "enzyme";
// #endregion Global Imports

// #region Local Imports
import { BlogTile } from "@Components";
// #endregion Local Imports

describe("BlogTile", () => {
    it("should match snapshot", () => {
        const wrapper = mount(<BlogTile />);
        expect(wrapper).toMatchSnapshot();
    });
});
