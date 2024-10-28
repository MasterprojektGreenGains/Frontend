import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import { ThemeProvider } from "@mui/material/styles";
import AppContainer from "./AppContainer";
import ClassicTheme from "../themes/ClassicTheme";

const App = () => {
  return (
    <ThemeProvider theme={ClassicTheme}>
      <AppContainer>
        <Router>
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </Router>
      </AppContainer>
    </ThemeProvider>
  );
};

export default App;
