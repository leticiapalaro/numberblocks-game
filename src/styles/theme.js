import { unstable_createMuiStrictModeTheme } from "@mui/material";

const theme = unstable_createMuiStrictModeTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        body: {
          background: "url('/img/background.png')",
          color: '#faebd7',
          fontFamily: 'Dosis, sans-serif',
          letterSpacing: '2px',
          fontSize: 'larger',
          margin: 0,
          padding: 0,
          border: 0,
        },
      },
    },
  },
});

export default theme