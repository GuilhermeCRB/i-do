import { createContext, useState } from "react";

const MenuContext = createContext();

const MenuProvider = ({ children }) => {
    const [active, setActive] = useState(true);

    return (
        <MenuContext.Provider value={{active, setActive}}>{children}</MenuContext.Provider>
    );
};

export { MenuContext, MenuProvider };