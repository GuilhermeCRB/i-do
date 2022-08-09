import { BrowserRouter, Routes, Route } from "react-router-dom";

import SignIn from "./components/SignIn/SignIn.js";

import UrlContext from "../Contexts/UrlContext.js";

function App() {
  const BASE_BACK_URL = "http://localhost:5000/";

  return (
    <UrlContext.Provider value={BASE_BACK_URL}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </UrlContext.Provider>
  )
};

export default App;
