import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar'
import About from "./pages/About";
import Projects from "./pages/Projects";
import NumberGuessing from "./pages/projects/NumberGuessing";
import MagicEightBall from "./pages/projects/MagicEightBall";
import CustomList from "./pages/projects/CustomList";
import Calendar from "./pages/projects/Calendar";
import ColorBoxes from "./pages/projects/ColorBoxes/ColorBoxes";
import ScoreKeeper from "./pages/projects/ScoreKeeper/ScoreKeeper";

import './App.css'

function App() {

  return (
    <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<About />} />  {/* Default page */}
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />

          <Route path="/numberGuessing" element={<NumberGuessing />} />  
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/magicEightBall" element={<MagicEightBall />} />
          <Route path="/customList" element={<CustomList />} />
          <Route path="/colorBoxes" element={<ColorBoxes />} />
          <Route path="/scoreKeeper" element={<ScoreKeeper />} />
        </Routes>
    </Router>
  )
}

export default App
