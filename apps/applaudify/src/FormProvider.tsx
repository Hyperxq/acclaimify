import { AppreciationData } from "@applaudify/ui-components";
import { createContext, ReactNode, useState } from "react";

// Define the context type
interface FormContextType {
  formData: AppreciationData;
  setFormData: React.Dispatch<React.SetStateAction<AppreciationData>>;
}

// Initialize the context with an undefined default
export const FormContext = createContext<FormContextType | undefined>(undefined);

// Create a provider component
export const FormProvider = ({ children }: { children: ReactNode }) => {
  const [formData, setFormData] = useState<AppreciationData>({
    achieverName: '',
    position: '',
    projectName: '',
    photo: null,
    dateOfAchievement: '',
    recognizer: '',
    personalNote: ''
  });

  return (
    <FormContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormContext.Provider>
  );
};
