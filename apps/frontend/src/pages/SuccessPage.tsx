import { MainContainer, PrideWrapper } from '../components';
// import Pride from "https://esm.sh/react-canvas-confetti/dist/presets/pride";
import { Button, CustomFlowbiteTheme, Flowbite } from 'flowbite-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ActionType } from '../enums';
import { TOnInitPresetFn } from 'react-canvas-confetti/dist/types';
import { Suspense, useEffect } from 'react';

const colors = ['#8B67DC', '#96E8DA'];
const Success = () => {
  const navigate = useNavigate();

  const location = useLocation();
  const { type }: { type: ActionType } = location.state || { type: ActionType.default };

  const maxConfettiTime = 20000;
  const rightPrideConfig = () => ({
    particleCount: 2,
    angle: 60,
    spread: 55,
    origin: { x: 0 },
    zIndex: -1,
    colors
  });
  const leftPrideConfig = () => ({
    particleCount: 2,
    angle: 120,
    spread: 55,
    origin: { x: 1 },
    zIndex: -1,
    colors
  });
  const actionTextMap = {
    [ActionType.download]: 'downloaded',
    [ActionType.clipboard]: 'copied to the clipboard',
    [ActionType.default]: 'processed',
  }

  const customTheme: CustomFlowbiteTheme = {
    button: {
      color: {
        purple: "border-[#7F56D9] border-solid border-[1px] bg-[#8B67DC] focus:ring-4 focus:ring-purple-300 enabled:hover:bg-[#784DD6] p-0 px-2 py-3",
      },
      label: "py-2 text-white text-[30px] poppins-regular"
    },
  };


  const handleBackToHome = () => {
    navigate('/');
  };

  let timeoutIdLeft: NodeJS.Timeout | string | number | undefined;
  let timeoutIdRight: NodeJS.Timeout | string | number | undefined;

  const onInitLeft: TOnInitPresetFn = ({ conductor }) => {
    timeoutIdLeft = setTimeout(() => {
      conductor.stop();
    }, maxConfettiTime);
  }
  const onInitRight: TOnInitPresetFn = ({ conductor }) => {
    timeoutIdRight = setTimeout(() => {
      conductor.stop();
    }, maxConfettiTime);
  }

  useEffect(() => {
    return () => {
      clearTimeout(timeoutIdLeft);
      clearTimeout(timeoutIdRight);
    };
  }, [timeoutIdLeft, timeoutIdRight]);

  return (
    <MainContainer>
      <Suspense fallback={<div>Loading...</div>}>
        <PrideWrapper autorun={{ speed: 45 }} onInit={onInitLeft} decorateOptions={rightPrideConfig} />
        <PrideWrapper autorun={{ speed: 45 }} onInit={onInitRight} decorateOptions={leftPrideConfig} />
      </Suspense>
      <header className="duration-500 ease-in-out animate-fadeIn flex flex-col items-center w-max text-center z-1">
        <h1 className="text-[81.512px] text-[#8B67DC] max-h-[115px] space-mono-regular">Success!</h1>
        <h3 className="text-[25.308px] text-white max-w-[510.01px] poppins-regular">Your certificate has been {actionTextMap[type]} successfully.</h3>
        <Flowbite theme={{ theme: customTheme }}>
          <Button onClick={handleBackToHome} label="Back to Home" color='purple' className='mt-[16px] poppins-regular' aria-label="Go back to the home page"></Button>
        </Flowbite>
      </header>

    </MainContainer>
  );
};

export default Success;
