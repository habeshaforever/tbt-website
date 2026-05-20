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
import ManagedStaffingPage from "./pages/solutions/ManagedStaffingPage";
import RecruitingDirectHirePage from "./pages/solutions/RecruitingDirectHirePage";
import BPO from "./pages/BPO";
import CustomerServiceIndustry from "./pages/industries/CustomerServiceIndustry";
import FinancialServicesIndustry from "./pages/industries/FinancialServicesIndustry";
import RolePage from "./pages/roles/RolePage";
import RolesIndexPage from "./pages/roles/RolesIndexPage";
import NotFound from "./pages/NotFound";

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
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/why-tbs" element={<WhyTBS />} />
          <Route path="/why-nearshore" element={<WhyNearshore />} />
          <Route path="/why-colombia" element={<WhyColombia />} />
          <Route path="/our-process" element={<OurProcess />} />
          <Route path="/nearshore-vs-offshore" element={<NearshoreVsOffshore />} />
          <Route path="/about-tbs" element={<AboutTBS />} />
          <Route path="/careers" element={<Careers />} />
          {/* Solutions */}
          <Route path="/solutions/managed-staffing" element={<ManagedStaffingPage />} />
          <Route path="/solutions/recruiting-direct-hire" element={<RecruitingDirectHirePage />} />
          <Route path="/bpo" element={<BPO />} />
          <Route path="/industries/customer-service" element={<CustomerServiceIndustry />} />
          <Route path="/industries/financial-services" element={<FinancialServicesIndustry />} />
          {/* Roles */}
          <Route path="/roles" element={<RolesIndexPage />} />
          <Route path="/roles/:category" element={<RolePage />} />
          {/* Legacy redirect from old staffing URLs */}
          <Route path="/staffing/:category" element={<StaffingRedirect />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
