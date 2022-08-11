import { BrowserRouter, Routes, Route } from "react-router-dom";

import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import SignUp from "./components/SignUp/SignUp";
import SignIn from "./components/SignIn/SignIn";
import Home from "./components/Home/Home";

import { UserProvider } from "../Contexts/UserContext";
import { MenuProvider } from "../Contexts/MenuContext";
import UrlContext from "../Contexts/UrlContext";

function App() {
  const BASE_BACK_URL = "http://localhost:5003/";

  return (
    <UrlContext.Provider value={BASE_BACK_URL}>
      <UserProvider>
        <MenuProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/sign-in" element={<SignIn />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>} />
            </Routes>
          </BrowserRouter>
        </MenuProvider>
      </UserProvider>
    </UrlContext.Provider>
  )
};

export default App;
