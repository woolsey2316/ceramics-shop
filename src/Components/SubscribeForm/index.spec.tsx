// #region Global Imports
import * as React from "react";
import { mount } from "enzyme";
// #endregion Global Imports

// #region Local Imports
import { SubscribeForm } from "@Components";
// #endregion Local Imports

describe("SubscribeForm", () => {
    it("should match snapshot", () => {
        const wrapper = mount(<SubscribeForm />);
        expect(wrapper).toMatchSnapshot();
    });
});
