import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import Input from "../components/Input";
import * as z from "zod";
import Button from "../components/Button";

interface FormData {
  firstName: string;
  lastName: string;
  age: number;
  country: string;
  state?: string;
  consent: boolean;
}

const defaultValues = {
  firstName: "",
  lastName: "",
  age: 0,
  country: "",
  state: "",
  consent: false,
};

// define schemas for each step
const stepOneSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
});

const stepTwoSchema = z.object({
  age: z.preprocess(
    (value) => (typeof value === "string" ? Number(value) : value),
    z.number().min(18, "You must be at least 18").positive()
  ),
  country: z.string().min(1, "Country is required"),
  state: z.string().optional(),
});

const stepThreeSchema = z.object({
  consent: z
    .boolean()
    .refine((value) => value === true, "You must accept the terms"),
});

const validationSchemas = [stepOneSchema, stepTwoSchema, stepThreeSchema];

const Task3: React.FC = () => {
  const [step, setStep] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [showStateField, setShowStateField] = useState<boolean>(false);

  const methods = useForm<FormData>({
    resolver: zodResolver(validationSchemas[step]),
    mode: "onTouched",
    defaultValues,
  });

  const onNextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const onPreviousStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const onSubmit = async () => {
    // simulate form submission
    setLoading(true);
    setTimeout(() => {
      console.log("Form submitted:", methods.getValues());
      setLoading(false);
      alert("Form successfully submitted!");
    }, 2000);
  };

  return (
    <div className="multi-step-form">
      <h2>Step {step + 1} of 3</h2>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(step === 2 ? onSubmit : onNextStep)}
        >
          {step === 0 && (
            <div>
              <Input
                label="First Name"
                {...methods.register("firstName")}
                helperText={methods.formState.errors.firstName?.message}
              />
              <Input
                label="Last Name"
                {...methods.register("lastName")}
                helperText={methods.formState.errors.lastName?.message}
              />
            </div>
          )}

          {step === 1 && (
            <div>
              <Input
                label="Age"
                type="number"
                {...methods.register("age")}
                helperText={methods.formState.errors.age?.message}
              />
              <div>
                <label>Country:</label>
                <select
                  {...methods.register("country")}
                  onChange={(e) => setShowStateField(!!e.target.value)}
                >
                  <option value="">Select</option>
                  <option value="USA">USA</option>
                  <option value="Canada">Canada</option>
                </select>
                <p>{methods.formState.errors.country?.message}</p>
              </div>

              {showStateField && (
                <Input label="State" {...methods.register("state")} />
              )}
            </div>
          )}

          {step === 2 && (
            <div>
              <div>
                <label>
                  <input type="checkbox" {...methods.register("consent")} />I
                  agree to the terms and conditions
                </label>
                <p>{methods.formState.errors.consent?.message}</p>
              </div>
            </div>
          )}

          <div
            className="form-navigation"
            style={{
              display: "flex",
              flexDirection: "row-reverse",
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            <Button type="submit" disabled={loading}>
              {step === 2 ? "Submit" : "Next"}
            </Button>
            {step > 0 && (
              <Button type="button" onClick={onPreviousStep}>
                Back
              </Button>
            )}
          </div>
        </form>
      </FormProvider>

      {loading && <p>Loading...</p>}
    </div>
  );
};

export default Task3;
