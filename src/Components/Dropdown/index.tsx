// #region Global Imports
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { AU, US, CA, EU, GB } from 'country-flag-icons/react/3x2'

// #endregion Global Imports

// #region Local Imports
import { 
    Main,
    DropdownContainer,
    DropdownHeader,
    DropdownListContainer,
    DropdownList,
    ListItem 
} from './styled'
// #endregion Local Imports

// #region Interface Imports
import { IDropdown } from "./Dropdown";
// #endregion Interface Imports

type CountryCode = string;

const options: Record<CountryCode, JSX.Element> = {
  "AUD": <AU style={{width: '30px', marginRight: '15px'}} />,
  "USD": <US style={{width: '30px', marginRight: '15px'}} />,
  "CAD": <CA style={{width: '30px', marginRight: '15px'}} />,
  "EUR": <US style={{width: '30px', marginRight: '15px'}} />,
  "GBR": <GB style={{width: '30px', marginRight: '15px'}} />
};

export const Dropdown: React.FunctionComponent<
    IDropdown.IProps
> = (props: IDropdown.IProps) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [selectedOption, setSelectedOption] = React.useState<string>("AUD");

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (value: React.SetStateAction<string>) => () => {
    setSelectedOption(value);
    setIsOpen(false);
    console.log(selectedOption);
  };

  return (
    <Main>
      <DropdownContainer>
        <DropdownHeader onClick={toggling}>
          {options[selectedOption]}
          {selectedOption}
          <FontAwesomeIcon className="fa-xs ml-2" icon={["fas","chevron-down"]}/>
        </DropdownHeader>
        {isOpen && (
          <DropdownListContainer>
            <DropdownList>
              {Object.entries(options).map((option: [string, JSX.Element]) => (
                <ListItem onClick={onOptionClicked(option[0])} key={Math.random()}>
                  {option[1]}
                  {option[0]}
                </ListItem>
              ))}
            </DropdownList>
          </DropdownListContainer>
        )}
      </DropdownContainer>
    </Main>
  );
};
  