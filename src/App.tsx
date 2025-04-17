import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Homepage from "./pages/homepage/index";
import About from "./pages/about/index";
import Island from "./pages/island/index";
import Blog from "./pages/blog/index";
import Contact from "./pages/contact";
import PrivacyPolicy from "./pages/privacypolicy";
import PrivacyPolicy_App from "./pages/privacypolicy/index_app";
import Article from "./pages/article";
import NotFound from "./pages/notfound";
import Nacre from "./pages/nacre";
import Pro from "./pages/pro";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sector from "./pages/sectors";
import Career from "./pages/career/Index";
import Partners from "./pages/partners/Index";

const Container: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className="container mx-auto px-4 sm:px-12  md:px-16 lg:px-32">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Container>
        <Routes>
          {/* <Container> */}
          <Route path="/" element={<Homepage />} />
          <Route path="/Sectors" element={<Sector />} />
          <Route path="/Career" element={<Career />} />
          <Route path="/Partners" element={<Partners />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/privacy_app" element={<PrivacyPolicy_App />} />
          <Route path="/Blog/:id" element={<Article />} />
          <Route element={<NotFound />} />
          {/* </Container> */}
        </Routes>
      </Container>
    </BrowserRouter>
  );
};

export default App;
