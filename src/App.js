import { Routes, Route } from "react-router-dom";
import Activities from "./pages/Activities.js";
import Contact from "./pages/Contact.js";
import Education from "./pages/Education.js";
import Experience from "./pages/Experience.js";
import Home from "./pages/Home.js";
import Projects from "./pages/Projects.js";
import NavBar from "./components/layout/NavBar.js";
import MainCenteredLayout from "./components/layout/MainCenteredLayout.js";

const App = () => {
  return (
    <div className="app">
      <NavBar />
      <MainCenteredLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/education" element={<Education />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </MainCenteredLayout>
    </div>
  );
};

export default App;
