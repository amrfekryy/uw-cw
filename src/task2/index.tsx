import { FC, useState } from "react";
import Button from "./components/Button";
import Card from "./components/Card";
import Input from "./components/Input";

const App: FC = () => {
  return (
    <div
      style={{
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
      }}
    >
      <h3>
        Note: Theme is implemented globaly, and theme toggler is on the top
        right corner
      </h3>
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
  );
};

export default App;
