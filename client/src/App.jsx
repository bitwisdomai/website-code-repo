import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import QualifyingPage from "./pages/QualifyingPage";
import ContactPage from "./pages/ContactPage";
import BlogPage from "./pages/BlogPage";
import ProductsPage from "./pages/ProductsPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import TermsOfServicePage from "./pages/TermsOfServicePage";
import CookiesPolicyPage from "./pages/CookiesPolicyPage";
import FAQPage from "./pages/FAQPage";
import LicenseAgreementPage from "./pages/LicenseAgreementPage";
import AmlKycPolicyPage from "./pages/AmlKycPolicyPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/qualifying" element={<QualifyingPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms-of-service" element={<TermsOfServicePage />} />
        <Route path="/cookies-policy" element={<CookiesPolicyPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/license-agreement" element={<LicenseAgreementPage />} />
        <Route path="/aml-kyc-policy" element={<AmlKycPolicyPage />} />
      </Routes>
    </Router>
  );
}

export default App;
