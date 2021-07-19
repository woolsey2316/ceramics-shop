// #region Global Imports
import * as React from "react";
import { mount } from "enzyme";
// #endregion Global Imports

// #region Local Imports
import { ArticleHeader } from "@Components";
// #endregion Local Imports

describe("ArticleHeader", () => {
    it("should match snapshot", () => {
        const wrapper = mount(<ArticleHeader />);
        expect(wrapper).toMatchSnapshot();
    });
});
