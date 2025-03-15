import type { StyleRule } from '@vanilla-extract/css';

export const breakpoints = {
  xs: 640, // sm: 640px and up (phone)
  sm: 768, // md: 768px and up (tablet)
  md: 1024, // lg: 1024px and up (laptop)
  lg: 1280, // xl: 1280px and up (desktop)
  xl: 1536, // xxl: 1536px and up (wide desktop)
} as const;

export type Breakpoint = keyof typeof breakpoints;

const media = (breakpoint: Breakpoint, rule: StyleRule) => ({
  '@media': {
    [`screen and (min-width: ${breakpoints[breakpoint]}px)`]: rule,
  },
});

export default media;
