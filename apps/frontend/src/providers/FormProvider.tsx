import { AppreciationData } from "@acclaimify/ui-components";
import { createContext, ReactNode, useState } from "react";

// Define the context type
interface FormContextType {
  formData: Partial<AppreciationData>;
  setFormData: React.Dispatch<React.SetStateAction<Partial<AppreciationData>>>;
}

// Initialize the context with an undefined default
export const FormContext = createContext<FormContextType | undefined>(undefined);

// Create a provider component
export const FormProvider = ({ children }: { children: ReactNode }) => {
  const [formData, setFormData] = useState<Partial<AppreciationData>>({});

  return (
    <FormContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormContext.Provider>
  );
};
