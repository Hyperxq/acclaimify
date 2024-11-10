import { Loader, MainContainer } from "../components"

export const Loading = () => {
  return (
    <MainContainer>
      <Loader />
      <header className="duration-500 ease-in-out animate-fadeIn flex flex-col items-start w-max text-center">
        <h1 className="text-[83.435px] text-[#8B67DC] max-h-[115px] space-mono-regular">acclaimify</h1>
        <h3 className="text-[43.5px] text-white max-h-[60.372px] poppins-regular">Generating certificate...</h3>
      </header>
    </MainContainer>
  )
}
