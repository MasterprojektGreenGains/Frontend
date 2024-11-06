import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import { ThemeProvider } from "@mui/material/styles";
import ClassicTheme from "../themes/ClassicTheme";
import EcoVillage from "../pages/EcoVillage";

const App = () => {
  return (
    <ThemeProvider theme={ClassicTheme}>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/ecovillage" element={<EcoVillage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
