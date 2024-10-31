import Card from "./Card";
import FormComponent from "./FormComponent";
import { FormProvider } from "./FormProvider";

function App() {
  return (
    <FormProvider>
      <div className="container mx-auto flex space-x-4 p-4">
        {/* Form Component */}
        <div className="flex-1">
          <FormComponent />
        </div>

        {/* Card Component */}
        <div className="flex-1">
          <Card />
        </div>
      </div>
    </FormProvider>
  );
}

export default App;
