import { AppreciationData } from "@applaudify/ui-components";
import { Button, CustomFlowbiteTheme } from "flowbite-react";
import { Flowbite } from "flowbite-react";
import axios from "axios";
import { useCardImageActions } from "../../hooks";

const apiUrl = import.meta.env.VITE_API_URL;

export const ActionMenu = (formData: Partial<AppreciationData>) => {
  const customTheme: CustomFlowbiteTheme = {
    button: {
      color: {
        purple: "border-[#7F56D9] border-solid border-[1px] bg-[#8B67DC] focus:ring-4 focus:ring-purple-300 enabled:hover:bg-[#784DD6] p-0 px-2 py-3",
        gray: "border-[#B4B4B4] border-solid border-[1px] bg-[#B4B4B4] focus:ring-4 focus:ring-gray-300 enabled:hover:bg-[#919191] p-0 px-2 py-3",
      },
    },
  };

  const fetchResource = async (): Promise<Blob> => {
    const response = await axios.post(`${apiUrl}/api/cards/generate`, formData, {
      responseType: 'blob', // Ensures response is handled as binary data
    });
    const data = await response.data;
    return data;

  }

  const copyToClipboard = (content: string) => { return navigator.clipboard.writeText(content); }

  const { handleDownload, handleCopy } = useCardImageActions({ formData, fetchResource, copyToClipboard });

  return (
    <Flowbite theme={{ theme: customTheme }}>
      <nav className="flex flex-col gap-[16px] pt-1">
        <Button onClick={handleDownload} size="xs" color="purple">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.8355 16.8971H1.31799M14.2493 8.27629L9.07676 13.4488M9.07676 13.4488L3.90425 8.27629M9.07676 13.4488V1.37961" stroke="white" strokeWidth="1.72417" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Button>
        <Button onClick={handleCopy} size="xs" color="gray">
          <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M14.0277 2.86505C13.1406 1.97798 11.7024 1.97798 10.8154 2.86505L3.03235 10.6481C1.5553 12.1251 1.5553 14.5199 3.03235 15.9969C4.5094 17.474 6.90417 17.474 8.38122 15.9969L16.1642 8.21392C16.4571 7.92103 16.932 7.92103 17.2249 8.21392C17.5178 8.50681 17.5178 8.98169 17.2249 9.27458L9.44188 17.0576C7.37905 19.1204 4.03453 19.1204 1.97169 17.0576C-0.091149 14.9948 -0.0911485 11.6502 1.97169 9.58739L9.75469 1.80439C11.2276 0.331531 13.6155 0.331531 15.0884 1.80439C16.5612 3.27724 16.5612 5.66521 15.0884 7.13807L7.61059 14.6159C6.72771 15.4987 5.29629 15.4987 4.41342 14.6159C3.53054 13.733 3.53054 12.3016 4.41342 11.4187L10.9756 4.85655C11.2685 4.56365 11.7433 4.56365 12.0362 4.85655C12.3291 5.14944 12.3291 5.62431 12.0362 5.91721L5.47408 12.4794C5.17699 12.7764 5.17699 13.2581 5.47408 13.5552C5.77116 13.8523 6.25284 13.8523 6.54993 13.5552L14.0277 6.07741C14.9148 5.19034 14.9148 3.75212 14.0277 2.86505Z" fill="white" />
          </svg>

        </Button>
      </nav>
    </Flowbite>
  )
}
