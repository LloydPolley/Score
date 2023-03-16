import logo from "./logo.svg";
import "./App.scss";
import { QueryClient, QueryClientProvider } from "react-query";
import NavRoutes from "./routes/NavRoutes";
import Navigation from "./components/Navigation/Navigation";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Navigation />
      <div className="app">
        <NavRoutes />
      </div>
    </QueryClientProvider>
  );
}

export default App;
