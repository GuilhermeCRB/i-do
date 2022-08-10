import { BrowserRouter, Routes, Route } from "react-router-dom";

import PrivateRoute from "./components/PrivateRoute/PrivateRoute.js";
import SignUp from "./components/SignUp/SignUp.js";
import SignIn from "./components/SignIn/SignIn.js";
import Home from "./components/Home/Home.js";

import { UserProvider } from "../Contexts/UserContext.js";
import UrlContext from "../Contexts/UrlContext.js";

function App() {
  const BASE_BACK_URL = "http://localhost:5002/";

  return (
    <UrlContext.Provider value={BASE_BACK_URL}>
      <UserProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>} />
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </UrlContext.Provider>
  )
};

export default App;
