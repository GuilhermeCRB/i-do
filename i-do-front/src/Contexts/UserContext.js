import { createContext, useState } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem("i_do_token"));

    return (
        <UserContext.Provider value={{token, setToken}}>{children}</UserContext.Provider>
    );
};

export { UserContext, UserProvider };