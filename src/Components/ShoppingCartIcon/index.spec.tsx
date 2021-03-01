// #region Global Imports
import * as React from "react";
import { mount } from "enzyme";
// #endregion Global Imports

// #region Local Imports
import { ShoppingCartIcon } from "@Components";
// #endregion Local Imports

describe("ShoppingCartIcon", () => {
    it("should match snapshot", () => {
        const wrapper = mount(<ShoppingCartIcon />);
        expect(wrapper).toMatchSnapshot();
    });
});
