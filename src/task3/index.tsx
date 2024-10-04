import { FC, useState } from "react";

const Task3: FC = () => {
  // Create formData state with name, email etc.
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  // handle errors state
  const [errors, setErrors] = useState({});

  // Create a validate function to check if name, email etc. are not empty
  const validate = () => {
  };

  return <div>Task 3</div>;
};

export default Task3;