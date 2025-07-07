import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Bible } from "./pages/Bible";
import { BookChapters } from "./pages/BookChapters";
import { ChapterVerses } from "./pages/ChapterVerses";
import { Rosario } from "./pages/Rosario";
import { Terco } from "./pages/Terco";
import { Oracoes } from "./pages/Oracoes";
import { OracaoDetail } from "./pages/OracaoDetail";
import { ComoLerBiblia } from "./pages/ComoLerBiblia";
import { Anotacoes } from "./pages/Anotacoes";
import { Favoritos } from "./pages/Favoritos";
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
            <Route path="/livro/:bookId" element={<BookChapters />} />
            <Route path="/livro/:bookId/capitulo/:chapterNumber" element={<ChapterVerses />} />
            <Route path="/rosario" element={<Rosario />} />
            <Route path="/terco" element={<Terco />} />
            <Route path="/oracoes" element={<Oracoes />} />
            <Route path="/oracao/:oracaoId" element={<OracaoDetail />} />
            <Route path="/como-ler-biblia" element={<ComoLerBiblia />} />
            <Route path="/anotacoes" element={<Anotacoes />} />
            <Route path="/favoritos" element={<Favoritos />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
