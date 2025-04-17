import React from "react";
import { Routes, Route, BrowserRouter, useLocation } from "react-router-dom";
import Homepage from "./pages/homepage/index";
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
import SEO from "./components/SEO";
import ErrorBoundary from "./components/ErrorBoundary";

// Composant pour configurer les SEO dynamiquement selon la route
const SEOController: React.FC = () => {
  const location = useLocation();
  const path = location.pathname;

  // Configuration SEO par défaut
  let seoConfig = {};

  // Configurer les SEO en fonction du chemin
  switch (true) {
    case path === "/":
      seoConfig = {
        title: "MAUNN - The desire to change technology",
        description:
          "MAUNN est l'architecte des grandes transformations des entreprises. Nous mettons en relations nos experts avec nos partenaires.",
      };
      break;
    case path === "/Sectors":
      seoConfig = {
        title: "Secteurs d'activités | MAUNN",
        description:
          "Découvrez nos secteurs d'activités. Notre expertise s'étend à travers une multitude d'industries, chacune présentant ses propres défis et opportunités.",
      };
      break;
    case path === "/Career":
      seoConfig = {
        title: "Carrières | MAUNN",
        description:
          "Rejoignez l'équipe MAUNN. Vous êtes passionné par la technologie et vous cherchez à faire partie d'une équipe innovante?",
      };
      break;
    case path === "/Partners":
      seoConfig = {
        title: "Partenaires | MAUNN",
        description:
          "Collaborons pour créer l'avenir ensemble. MAUNN travaille en partenariat avec des entreprises de premier plan.",
      };
      break;
    case path === "/Blog":
      seoConfig = {
        title: "Blog | MAUNN",
        description:
          "Découvrez nos derniers articles et vidéos sur la transformation numérique et l'innovation technologique.",
      };
      break;
    case path === "/Contact":
      seoConfig = {
        title: "Contact | MAUNN",
        description:
          "Contactez-nous. Nous sommes là pour répondre à vos questions et discuter de vos besoins.",
      };
      break;
    case path === "/About":
      seoConfig = {
        title: "À propos | MAUNN",
        description:
          "Découvrez la naissance du projet MAUNN et notre équipe passionnée.",
      };
      break;
    case path === "/Nacre":
      seoConfig = {
        title: "Nacre | MAUNN",
        description:
          "Passez à Nacre - Une version avec des nouvelles fonctionnalités pour votre transformation numérique.",
      };
      break;
    case path === "/Pro":
      seoConfig = {
        title: "Pro | MAUNN",
        description:
          "Solutions professionnelles MAUNN pour les entreprises exigeantes.",
      };
      break;
    case path === "/privacy":
      seoConfig = {
        title: "Politique de confidentialité | MAUNN",
        description:
          "Notre politique de confidentialité décrit comment nous recueillons, utilisons et protégeons vos informations personnelles.",
      };
      break;
    case path.includes("/Blog/"):
      seoConfig = {
        title: "Article | MAUNN Blog",
        description:
          "Découvrez nos articles informatifs sur la transformation numérique et l'innovation technologique.",
      };
      break;
    default:
      seoConfig = {
        title: "MAUNN - The desire to change technology",
        description:
          "MAUNN est l'architecte des grandes transformations des entreprises.",
      };
  }

  return <SEO {...seoConfig} />;
};

const Container: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className="container mx-auto px-4 sm:px-12 md:px-16 lg:px-32">
      <SEOController />
      <Navbar />
      <ErrorBoundary>{children}</ErrorBoundary>
      <Footer />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Container>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Sectors" element={<Sector />} />
          <Route path="/Career" element={<Career />} />
          <Route path="/Partners" element={<Partners />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/privacy_app" element={<PrivacyPolicy_App />} />
          <Route path="/Blog/:id" element={<Article />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
};

export default App;
