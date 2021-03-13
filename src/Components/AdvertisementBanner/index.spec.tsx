// #region Global Imports
import * as React from "react";
import { mount } from "enzyme";
// #endregion Global Imports

// #region Local Imports
import { AdvertisementBanner } from "@Components";
// #endregion Local Imports

describe("AdvertisementBanner", () => {
    it("should match snapshot", () => {
        const wrapper = mount(<AdvertisementBanner />);
        expect(wrapper).toMatchSnapshot();
    });
});
