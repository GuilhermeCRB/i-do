import { BrowserRouter, Routes, Route } from "react-router-dom";

import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import SignUp from "./components/SignUp/SignUp";
import SignIn from "./components/SignIn/SignIn";
import Page from "../App/components/Pages/Page";
import Home from "./components/Pages/Home/Home";
import Suppliers from "./components/Suppliers/Suppliers";
import Account from "./components/Account/Account";
import Budget from "./components/Pages/Budget/Budget";

import { UserProvider } from "../Contexts/UserContext";
import { MenuProvider } from "../Contexts/MenuContext";
import { FilterProvider } from "../Contexts/FilterContext";
import UrlContext from "../Contexts/UrlContext";

function App() {
  let BASE_BACK_URL;
  process.env.REACT_APP_MODE === "DEV" ?
    BASE_BACK_URL = process.env.REACT_APP_BASE_DEV_URL
    :
    BASE_BACK_URL = process.env.REACT_APP_BASE_PROD_URL

  return (
    <UrlContext.Provider value={BASE_BACK_URL}>
      <UserProvider>
        <MenuProvider>
          <FilterProvider>
            <BrowserRouter>
              <Routes>
                <Route path="/sign-in" element={<SignIn />} />
                <Route path="/sign-up" element={<SignUp />} />

                <Route path="/" element={
                    <PrivateRoute>
                      <Page />
                    </PrivateRoute>
                  }
                >
                  <Route path="" element={<Home />} />
                  <Route path="suppliers" element={<Suppliers />} />
                  <Route path="account" element={<Account />} />
                  <Route path="budget" element={<Budget />} />
                </Route>
              </Routes>
            </BrowserRouter>
          </FilterProvider>
        </MenuProvider>
      </UserProvider>
    </UrlContext.Provider>
  )
};

export default App;
