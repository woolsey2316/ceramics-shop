// #region Global Imports
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactCountryFlag from "react-country-flag";

// #endregion Global Imports

// #region Local Imports
import {
    Main,
    DropdownContainer,
    DropdownHeader,
    DropdownListContainer,
    DropdownList,
    ListItem,
} from "./styled";
// #endregion Local Imports

// #region Interface Imports
import { IDropdown } from "./Dropdown";
// #endregion Interface Imports

type CountryCode = string;

const options: Record<CountryCode, JSX.Element> = {
    AUD: (
        <ReactCountryFlag
            countryCode="AU"
            style={{ width: "30px", marginRight: "15px" }}
        />
    ),
    USD: (
        <ReactCountryFlag
            countryCode="US"
            style={{ width: "30px", marginRight: "15px" }}
        />
    ),
    CAD: (
        <ReactCountryFlag
            countryCode="CA"
            style={{ width: "30px", marginRight: "15px" }}
        />
    ),
    EUR: (
        <ReactCountryFlag
            countryCode="EU"
            style={{ width: "30px", marginRight: "15px" }}
        />
    ),
    GBR: (
        <ReactCountryFlag
            countryCode="GB"
            style={{ width: "30px", marginRight: "15px" }}
        />
    ),
};

export const Dropdown: React.FunctionComponent<IDropdown.IProps> = () => {
    const [isOpen, setIsOpen] = React.useState<boolean>(false);
    const [selectedOption, setSelectedOption] = React.useState<string>("AUD");

    const toggling = () => setIsOpen(!isOpen);

    const onOptionClicked = (value: React.SetStateAction<string>) => () => {
        setSelectedOption(value);
        setIsOpen(false);
    };

    return (
        <Main>
            <DropdownContainer>
                <DropdownHeader onClick={toggling}>
                    {options[selectedOption]}
                    {selectedOption}
                    <FontAwesomeIcon
                        className="fa-xs ml-2"
                        icon={["fas", "chevron-down"]}
                    />
                </DropdownHeader>
                {isOpen && (
                    <DropdownListContainer>
                        <DropdownList>
                            {Object.entries(options).map(
                                (option: [string, JSX.Element]) => (
                                    <ListItem
                                        onClick={onOptionClicked(option[0])}
                                        key={Math.random()}
                                    >
                                        {option[1]}
                                        {option[0]}
                                    </ListItem>
                                )
                            )}
                        </DropdownList>
                    </DropdownListContainer>
                )}
            </DropdownContainer>
        </Main>
    );
};
