import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Bible } from "./pages/Bible";
import { LeituraHoje } from "./pages/LeituraHoje";
import { Rosario } from "./pages/Rosario";
import { Terco } from "./pages/Terco";
import { Missa } from "./pages/Missa";
import { Anotacoes } from "./pages/Anotacoes";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Bible />} />
            <Route path="/leitura-hoje" element={<LeituraHoje />} />
            <Route path="/rosario" element={<Rosario />} />
            <Route path="/terco" element={<Terco />} />
            <Route path="/missa" element={<Missa />} />
            <Route path="/anotacoes" element={<Anotacoes />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
