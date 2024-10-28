import { createTheme } from "@mui/material/styles";

const ClassicTheme = createTheme({
    components: {
      MuiButton: {
        styleOverrides: {
          containedPrimary: {
            backgroundColor: "#0ca757",
            "&:hover": {
              backgroundColor: "#0a964e",
            },
            "&:active": {
              backgroundColor: "#08743c",
            },
          },
          containedSecondary: {
            backgroundColor: "#1976d2",
            "&:hover": {
              backgroundColor: "#166abd",
            },
            "&:active": {
              backgroundColor: "#115293",
            },
          },
        },
      },
    },
  });

export default ClassicTheme;