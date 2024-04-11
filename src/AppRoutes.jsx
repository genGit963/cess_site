import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Members from "./pages/members";
import About from "./pages/about";
import Events from "./pages/events";
import Other from "./pages/other";
import Contact from "./pages/contact";
import Magazine from "./pages/magazine";


const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/members" element={<Members />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/others" element={<Other />} />
        <Route path="/magazine" element={<Magazine />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default AppRouter;
