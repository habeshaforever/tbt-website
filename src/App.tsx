import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useParams } from "react-router-dom";
import Index from "./pages/Index";
import Contact from "./pages/Contact";
import WhyTBS from "./pages/WhyTBS";
import WhyNearshore from "./pages/WhyNearshore";
import WhyColombia from "./pages/WhyColombia";
import OurProcess from "./pages/OurProcess";
import NearshoreVsOffshore from "./pages/NearshoreVsOffshore";
import AboutTBS from "./pages/AboutTBS";
import Careers from "./pages/Careers";
import AIHiring from "./pages/AIHiring";
import AITrainingTeams from "./pages/AITrainingTeams";
import ManagedStaffingPage from "./pages/solutions/ManagedStaffingPage";
import RecruitingDirectHirePage from "./pages/solutions/RecruitingDirectHirePage";
import BPO from "./pages/BPO";
import CustomerServiceIndustry from "./pages/industries/CustomerServiceIndustry";
import FinancialServicesIndustry from "./pages/industries/FinancialServicesIndustry";
import HealthcareIndustry from "./pages/industries/HealthcareIndustry";
import LegalServicesIndustry from "./pages/industries/LegalServicesIndustry";
import ITSoftwareIndustry from "./pages/industries/ITSoftwareIndustry";
import MarketingIndustry from "./pages/industries/MarketingIndustry";
import LogisticsIndustry from "./pages/industries/LogisticsIndustry";
import ManufacturingIndustry from "./pages/industries/ManufacturingIndustry";
import ProfessionalServicesIndustry from "./pages/industries/ProfessionalServicesIndustry";
import SaaSIndustry from "./pages/industries/SaaSIndustry";
import EcommerceIndustry from "./pages/industries/EcommerceIndustry";
import RealEstateIndustry from "./pages/industries/RealEstateIndustry";
import RolePage from "./pages/roles/RolePage";
import RolesIndexPage from "./pages/roles/RolesIndexPage";
import NotFound from "./pages/NotFound";
import { ScrollToTop } from "./components/ScrollToTop";
import { PreviewBanner } from "./components/PreviewBanner";
import ResourcesHub from "./pages/resources/ResourcesHub";
import Blog from "./pages/resources/Blog";
import BlogPost from "./pages/resources/BlogPost";
import CaseStudies from "./pages/resources/CaseStudies";
import CaseStudyDetail from "./pages/resources/CaseStudyDetail";
import HiringGuides from "./pages/resources/HiringGuides";
import Insights from "./pages/resources/Insights";

const queryClient = new QueryClient();

// Legacy redirect component for old staffing URLs
const StaffingRedirect = () => {
  const { category } = useParams<{ category: string }>();
  return <Navigate to={`/roles/${category}`} replace />;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <PreviewBanner />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/book" element={<Contact />} />
          <Route path="/contact" element={<Navigate to="/book" replace />} />
          <Route path="/why-tbt" element={<WhyTBS />} />
          <Route path="/why-tbs" element={<Navigate to="/why-tbt" replace />} />
          <Route path="/why-nearshore" element={<WhyNearshore />} />
          <Route path="/why-colombia" element={<WhyColombia />} />
          <Route path="/our-process" element={<OurProcess />} />
          <Route path="/nearshore-vs-offshore" element={<NearshoreVsOffshore />} />
          <Route path="/our-story" element={<AboutTBS />} />
          <Route path="/about-tbt" element={<Navigate to="/our-story" replace />} />
          <Route path="/about-tbs" element={<Navigate to="/our-story" replace />} />
          <Route path="/careers" element={<Careers />} />
          {/* Solutions */}
          <Route path="/solutions/managed-staffing" element={<ManagedStaffingPage />} />
          <Route path="/solutions/recruiting-direct-hire" element={<RecruitingDirectHirePage />} />
          <Route path="/bpo" element={<BPO />} />
          <Route path="/industries/customer-service" element={<CustomerServiceIndustry />} />
          <Route path="/industries/financial-services" element={<FinancialServicesIndustry />} />
          <Route path="/industries/healthcare" element={<HealthcareIndustry />} />
          <Route path="/industries/legal" element={<LegalServicesIndustry />} />
          <Route path="/industries/it-software" element={<ITSoftwareIndustry />} />
          <Route path="/industries/marketing" element={<MarketingIndustry />} />
          <Route path="/industries/logistics" element={<LogisticsIndustry />} />
          <Route path="/industries/manufacturing" element={<ManufacturingIndustry />} />
          <Route path="/industries/professional-services" element={<ProfessionalServicesIndustry />} />
          <Route path="/industries/saas" element={<SaaSIndustry />} />
          <Route path="/industries/ecommerce" element={<EcommerceIndustry />} />
          <Route path="/industries/real-estate" element={<RealEstateIndustry />} />
          {/* Resources */}
          <Route path="/resources" element={<ResourcesHub />} />
          <Route path="/resources/blog" element={<Blog />} />
          <Route path="/resources/blog/:slug" element={<BlogPost />} />
          <Route path="/resources/case-studies" element={<CaseStudies />} />
          <Route path="/resources/case-studies/:slug" element={<CaseStudyDetail />} />
          <Route path="/resources/hiring-guides" element={<HiringGuides />} />
          <Route path="/resources/insights" element={<Insights />} />
          {/* Roles */}
          <Route path="/roles" element={<RolesIndexPage />} />
          <Route path="/roles/:category" element={<RolePage />} />
          {/* Legacy redirect from old staffing URLs */}
          <Route path="/staffing/:category" element={<StaffingRedirect />} />
          <Route path="/ai-hiring" element={<AIHiring />} />
          <Route path="/ai-training-teams" element={<AITrainingTeams />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
