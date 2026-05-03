import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";

import Home from "./pages/Home";
import Test from "./pages/Test";
import Results from "./pages/Results";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Wiki from "./pages/Wiki";
import Updates from "./pages/Updates";
import About from "./pages/About";
import Privacy from "./pages/Privacy";
import Disclaimer from "./pages/Disclaimer";
import Contact from "./pages/Contact";
import Careers from "./pages/Careers";
import Methodology from "./pages/Methodology";
import Science from "./pages/Science";
import Terms from "./pages/Terms";
import CookiePolicy from "./pages/CookiePolicy";
import Author from "./pages/Author";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/test" component={Test} />
      <Route path="/results/:id" component={Results} />
      <Route path="/blog" component={Blog} />
      <Route path="/blog/:slug" component={BlogPost} />
      <Route path="/wiki" component={Wiki} />
      <Route path="/updates" component={Updates} />
      <Route path="/about" component={About} />
      <Route path="/privacy" component={Privacy} />
      <Route path="/disclaimer" component={Disclaimer} />
      <Route path="/contact" component={Contact} />
      <Route path="/careers" component={Careers} />
      <Route path="/methodology" component={Methodology} />
      <Route path="/science" component={Science} />
      <Route path="/terms" component={Terms} />
      <Route path="/cookies" component={CookiePolicy} />
      <Route path="/author" component={Author} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
