import { HashRouter, Routes, Route } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { SocialProofPopup } from "@/components/SocialProofPopup";
import { HomePage } from "@/pages/HomePage";
import { BlogPage } from "@/pages/BlogPage";
import { BlogArticlePage } from "@/pages/BlogArticlePage";
import { TermsPage } from "@/pages/TermsPage";
import { PrivacyPage } from "@/pages/PrivacyPage";

export default function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogArticlePage />} />
            <Route path="/ketentuan-penggunaan" element={<TermsPage />} />
            <Route path="/kebijakan-privasi" element={<PrivacyPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>
        <Footer />
        <SocialProofPopup />
      </div>
    </HashRouter>
  );
}
