
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Question1 from "./pages/Question1";
import Question2 from "./pages/Question2";
import Question3 from "./pages/Question3";
import Question4 from "./pages/Question4";
import Question5 from "./pages/Question5";
import Question6 from "./pages/Question6";
import Question7 from "./pages/Question7";
import Confirmation from "./pages/Confirmation";
import Reviews from "./pages/Reviews";
import FinalQuestion from "./pages/FinalQuestion";
import Analysis1 from "./pages/Analysis1";
import Analysis2 from "./pages/Analysis2";
import Email from "./pages/Email";
import SalesPage from "./pages/SalesPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/confirmacao" element={<Confirmation />} />
          <Route path="/avaliacoes" element={<Reviews />} />
          <Route path="/1" element={<Question1 />} />
          <Route path="/2" element={<Question2 />} />
          <Route path="/3" element={<Question3 />} />
          <Route path="/4" element={<Question4 />} />
          <Route path="/5" element={<Question5 />} />
          <Route path="/6" element={<Question6 />} />
          <Route path="/7" element={<Question7 />} />
          <Route path="/pergunta-final" element={<FinalQuestion />} />
          <Route path="/analise1" element={<Analysis1 />} />
          <Route path="/analise2" element={<Analysis2 />} />
          <Route path="/email" element={<Email />} />
          <Route path="/pv" element={<SalesPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
