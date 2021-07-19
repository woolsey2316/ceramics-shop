// #region Global Imports
import React from "react";
// #endregion Global Imports

// #region Local Imports
import { DropdownContainer, ListWrap } from "./styled";
// #endregion Local Imports

// #region Interface Imports
import { ICategoryDropdown } from "./CategoryDropdown";
// #endregion Interface Imports

export const CategoryDropdown: React.FunctionComponent<ICategoryDropdown.IProps> = (
    props: ICategoryDropdown.IProps
) => {
    const [items] = React.useState([
        { label: "All Categories", value: "All Categories" },
        { label: "Pretium", value: "Pretium" },
        { label: "Venenatis", value: "Venenatis" },
        { label: "Suspendisse", value: "Suspendisse" },
        { label: "Feugiat", value: "Feugiat" },
        { label: "Faucibus", value: "Faucibus" },
    ]);
    const [value, setValue] = React.useState<string>("All Categories");
    return (
        <DropdownContainer
            value={value}
            onChange={e => setValue(e.currentTarget.value)}
        >
            {items.map(({ label, value }) => (
                <ListWrap key={value} value={value}>
                    {label}
                </ListWrap>
            ))}
        </DropdownContainer>
    );
};
