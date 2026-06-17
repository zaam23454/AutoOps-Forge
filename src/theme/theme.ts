"use client";

import { createTheme } from "@mui/material/styles";
import { brandTokens } from "./tokens";

export const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: brandTokens.colors.deepSpace,
      paper: brandTokens.colors.darkSlate
    },
    primary: {
      main: brandTokens.colors.electricCyan
    },
    secondary: {
      main: brandTokens.colors.forgeOrange
    },
    text: {
      primary: brandTokens.colors.softWhite,
      secondary: brandTokens.colors.mutedText
    }
  },
  typography: {
    fontFamily: "var(--font-inter), system-ui, sans-serif",
    h1: {
      fontFamily: "var(--font-orbitron), system-ui, sans-serif"
    },
    h2: {
      fontFamily: "var(--font-rajdhani), system-ui, sans-serif"
    },
    h3: {
      fontFamily: "var(--font-rajdhani), system-ui, sans-serif"
    },
    button: {
      fontFamily: "var(--font-share-tech-mono), monospace",
      textTransform: "none"
    }
  },
  shape: {
    borderRadius: brandTokens.layout.cardRadius
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {}
    }
  }
});
