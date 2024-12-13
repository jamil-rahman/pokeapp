import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Media from './pages/Media';
import About from './pages/About';
import './index.css';
import Footer from './components/Footer';

export default function App() {
  return (
    <Router>
      <div className="app">
        <Navigation />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/media" element={<Media />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </Router>
  );
}