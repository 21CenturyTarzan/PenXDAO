import { forwardRef } from 'react';
import NextLink from 'next/link';
// @mui
import { useTheme } from '@mui/material/styles';
import { Box, BoxProps } from '@mui/material';

// ----------------------------------------------------------------------

interface Props extends BoxProps {
  disabledLink?: boolean;
}

const Logo = forwardRef<any, Props>(({ disabledLink = false, sx }, ref) => {
  const theme = useTheme();

  const PRIMARY_LIGHT = theme.palette.primary.light;

  const PRIMARY_MAIN = theme.palette.primary.main;

  const PRIMARY_DARK = theme.palette.primary.dark;

  // const PRIMARY_MAIN = "#047cbf";
  const SECONDARY_MAIN = "#000";
  

  // OR
  // const logo = '/logo/logo_single.svg';

  const logo = (
    <Box ref={ref} sx={{ width: 40, height: 40, cursor: 'pointer', ...sx }}>

      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 200 200">
        <defs>
          <style>
          </style>
        </defs>
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <rect fill={PRIMARY_MAIN} width="200" height="200" />
            <path fill={SECONDARY_MAIN} d="M166.11,161.58c-.57,0-28.82,0-42.6,0a1.66,1.66,0,0,1-1.67-.9c-4.45-7.43-21.88-37.21-22.13-37.65-.43.79-15.2,25.88-22.19,37.74a1.42,1.42,0,0,1-1.39.81c-13.78,0-41.86,0-42.24-.06.24-.4,28.42-42.41,42.35-63.1a1.42,1.42,0,0,0,0-1.9C63.4,77.29,37.32,38.1,37,37.59c.56,0,27.64,0,40.79,0a1.85,1.85,0,0,1,1.83,1c6.9,11.49,13.82,23,20.81,34.56,1.21-2,15-25.26,20.68-34.9a1.52,1.52,0,0,1,1.09-.64c13.53,0,40.79,0,41.07,0-.27.42-26.4,39.66-39.28,58.91a1.65,1.65,0,0,0,0,2.2C137.79,119.26,165.75,161,166.11,161.58Z" />
          </g>
        </g>
      </svg>

      {/* <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 512 512">
        <defs>
          <linearGradient id="BG1" x1="100%" x2="50%" y1="9.946%" y2="50%">
            <stop offset="0%" stopColor={PRIMARY_DARK} />
            <stop offset="100%" stopColor={PRIMARY_MAIN} />
          </linearGradient>
          <linearGradient id="BG2" x1="50%" x2="50%" y1="0%" y2="100%">
            <stop offset="0%" stopColor={PRIMARY_LIGHT} />
            <stop offset="100%" stopColor={PRIMARY_MAIN} />
          </linearGradient>
          <linearGradient id="BG3" x1="50%" x2="50%" y1="0%" y2="100%">
            <stop offset="0%" stopColor={PRIMARY_LIGHT} />
            <stop offset="100%" stopColor={PRIMARY_MAIN} />
          </linearGradient>
        </defs>

        <g fill={PRIMARY_MAIN} fillRule="evenodd" stroke="none" strokeWidth="1">
          <path
            fill="url(#BG1)"
            d="M166.11,161.58c-.57,0-28.82,0-42.6,0a1.66,1.66,0,0,1-1.67-.9c-4.45-7.43-21.88-37.21-22.13-37.65-.43.79-15.2,25.88-22.19,37.74a1.42,1.42,0,0,1-1.39.81c-13.78,0-41.86,0-42.24-.06.24-.4,28.42-42.41,42.35-63.1a1.42,1.42,0,0,0,0-1.9C63.4,77.29,37.32,38.1,37,37.59c.56,0,27.64,0,40.79,0a1.85,1.85,0,0,1,1.83,1c6.9,11.49,13.82,23,20.81,34.56,1.21-2,15-25.26,20.68-34.9a1.52,1.52,0,0,1,1.09-.64c13.53,0,40.79,0,41.07,0-.27.42-26.4,39.66-39.28,58.91a1.65,1.65,0,0,0,0,2.2C137.79,119.26,165.75,161,166.11,161.58Z"
          />
          <path
            fill="url(#BG2)"
            d="M444.31 229.726c-46.27-80.956-94.1-157.228-149.043-45.344-7.516 14.384-12.995 42.337-25.267 42.337v-.142c-12.272 0-17.75-27.953-25.265-42.337C189.79 72.356 141.96 148.628 95.69 229.584c-3.483 6.106-6.828 11.932-9.69 16.996 106.038-67.127 97.11 135.667 184 137.278V384c86.891-1.611 77.962-204.405 184-137.28-2.86-5.062-6.206-10.888-9.69-16.994"
          />
          <path
            fill="url(#BG3)"
            d="M450 384c26.509 0 48-21.491 48-48s-21.491-48-48-48-48 21.491-48 48 21.491 48 48 48"
          />
        </g>
      </svg> */}
    </Box>
  );

  if (disabledLink) {
    return <>{logo}</>;
  }

  return <NextLink href="/">{logo}</NextLink>;
});

export default Logo;
