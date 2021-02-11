// #region Global Imports
import * as React from "react";
import { mount } from "enzyme";
// #endregion Global Imports

// #region Local Imports
import { TopBarItemSearch } from "@Components";
// #endregion Local Imports

describe("TopBarItemSearch", () => {
    it("should match snapshot", () => {
        const wrapper = mount(<TopBarItemSearch />);
        expect(wrapper).toMatchSnapshot();
    });
});
