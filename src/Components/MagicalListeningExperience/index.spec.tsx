// #region Global Imports
import * as React from "react";
import { mount } from "enzyme";
// #endregion Global Imports

// #region Local Imports
import { MagicalListeningExperience } from "@Components";
// #endregion Local Imports

describe("MagicalListeningExperience", () => {
    it("should match snapshot", () => {
        const wrapper = mount(<MagicalListeningExperience />);
        expect(wrapper).toMatchSnapshot();
    });
});
