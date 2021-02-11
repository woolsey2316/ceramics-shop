// #region Global Imports
import React from "react";
// #endregion Global Imports

// #region Local Imports
import { DropdownContainer } from './styled'
// #endregion Local Imports

// #region Interface Imports
import { IDropdown } from "./Dropdown";
// #endregion Interface Imports

export const Dropdown: React.FunctionComponent<
    IDropdown.IProps
> = (props: IDropdown.IProps) => {

    const [items] = React.useState([
        { label: "AUD", value: "AUD"},
        { label: "USD", value: "USD"},
        { label: "GBR", value: "GBR"},
        { label: "EUR", value: "EUR"},
        { label: "CAD", value: "CAD"}
      ]);
      const [value, setValue] = React.useState<string>("AUD");
      return (
          <DropdownContainer
              value={value}
              onChange={e => setValue(e.currentTarget.value)}>
              {items.map(({ label, value }) => (
              <option key={value} value={value}>
                  {label}
              </option>
              ))}
          </DropdownContainer>
      );
};
  