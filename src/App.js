import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Root from './pages/Root';
import About from './pages/About';
import Contact from './pages/Contact';
import Submit from './pages/Submit';
import Credits from './pages/Credits';


function App() {
  const links = [
    { title: 'Submit a Poster', path: '/submit' },
    //{ title: 'Contact', path: '/contact' },
    //{ title: 'About', path: '/about' },
    //{ title: 'Credits', path: '/credits' },
  ]

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Root links={links} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/submit" element={<Submit />} />
        <Route path="/credits" element={<Credits />} />
      </Routes>
    </Router>
  );
}

export default App;