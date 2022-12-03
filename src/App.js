import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact.js";
import Home from "./pages/Home.js";
import NavBar from "./components/layout/NavBar.js";
import MainCenteredLayout from "./components/layout/MainCenteredLayout.js";
import Footer from "./components/layout/Footer";
import CustomParticles from "./components/layout/CustomParticles";
import Resume from "./pages/Resume";

const App = () => {
  return (
    <div className="app">
      <CustomParticles />
      <div className="app__inner-container">
        <NavBar />
        <MainCenteredLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </MainCenteredLayout>
      </div>
      <Footer />
    </div>
  );
};

export default App;
