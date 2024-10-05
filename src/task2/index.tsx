import { FC, useState } from "react";
import Button from "./components/Button";
import { lightTheme, darkTheme } from "./theme";
import { ThemeProvider } from "@emotion/react";

const App: FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <button onClick={() => setIsDarkMode(!isDarkMode)}>Toggle Theme</button>
      <div
        style={{
          backgroundColor: isDarkMode
            ? darkTheme.colors.background
            : lightTheme.colors.background,
          padding: "20px",
        }}
      >
        <Button text="Click Me" onClick={() => alert("Button Clicked!")} />
      </div>
    </ThemeProvider>
  );
};

export default App;
