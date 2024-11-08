import { useEffect } from "react";

export const useCardRotation = ({ containerId, targetId }: { containerId: string, targetId: string }) => {
  useEffect(() => {
    const $ = (selector: string) => document.getElementById(selector);
    const wrapper = $(containerId) as HTMLElement | null;
    const target: HTMLElement | null = $(targetId) as HTMLElement | null;

    // Return early if wrapper or ticket elements are not yet available
    if (!wrapper || !target) return;

    // Get dimensions and calculate half-width and half-height
    const { width, height } = wrapper.getBoundingClientRect();
    const halfWidth = width / 2;
    const halfHeight = height / 2;

    // Define mousemove event handler
    const handleMouseMove = (event: MouseEvent) => {
      target.style.transition = 'transform 50ms linear';
      // Get offset coordinates
      const offsetX = event.offsetX;
      const offsetY = event.offsetY;
      const rotationX = ((offsetX - halfWidth) / halfWidth) * 5;
      const rotationY = ((offsetY - halfHeight) / halfHeight) * 5;

      // Apply transformation to the ticket
      target.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
    };

    const handleMouseLeave = () => {
      target.style.transition = 'transform 0.5s ease-in-out';
      target.style.transform = 'rotateX(0deg) rotateY(0deg)';
    }

    // Attach the mousemove event listener to the wrapper element
    target.addEventListener('mousemove', handleMouseMove);

    target.addEventListener('mouseleave', handleMouseLeave);

    // Cleanup function to remove the event listener on component unmount
    return () => {
      target.removeEventListener('mousemove', handleMouseMove);
      target.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [containerId, targetId]); // Empty dependency array ensures the effect runs once on mount
}
