import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './component/Header/Header';
import Home from './component/CommonComponent/Home/Home';
import About from './component/CommonComponent/About/About';
import Contact from './component/CommonComponent/Contact/Contact';
import VideoCallPage from './component/CommonComponent/VideoCall/VideoCallPage';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path='/VideoCallPage' element={<VideoCallPage />}/>
      </Routes>
    </Router>
  );
}

export default App;
