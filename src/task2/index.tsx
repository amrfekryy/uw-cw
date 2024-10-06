import { FC, useState } from "react";
import Button from "../components/Button";
import Card from "../components/Card";
import Input from "../components/Input";
import Select from "../components/Select";

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
      <div>
        <h3>Button Component</h3>
        <Button onClick={() => alert("Button Clicked!")}>Click Me</Button>
      </div>
      <div>
        <h3>Card Component</h3>
        <Card ariaLabel="Example Card">
          <h2>This is a Card</h2>
          <p>Card content goes here.</p>
        </Card>
      </div>
      <div>
        <h3>Input Component</h3>
        <Input
          label="Label"
          id="label"
          type="text"
          placeholder="Placeholder"
        />
      </div>
      <div>
        <h3>Select Component</h3>
        <Select label="How would you assess Amr's skills?" id="performace">
          {["Phenomenal", "Exceptional", "Outstanding"].map((d) => (
            <option key={d} value={d}>
              {d}
            </option>
          ))}
        </Select>
      </div>
      <h3>
        Note: Theme is implemented globaly, and theme toggler is on the top
        right corner
      </h3>
    </div>
  );
};

export default App;
