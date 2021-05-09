import React from "react";
import { ThemeProvider } from "@material-ui/styles";
import CounterApplication from "./Pages/CounterApplication";
import Theme from "./Theme/Theme";

function App() {
  return (
    <div>
      <ThemeProvider theme={Theme}>
        <CounterApplication />
      </ThemeProvider>
    </div>
  );
}

export default App;
