import { BrowserRouter, Routes, Route } from "react-router-dom";

import SignUp from "./components/SignUp/SignUp.js";
import SignIn from "./components/SignIn/SignIn.js";

import UrlContext from "../Contexts/UrlContext.js";

function App() {
  const BASE_BACK_URL = "http://localhost:5000/";

  return (
    <UrlContext.Provider value={BASE_BACK_URL}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </UrlContext.Provider>
  )
};

export default App;
