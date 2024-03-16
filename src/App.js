
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Singlepost from "./components/Singlepost";
import Contact from "./components/Contact";
import Search from "./components/Search";
import Category from "./components/Category";
import NotFound from "./components/NotFound";
function App() {
  return (
    <>
    <Router>
    <Navbar />
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/sinle-post" element={<Singlepost />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/search" element={<Search />} />
        <Route path="/business" element={<Category />} />
        <Route path="*" element={<NotFound />} />
     </Routes>
    <Footer />
    </Router>
    </>
  );
}

export default App;
