import { FC, useState } from "react";
import Button from "./components/Button";
import { lightTheme, darkTheme } from "./theme";
import { ThemeProvider } from "@emotion/react";
import Card from "./components/Card";
import Input from "./components/Input";

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
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '2rem'
        }}>
          <Card ariaLabel="Example Card">
            <h2>This is a Card</h2>
            <p>Card content goes here.</p>
          </Card>
          <Input
            label="Username"
            id="username"
            type="text"
            placeholder="Enter your username"
          />
          <Button text="Click Me" onClick={() => alert("Button Clicked!")} />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;
