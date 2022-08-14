import { createContext, useState } from "react";

const FilterContext = createContext();

const FilterProvider = ({ children }) => {
    const [filter, setFilter] = useState({place: "", q: ""});

    return (
        <FilterContext.Provider value={{filter, setFilter}}>{children}</FilterContext.Provider>
    );
};

export { FilterContext, FilterProvider };