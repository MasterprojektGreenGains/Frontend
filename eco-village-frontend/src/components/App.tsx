import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const App = () => {

  const theme = createTheme({
    palette: {
      primary: {
        main: '#357a38'
      },
      secondary: {
        main: '#1976d2'
      }
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
