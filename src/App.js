import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Main from "./pages/Main";
import NotFound from "./pages/NotFound";
import Job from "./pages/Job";
import Welfare from "./pages/Welfare";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/" element={<Main />} />
          <Route path="/job" element={<Job />} />
          <Route path="/welfare" element={<Welfare />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
