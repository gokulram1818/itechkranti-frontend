import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"
import Home from "./pages/Home";
import Footer from "./components/Footer";
import RegisterForm from "./pages/RegisterForm";
import  Events  from "./pages/Events.jsx";
import ChipperChase from "./pages/chipperChase.jsx";
import CodeRelay from "./pages/codeRelay.jsx";

import PromptEngineering from "./pages/promptEngineering.jsx";
import MemeMania from "./pages/memeMania.jsx";
import Mindscape from "./pages/mindScape.jsx";
import TechSpirit from "./pages/techScripit.jsx";

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/events" element={<Events />} />
        <Route path="/events/chipperChase" element={<ChipperChase />} />
        <Route path="/events/codeRelay" element={<CodeRelay />} />
        <Route path="/events/promptEngineering" element={<PromptEngineering />} />
        <Route path="/events/memeMania" element={<MemeMania />} />
        <Route path="/events/mindScape" element={<Mindscape />} />
        <Route path="/events/techSpirit" element={<TechSpirit />} />


      </Routes>
      <Footer/>
    </>
  );
};

export default App;


