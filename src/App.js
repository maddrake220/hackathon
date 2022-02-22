import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Job from "./pages/Job";
import Center from "./pages/Center";
import Favorites from "./pages/Favorites";
import Detail from "./components/Detail";
import CenterList from "./pages/CenterList";
import JobList from "./pages/JobList";
import Resume from "./pages/Resume";
import ApplyInquiry from "./pages/ApplyInquiry";
import JobFavorites from "./pages/JobFavorites";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/" element={<Job />} />
          <Route path="/list" element={<JobList />}>
            <Route path="/list/favorites" element={<JobFavorites />} />
          </Route>
          <Route path="/resume" element={<Resume />} />
          <Route path="/applyinquiry" element={<ApplyInquiry />} />
          <Route path="/center" element={<Center />}>
            <Route path="/center/list" element={<CenterList />} />
            <Route path="/center/favorites" element={<Favorites />} />
          </Route>
          <Route path="detail">
            <Route path=":id" element={<Detail />} />
          </Route>
          <Route path="/favorites" element={<Favorites />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
