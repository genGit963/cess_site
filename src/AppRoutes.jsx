import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Members from "./pages/members";
import About from "./pages/about";
import Events from "./pages/events";
import Contact from "./pages/contact";
import Magazine from "./pages/magazine";
import EventsView from "./pages/eventsview";
import Error404 from "./pages/error";

const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/members" element={<Members />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/events/:event_id" element={<EventsView />} />
        <Route path="/magazine" element={<Magazine />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  );
};

export default AppRouter;