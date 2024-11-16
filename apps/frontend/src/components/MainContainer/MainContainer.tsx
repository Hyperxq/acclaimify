import { IProps } from "@acclaimify/ui-components";

interface Props extends IProps {
  grid?: string
}

export const MainContainer = ({ children, grid = "grid grid-cols-min-content-2  gap-[48.21px] items-center justify-items-center content-center justify-center" }: Props) => {
  const classes = `${grid} w-screen h-screen bg-cover bg-center bg-no-repeat bg-[url('./assets/images/blur.png')]`
  return (
    <main id="mainContainer" className={classes}>
      {children}
    </main>
  )
}
