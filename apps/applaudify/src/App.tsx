import FormComponent from "./FormComponent";
import { FormProvider } from "./FormProvider";
import "./App.css";
import { CardContainer } from "@applaudify/ui-components";

function App() {
  return (
    <main className="grid grid-cols-1 md:grid-cols-min-content-2 justify-items-center justify-center items-center w-screen h-screen bg-cover bg-center bg-no-repeat bg-[url('./assets/blur.png')]">

      <FormProvider>
        <section className="w-fit flex flex-col gap-9">

          <header className="w-fit md:col-span-2 lg:col-span-3 text-center">
            <h1 id="title" className="space-mono-regular">Applaudify</h1>
            <h3 id="slogan" className="poppins-regular">Honor the Effort, Capture the Moment</h3>
          </header>
          <CardContainer classList="w-fit lg:min-w-[479px] max-w-[479px]">
            <FormComponent />
          </CardContainer>
        </section>
        <div className="container mx-auto flex space-x-4 p-4">
          {/* Form Component */}


          {/* Card Component */}
          {/* <div className="flex-1">
          <AchievementContainer />
        </div> */}
        </div>
      </FormProvider>
    </main>
  );
}

export default App;
