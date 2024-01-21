import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
//Pages//
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Services from "./Pages/Services/Services";
import Contact from "./Pages/Contact/Contact";

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/portfolio" element={<Portfolio/>} />
          <Route path="/services" element={<Services/>} />
          <Route path="/contact" element={<Contact/>} /> 
        </Routes>
        <Footer/>
    </BrowserRouter>
    </div>
  );
}

export default App;
