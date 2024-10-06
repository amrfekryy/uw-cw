import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import Input, { StyledHelperText } from "../components/Input";
import * as z from "zod";
import Button from "../components/Button";
import Select from "../components/Select";

interface FormData {
  firstName: string;
  lastName: string;
  age: number;
  country: string;
  city: string;
  address?: string;
  consent: boolean;
}

const defaultValues = {
  firstName: "",
  lastName: "",
  age: 0,
  country: "",
  city: "",
  address: "",
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
  city: z.string().min(1, "City is required"),
  address: z.string().optional(),
});

const stepThreeSchema = z.object({
  consent: z
    .boolean()
    .refine((value) => value === true, "You must accept the terms"),
});

const validationSchemas = [stepOneSchema, stepTwoSchema, stepThreeSchema];

const countries = [
  {
    country: "Egypt",
    cities: ["Cairo", "Giza", "Luxor"],
  },
  {
    country: "England",
    cities: ["London", "Liverpool", "Manchester"],
  },
];

const Task3: React.FC = () => {
  const [step, setStep] = useState<number>(0);
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);

  const methods = useForm<FormData>({
    resolver: zodResolver(validationSchemas[step]),
    mode: "onTouched",
    defaultValues,
  });

  const { country, city } = methods.watch();

  const onNextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const onPreviousStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const onSubmit = async () => {
    // simulate form submission
    setSubmitting(true);
    setTimeout(() => {
      console.log("Form submitted:", methods.getValues());
      setSubmitting(false);
      setSubmitted(true);
    }, 2000);
  };

  return submitted ? (
    <div style={{ textAlign: "center" }}>Thank You!</div>
  ) : (
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
              <Select
                label="Country"
                {...methods.register("country")}
                helperText={methods.formState.errors.country?.message}
              >
                <option value="">Select</option>
                {countries.map((o) => (
                  <option value={o.country}>{o.country}</option>
                ))}
              </Select>

              {country && (
                <Select
                  label="City"
                  {...methods.register("city")}
                  helperText={methods.formState.errors.city?.message}
                >
                  <option value="">Select</option>
                  {countries
                    .find((o) => o.country === country)
                    ?.cities.map((city) => (
                      <option value={city}>{city}</option>
                    ))}
                </Select>
              )}
              {city && (
                <Input
                  label="Address (Optional)"
                  {...methods.register("address")}
                />
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
                <StyledHelperText
                  error={!!methods.formState.errors.consent?.message}
                >
                  {methods.formState.errors.consent?.message}
                </StyledHelperText>
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
            <Button type="submit" disabled={submitting}>
              {step === 2 ? (submitting ? "Submitting" : "Submit") : "Next"}
            </Button>
            {step > 0 && (
              <Button type="button" onClick={onPreviousStep}>
                Back
              </Button>
            )}
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default Task3;
