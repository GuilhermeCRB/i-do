import { createContext, useState } from "react";

const MenuContext = createContext();

const MenuProvider = ({ children }) => {
    const [active, setActive] = useState(true);
    const [activeNav, setActiveNav] = useState(true); // if same state is used, side menu is displayed with nav bar

    return (
        <MenuContext.Provider value={{active, setActive, activeNav, setActiveNav}}>{children}</MenuContext.Provider>
    );
};

export { MenuContext, MenuProvider };