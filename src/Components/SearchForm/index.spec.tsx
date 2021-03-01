// #region Global Imports
import * as React from "react";
import { mount } from "enzyme";
// #endregion Global Imports

// #region Local Imports
import { SearchForm } from "@Components";
// #endregion Local Imports

describe("SearchForm", () => {
    it("should match snapshot", () => {
        const wrapper = mount(<SearchForm />);
        expect(wrapper).toMatchSnapshot();
    });
});
