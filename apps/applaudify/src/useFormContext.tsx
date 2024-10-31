import { useContext } from "react";
import { FormContext } from "./FormProvider";


// Custom hook to use the FormContext in components
export const useFormContext = () => {
    const context = useContext(FormContext);
    if (!context) {
        throw new Error('useFormContext must be used within a FormProvider');
    }
    return context;
};