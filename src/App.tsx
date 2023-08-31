import React, { ReactNode, useMemo, useState } from 'react';
import './App.css'
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./features/theme/theme";
import { GlobalStyles } from "./globalStyles";
import { Button, createTheme, PaletteMode, ThemeProvider as MuiThemeProvider } from "@mui/material";

function App({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState('light')
  const [mode, setMode] = React.useState<PaletteMode>('light');
  const muiTheme = useMemo(() => createTheme({ palette: { mode } }), [mode])
  const themeToggler = () => {
    if (theme === 'light') {
      setTheme('dark')
      setMode('dark')
    } else {
      setTheme('light')
      setMode('light')
    }
  }

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <MuiThemeProvider theme={muiTheme}>
        <div id="App">
          <Button variant='contained' onClick={themeToggler}>Switch Theme</Button>
          {children}
        </div>
      </MuiThemeProvider>
    </ThemeProvider>
  );
}

export default App;
