import { CardContainer } from "@acclaimify/ui-components"
import { MainContainer } from "../components"
import AchievementContainer from "../components/AchievementContainer/AchievementContainer"
import FormComponent from "../components/FormComponent/FormComponent"
import { Header } from "../components/Header"
import { FormProvider } from "../providers"

export const Home = () => {
  return (
    <MainContainer grid="grid grid-cols-1 md:grid-cols-min-content-2 grid-rows-min-content items-end justify-items-center content-center justify-center gap-12">
      <FormProvider>
        <section className="duration-500 ease-in-out animate-fadeIn w-fit flex flex-col gap-9 ">
          <Header />
          <CardContainer id="form" classList="duration-500 ease-in-out animate-fadeIn w-fit lg:min-w-[479px] max-w-[479px]">
            <FormComponent />
          </CardContainer>
        </section>
        <AchievementContainer />
      </FormProvider>
    </MainContainer>
  )
}
