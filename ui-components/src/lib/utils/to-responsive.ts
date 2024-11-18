type Breakpoints = 'lg' | 'md';

const breakpoints: Record<Breakpoints, number> = {
  lg: 1440,
  md: 1024,
};

export const toResponsive = (property: string, value: number): string => {
  // Default value for mobile (unprefixed)
  const defaultValue = `${property}-[${value}px]`;
  // const defaultValue = `${property}-[${(value / 480) * 100}vw]`;

  // Generate responsive classes for `md` and `lg`
  const responsiveClasses = Object.entries(breakpoints)
    .map(([key, breakpoint]) => {
      const percentageValue = (value / breakpoint) * 100;
      return `${key}:${property}-[${percentageValue.toFixed(2)}vw]`;
    })
    .join(' ');

  // Return the default value (mobile) and responsive overrides
  return `${defaultValue} ${responsiveClasses}`;
};
