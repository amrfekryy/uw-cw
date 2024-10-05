import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import * as z from "zod";

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
              <div>
                <label>First Name:</label>
                <input {...methods.register("firstName")} />
                <p>{methods.formState.errors.firstName?.message}</p>
              </div>
              <div>
                <label>Last Name:</label>
                <input {...methods.register("lastName")} />
                <p>{methods.formState.errors.lastName?.message}</p>
              </div>
            </div>
          )}

          {step === 1 && (
            <div>
              <div>
                <label>Age:</label>
                <input type="number" {...methods.register("age")} />
                <p>{methods.formState.errors.age?.message}</p>
              </div>
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
                <div>
                  <label>State:</label>
                  <input {...methods.register("state")} />
                </div>
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

          <div className="form-navigation">
            {step > 0 && (
              <button type="button" onClick={onPreviousStep}>
                Back
              </button>
            )}
            <button type="submit" disabled={loading}>
              {step === 2 ? "Submit" : "Next"}
            </button>
          </div>
        </form>
      </FormProvider>

      {loading && <p>Loading...</p>}
    </div>
  );
};

export default Task3;
