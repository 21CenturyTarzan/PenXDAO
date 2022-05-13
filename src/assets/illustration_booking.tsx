import { memo } from 'react';
// @mui
import { useTheme } from '@mui/material/styles';
import { Box, BoxProps } from '@mui/material';

// ----------------------------------------------------------------------

function BookingIllustration({ ...other }: BoxProps) {
  const theme = useTheme();

  const PRIMARY_LIGHTER = theme.palette.primary.lighter;

  const PRIMARY_LIGHT = theme.palette.primary.light;

  const PRIMARY_MAIN = theme.palette.primary.main;

  const PRIMARY_DARK = theme.palette.primary.dark;

  const PRIMARY_DARKER = theme.palette.primary.darker;

  return (
    <Box {...other}>
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 200 200">
        <path
          fill="#FFFFFF"
          d="M141.968 167.139H48.764a11.932 11.932 0 01-11.921-11.921V45.758a11.935 11.935 0 0111.921-11.922h86.712l18.414 14.677v106.705a11.937 11.937 0 01-11.922 11.921z"
        />

        <path
          fill="#C4CDD5"
          d="M122.521 69.096h-62.5a1.986 1.986 0 110-3.97h62.5a1.984 1.984 0 110 3.97zM130.711 75.796h-70.69a1.985 1.985 0 010-3.97h70.69a1.98 1.98 0 011.404.581 1.992 1.992 0 01.581 1.404 1.98 1.98 0 01-1.226 1.834c-.24.1-.499.151-.759.151z"
        />

        <path
          fill={PRIMARY_MAIN}
          d="M122.521 99.123h-62.5a1.986 1.986 0 110-3.97h62.5a1.984 1.984 0 110 3.97zM130.711 105.823h-70.69a1.98 1.98 0 01-1.834-1.226 1.986 1.986 0 011.835-2.745h70.689a1.995 1.995 0 011.404.582 1.988 1.988 0 010 2.807 1.99 1.99 0 01-1.404.582z"
        />

        <path
          fill="#DFE3E8"
          d="M122.522 129.149h-62.5a1.986 1.986 0 110-3.97h62.5a1.985 1.985 0 010 3.97zM130.711 135.85h-70.69a1.985 1.985 0 110-3.971h70.69c.526 0 1.031.209 1.403.582a1.981 1.981 0 010 2.807 1.986 1.986 0 01-1.403.582zM153.531 48.986h-14.424a3.973 3.973 0 01-3.971-3.971V34.361a.246.246 0 01.14-.223.25.25 0 01.262.029l18.147 14.376a.25.25 0 01.081.276.249.249 0 01-.235.166z"
        />

        <path
          fill="#919EAB"
          fillOpacity="0.24"
          d="M63.977 43.25A28.25 28.25 0 1135.727 15a28.26 28.26 0 0128.25 28.25z"
        />

        <path
          fill={PRIMARY_LIGHTER}
          d="M62.975 43.249A27.249 27.249 0 1135.726 16a27.258 27.258 0 0127.25 27.249z"
        />

        <mask id="mask0" width="55" height="55" x="8" y="16" maskUnits="userSpaceOnUse">
          <path
            fill="#fff"
            d="M62.975 43.249A27.249 27.249 0 1135.726 16a27.258 27.258 0 0127.25 27.249z"
          />
        </mask>
        <g mask="url(#mask0)">
          <path
            fill="#FBCDBE"
            d="M36.143 29.428a9.6 9.6 0 019.6 9.6v1.057a2.058 2.058 0 011.714 2.029v2.4a2.058 2.058 0 01-1.767 2.037 9.606 9.606 0 01-5.433 7.668v3.152h.686c6.817 0 12.343 5.526 12.343 12.343v1.543H19v-1.543c0-6.817 5.526-12.343 12.343-12.343h.686V54.22a9.607 9.607 0 01-5.434-7.668 2.058 2.058 0 01-1.766-2.037v-2.4c0-1.02.74-1.866 1.714-2.029v-1.057a9.6 9.6 0 019.6-9.6z"
          />

          <path
            fill={PRIMARY_DARK}
            d="M27.743 58.63c0 2.792 3.799 5.054 8.486 5.054 4.686 0 8.485-2.262 8.485-5.053a3.08 3.08 0 00-.078-.689c5.013 1.57 8.65 6.25 8.65 11.78v1.535H19v-1.534c0-5.598 3.727-10.326 8.834-11.837-.06.243-.091.492-.091.745z"
          />

          <path
            fill={PRIMARY_LIGHT}
            d="M27.743 58.63c0 2.792 3.799 5.054 8.486 5.054 4.686 0 8.485-2.262 8.485-5.053a3.08 3.08 0 00-.078-.689c5.013 1.57 8.65 6.25 8.65 11.78v1.535H19v-1.534c0-5.598 3.727-10.326 8.834-11.837-.06.243-.091.492-.091.745z"
          />

          <path
            fill={PRIMARY_DARK}
            d="M31.857 48.904c.242 1.65 2.068 2.981 4.285 2.981 2.224 0 4.054-1.34 4.286-3.13.018-.069-.038-.298-.372-.298H32.23c-.307 0-.395.212-.373.447z"
            opacity="0.24"
          />

          <path
            fill={PRIMARY_DARK}
            fillRule="evenodd"
            d="M34.085 45.542c0 .758.922 1.372 2.058 1.372 1.136 0 2.057-.614 2.057-1.372"
            clipRule="evenodd"
            opacity="0.24"
          />

          <path
            fill={PRIMARY_DARK}
            d="M31.685 43.485a1.029 1.029 0 100-2.057 1.029 1.029 0 000 2.057zM40.6 43.485a1.029 1.029 0 100-2.057 1.029 1.029 0 000 2.057zM29.223 40.255c.67-.944 2.51-1.474 4.095-1.084a.343.343 0 00.164-.666c-1.84-.452-3.971.161-4.819 1.353a.343.343 0 10.56.397zM43.063 40.255c-.67-.944-2.51-1.474-4.096-1.084a.343.343 0 11-.163-.666c1.84-.452 3.97.161 4.818 1.353a.343.343 0 11-.559.397z"
          />

          <path
            fill={PRIMARY_MAIN}
            d="M36.143 26.857c6.438 0 11.657 5.219 11.657 11.657v5.272c.15 1.68.29 2.858.421 3.532.236 1.218.976.816.976 2.548 0 1.732-.742 2.314-.745 3.855-.003 1.54 2.64 2.765 2.64 4.72 0 1.956-1.213 11.183-13.307 11.183-2.584 0-4.784-.735-6.602-2.205.117 1.113.228 2.392.331 3.838h-8.057c.16-4.075-1.248-6.354-1.248-10.895 0-4.541 2.337-11.146 2.277-12.762l.01-.359c-.007-.165-.01-.331-.01-.498v-8.229c0-.68.058-1.348.17-1.997l.001-.06.007.013c.967-5.463 5.738-9.613 11.479-9.613zm.086 5.486h-.172a9.343 9.343 0 00-9.343 9.342v3.943a9.343 9.343 0 009.343 9.343h.172a9.343 9.343 0 009.343-9.343v-3.943a9.343 9.343 0 00-9.343-9.342z"
          />

          <path
            fill={PRIMARY_DARK}
            fillRule="evenodd"
            d="M36.143 28.742c5.87 0 10.628 4.72 10.628 10.543 0 .671-.063 1.328-.184 1.964-.272-5.533-4.844-9.935-10.444-9.935-5.6 0-10.172 4.402-10.445 9.935a10.5 10.5 0 01-.184-1.964c0-5.822 4.759-10.543 10.629-10.543z"
            clipRule="evenodd"
          />

          <path
            fill={PRIMARY_DARK}
            fillRule="evenodd"
            d="M47.399 59.17c.024.054.047.11.067.167.776 2.132-1.384 4.876-4.826 6.128-3.44 1.253-6.86.54-7.636-1.592a2.559 2.559 0 01-.056-.173c1.405.97 4.181 1.016 7.04-.025 2.855-1.04 4.95-2.854 5.408-4.497l.003-.009zm-1.99-2.631l.029.131c.293 1.662-2.27 3.503-5.723 4.112s-6.49-.245-6.784-1.907a1.44 1.44 0 01-.017-.133c1.112.854 3.685 1.15 6.555.644 2.865-.505 5.179-1.66 5.935-2.841l.004-.006zm.334-13.482V47a9.343 9.343 0 01-9.343 9.342h-.515A9.343 9.343 0 0126.543 47v-3.943c0-.634.063-1.253.183-1.852-.008.16-.012.32-.012.48v3.943a9.343 9.343 0 009.343 9.343h.171a9.343 9.343 0 009.343-9.343v-3.943c0-.16-.004-.32-.012-.48a9.38 9.38 0 01.184 1.852z"
            clipRule="evenodd"
            opacity="0.9"
          />
        </g>
        <path
          fill="#919EAB"
          fillOpacity="0.24"
          d="M195.516 99.234a28.263 28.263 0 01-19.503 26.869c-.17.054-.339.108-.511.159a27.815 27.815 0 01-6.4 1.161 28.16 28.16 0 01-11.436-1.613 28.257 28.257 0 01-18.407-22.832 28.253 28.253 0 1156.257-3.744z"
        />

        <path
          fill={PRIMARY_LIGHTER}
          d="M194.514 99.233a27.256 27.256 0 01-18.812 25.917c-.164.052-.327.104-.493.153a26.765 26.765 0 01-6.173 1.12 27.206 27.206 0 01-22.99-10.083 27.258 27.258 0 01-3.745-28.04 27.255 27.255 0 0123.152-16.255 27.254 27.254 0 0129.061 27.188z"
        />

        <mask id="mask1" width="55" height="56" x="140" y="71" maskUnits="userSpaceOnUse">
          <path
            fill="#fff"
            d="M194.514 99.233a27.256 27.256 0 01-18.812 25.917c-.164.052-.327.104-.493.153a26.765 26.765 0 01-6.173 1.12 27.206 27.206 0 01-22.99-10.083 27.258 27.258 0 01-3.745-28.04 27.255 27.255 0 0123.152-16.255 27.254 27.254 0 0129.061 27.188z"
          />
        </mask>
        <g mask="url(#mask1)">
          <path
            fill="#FBCDBE"
            d="M166.886 85.428c5.301 0 9.6 4.298 9.6 9.6v1.057a2.057 2.057 0 011.714 2.029v2.4a2.058 2.058 0 01-1.767 2.037 9.606 9.606 0 01-5.433 7.668v3.152h.686c6.816 0 12.342 5.526 12.342 12.343v1.543h-34.285v-1.543c0-6.817 5.526-12.343 12.343-12.343h.685v-3.152a9.606 9.606 0 01-5.433-7.668 2.058 2.058 0 01-1.767-2.037v-2.4c0-1.02.742-1.866 1.715-2.029v-1.057a9.6 9.6 0 019.6-9.6z"
          />

          <path
            fill={PRIMARY_LIGHTER}
            d="M171.686 113.38c6.816 0 12.342 5.526 12.342 12.343v1.534h-34.285v-1.534c0-6.817 5.526-12.343 12.343-12.343h.204c-.022.169-.033.34-.033.514 0 2.367 2.072 4.286 4.629 4.286 2.556 0 4.628-1.919 4.628-4.286 0-.174-.011-.345-.033-.514h.205z"
          />

          <path
            fill={PRIMARY_MAIN}
            fillRule="evenodd"
            d="M160.714 120.143c0 2.607.336 5.043.919 7.114h-11.891v-1.534c0-6.632 5.231-12.043 11.792-12.331-.522 1.99-.82 4.294-.82 6.751zm23.314 5.58v1.534h-11.719c.583-2.071.919-4.507.919-7.114 0-2.453-.298-4.754-.818-6.742 6.479.375 11.618 5.748 11.618 12.322z"
            clipRule="evenodd"
          />

          <path
            fill={PRIMARY_LIGHTER}
            fillRule="evenodd"
            d="M175.285 123.143l1.638-1.229a.686.686 0 01.833.007l1.129.879-3.6.343z"
            clipRule="evenodd"
          />

          <path
            fill={PRIMARY_DARKER}
            fillRule="evenodd"
            d="M161.571 113.2c-.686 3.314-.4 8 .857 14.057h-2.743l-2.4-6.172 1.029-1.542-1.029-1.029 3.257-5.143a3.682 3.682 0 011.029-.171zM172.2 113.2c.685 3.314.4 8-.858 14.057h2.743l2.4-6.172-1.028-1.542 1.028-1.029-3.257-5.143a3.669 3.669 0 00-1.028-.171z"
            clipRule="evenodd"
          />

          <path
            fill={PRIMARY_LIGHT}
            fillRule="evenodd"
            d="M171 112.092c1.161.788 1.885 1.906 1.885 3.146 0 1.268-.759 2.409-1.968 3.2l-1.018-.802-.785.056.171-.54-.013-.01c1.046-.539 1.728-1.422 1.728-2.421v-2.629zm-6.501 5.05l-.014.01.172.54-.785-.056-1.019.802c-1.186-.776-1.939-1.889-1.967-3.129l-.001-.071c0-1.24.725-2.358 1.886-3.146v2.629c0 .999.682 1.882 1.728 2.421z"
            clipRule="evenodd"
          />

          <path
            fill={PRIMARY_DARKER}
            fillRule="evenodd"
            d="M164.485 104.8a2.4 2.4 0 004.8 0M164.828 101.542c0 .758.921 1.372 2.057 1.372s2.057-.614 2.057-1.372"
            clipRule="evenodd"
            opacity="0.24"
          />

          <path
            fill={PRIMARY_DARKER}
            fillRule="evenodd"
            d="M160.055 99.409c.317.651 1.03 1.105 1.858 1.105.826 0 1.536-.451 1.855-1.098.094-.193-.04-.35-.176-.234-.42.362-1.017.587-1.679.587-.641 0-1.221-.211-1.639-.553-.152-.125-.311.002-.219.193zM169.998 99.409c.317.651 1.029 1.105 1.858 1.105.826 0 1.536-.451 1.854-1.098.095-.193-.04-.35-.175-.234-.42.362-1.017.587-1.679.587-.641 0-1.221-.211-1.639-.553-.153-.125-.311.002-.219.193z"
            clipRule="evenodd"
          />

          <path
            fill={PRIMARY_DARKER}
            d="M159.965 96.255c.671-.944 2.511-1.474 4.096-1.084a.343.343 0 00.164-.666c-1.841-.452-3.972.161-4.819 1.353a.343.343 0 00.559.397zM173.806 96.255c-.671-.944-2.511-1.474-4.096-1.084a.343.343 0 01-.164-.666c1.841-.452 3.972.161 4.819 1.353a.343.343 0 11-.559.397z"
          />

          <path
            fill={PRIMARY_DARKER}
            d="M166.971 107.687c-1.95.064-2.82 1.008-3.475.049-.491-.72-.286-1.93.174-2.61.653-.969 1.54-.501 2.532-.611.269-.03.54-.106.769-.23.229.124.5.2.769.23.992.11 1.878-.358 2.532.611.46.68.665 1.89.174 2.61-.655.959-1.525-.114-3.475-.049zm9.466-11.63c-.58 2.412-.846 4.874-1.267 7.315a53.543 53.543 0 01-.285 1.522c-.022.106-.043.501-.146.551-.314.151-.953-.655-1.124-.837-.429-.457-.854-.918-1.377-1.276a7.342 7.342 0 00-3.579-1.255c-.538-.043-1.266.032-1.774.341-.507-.309-1.235-.384-1.773-.341a7.342 7.342 0 00-3.579 1.255c-.523.358-.948.819-1.377 1.276-.171.182-.81.988-1.124.837-.103-.05-.124-.445-.146-.551a53.543 53.543 0 01-.285-1.522c-.421-2.441-.687-4.903-1.267-7.315-.169 0-.317 3.214-.336 3.513-.077 1.216-.166 2.405-.052 3.623.197 2.099.403 4.732 1.984 6.336 1.428 1.449 3.502 1.752 5.291 2.666.231.118.536.263.866.382.347.268 1.035.451 1.828.451.832 0 1.548-.201 1.877-.491a7.76 7.76 0 00.758-.342c1.788-.915 3.863-1.217 5.291-2.666 1.581-1.604 1.787-4.237 1.984-6.336.114-1.218.025-2.407-.052-3.623-.019-.3-.167-3.513-.336-3.513z"
          />

          <path
            fill={PRIMARY_DARK}
            fillRule="evenodd"
            d="M166.885 89.028c5.586 0 10.115 2.533 10.115 5.657 0 .442-.091.873-.263 1.286-1.041-2.505-5.057-4.371-9.852-4.371s-8.811 1.866-9.852 4.371a3.342 3.342 0 01-.262-1.286c0-3.124 4.528-5.657 10.114-5.657z"
            clipRule="evenodd"
          />

          <path
            fill={PRIMARY_DARKER}
            d="M167.228 79.771c5.117 0 14.043 7.569 14.057 15.656.008 4.367-1.649 7.035-4.971 8.001 1.048-9.58-5.417-11.757-9.434-14.088-4.021 2.33-10.475 4.507-9.423 14.088-3.322-.857-4.979-3.524-4.972-8.001.014-8.088 8.927-15.656 14.058-15.656.114 0 .228.005.341.015a3.94 3.94 0 01.344-.015z"
          />
        </g>
        <path
          fill="#919EAB"
          fillOpacity="0.24"
          d="M5 156.457a28.162 28.162 0 008.98 20.659 28.239 28.239 0 0010.523 6.21 28.359 28.359 0 0018.088-.201l.32-.115a28.255 28.255 0 0016.203-37.926 28.251 28.251 0 00-38.905-13.686A28.248 28.248 0 005 156.457z"
        />

        <path
          fill={PRIMARY_LIGHTER}
          d="M6 156.456a27.163 27.163 0 008.663 19.927 27.204 27.204 0 0011.043 6.262 27.357 27.357 0 0016.553-.466l.31-.111a27.253 27.253 0 006.316-47.931A27.253 27.253 0 006 156.456z"
        />

        <mask id="mask2" width="55" height="55" x="6" y="129" maskUnits="userSpaceOnUse">
          <path
            fill="#fff"
            d="M6 156.456a27.163 27.163 0 008.663 19.927 27.204 27.204 0 0011.043 6.262 27.357 27.357 0 0016.553-.466l.31-.111a27.253 27.253 0 006.316-47.931A27.253 27.253 0 006 156.456z"
          />
        </mask>
        <g mask="url(#mask2)">
          <path
            fill="#FBCDBE"
            d="M33.629 143.171a9.6 9.6 0 019.6 9.6v1.057a2.059 2.059 0 011.714 2.029v2.4a2.057 2.057 0 01-1.767 2.037 9.607 9.607 0 01-5.433 7.668v3.152h.686c6.816 0 12.343 5.526 12.343 12.343V185H16.486v-1.543c0-6.817 5.526-12.343 12.343-12.343h.685v-3.152a9.608 9.608 0 01-5.433-7.668 2.057 2.057 0 01-1.767-2.037v-2.4c0-1.019.742-1.865 1.715-2.029v-1.057a9.6 9.6 0 019.6-9.6z"
          />

          <path
            fill={PRIMARY_LIGHT}
            d="M25.229 172.374c0 2.791 3.799 5.054 8.485 5.054 4.687 0 8.486-2.263 8.486-5.054a3.08 3.08 0 00-.078-.689c5.013 1.57 8.65 6.251 8.65 11.781V185H16.486v-1.534c0-5.598 3.726-10.325 8.834-11.837-.06.243-.091.492-.091.745z"
          />

          <path
            fill={PRIMARY_DARKER}
            d="M30.392 162.565a3.257 3.257 0 006.475-.015c.014-.132-.133-.35-.317-.35h-5.821c-.185 0-.356.202-.337.365z"
            opacity="0.24"
          />

          <path
            fill={PRIMARY_DARKER}
            fillRule="evenodd"
            d="M31.571 159.286c0 .757.921 1.371 2.057 1.371 1.137 0 2.058-.614 2.058-1.371"
            clipRule="evenodd"
            opacity="0.24"
          />

          <path
            fill={PRIMARY_DARKER}
            d="M29.172 157.229a1.029 1.029 0 10-.001-2.058 1.029 1.029 0 000 2.058zM38.086 157.229a1.029 1.029 0 10-.001-2.058 1.029 1.029 0 000 2.058zM26.708 153.999c.671-.945 2.511-1.474 4.096-1.085a.343.343 0 10.164-.666c-1.84-.452-3.971.161-4.819 1.353a.343.343 0 00.56.398zM40.549 153.999c-.671-.945-2.511-1.474-4.096-1.085a.343.343 0 11-.163-.666c1.84-.452 3.97.161 4.818 1.353a.343.343 0 01-.559.398z"
          />

          <mask id="mask3" width="46" height="48" x="11" y="137" maskUnits="userSpaceOnUse">
            <path
              fill="#fff"
              d="M56.257 137v48h-5.486v-1.543c0-6.817-5.526-12.343-12.342-12.343h-.686v-3.152a9.606 9.606 0 005.45-7.842 2.058 2.058 0 001.75-2.034v-2.229a2.059 2.059 0 00-1.714-2.029v-1.057a9.566 9.566 0 00-.796-3.831c-1.701-2.854-16.122-2.717-17.597-.028a9.567 9.567 0 00-.807 3.859v1.057a2.059 2.059 0 00-1.715 2.029v2.229c0 1.031.76 1.886 1.75 2.034a9.606 9.606 0 005.45 7.842v3.152h-.685c-6.749 0-12.233 5.416-12.342 12.139l-.001.204V185H11v-48h45.257z"
            />
          </mask>
          <g mask="url(#mask3)">
            <path
              fill={PRIMARY_DARKER}
              fillRule="evenodd"
              d="M32.117 137.343h3.194a6.857 6.857 0 016.699 5.389l1.561 7.125H23.857l1.562-7.125a6.857 6.857 0 016.698-5.389z"
              clipRule="evenodd"
            />

            <path
              fill={PRIMARY_DARKER}
              d="M33.629 161.857c11.55 0 20.914-4.413 20.914-9.857 0-5.444-9.364-9.857-20.914-9.857-11.551 0-20.915 4.413-20.915 9.857 0 5.444 9.364 9.857 20.915 9.857z"
            />

            <path
              fill={PRIMARY_DARK}
              d="M33.629 155.343c5.87 0 10.628-1.919 10.628-4.286 0-2.367-4.758-4.286-10.628-4.286S23 148.69 23 151.057c0 2.367 4.759 4.286 10.629 4.286z"
            />
          </g>
          <path
            fill={PRIMARY_DARKER}
            d="M32.208 156.286c0 1.663-1.414 3.012-3.771 3.012h-.471c-2.357 0-3.3-1.35-3.3-3.012 0-1.664.22-3.013 3.52-3.013h.502c3.3 0 3.52 1.349 3.52 3.013zM42.763 156.286c0 1.663-1.414 3.012-3.771 3.012h-.472c-2.356 0-3.3-1.35-3.3-3.012 0-1.664.22-3.013 3.52-3.013h.503c3.299 0 3.52 1.349 3.52 3.013z"
            opacity="0.7"
          />

          <path
            fill={PRIMARY_DARKER}
            d="M28.689 152.771c3.711 0 4.022 1.737 4.022 3.515 0 2.069-1.757 3.514-4.274 3.514h-.471c-2.381 0-3.802-1.314-3.802-3.514 0-1.778.31-3.515 4.022-3.515h.503zm0 1.004h-.503c-2.957 0-3.016 1.064-3.017 2.427v.084c0 1.145.485 2.51 2.797 2.51h.471c1.925 0 3.268-1.032 3.268-2.51v-.126-.123c-.01-1.283-.18-2.262-3.016-2.262zM39.243 152.771c3.711 0 4.022 1.737 4.022 3.515 0 2.069-1.757 3.514-4.274 3.514h-.471c-2.38 0-3.802-1.314-3.802-3.514 0-1.778.31-3.515 4.022-3.515h.503zm0 1.004h-.503c-2.957 0-3.016 1.064-3.017 2.427v.084c0 1.145.486 2.51 2.797 2.51h.471c1.925 0 3.269-1.032 3.269-2.51v-.126-.123c-.011-1.283-.181-2.262-3.017-2.262z"
          />

          <path
            fill={PRIMARY_DARKER}
            d="M23.16 153.776c.117-.118 1.404-1.005 5.026-1.005 3.037 0 3.68.323 4.652.81l.072.036c.067.024.413.144.818.158.368-.017.684-.119.776-.152 1.11-.552 2.198-.852 4.739-.852 3.622 0 4.908.887 5.026 1.005.278 0 .503.224.503.502v.502a.502.502 0 01-.503.502s-1.005 0-1.005.502-.503-.727-.503-1.004v-.489c-.613-.24-1.71-.515-3.518-.515-2.014 0-3.018.193-3.878.556l.01.024-.428.173.427.172-.377.931-.466-.188a2.235 2.235 0 00-.256-.079c-.347-.087-.704-.114-1.02-.048a1.368 1.368 0 00-.321.11l-.45.225-.45-.898.45-.225h.001l-.43-.174.014-.034c-.743-.354-1.427-.545-3.883-.545-1.808 0-2.905.275-3.518.515v.489c0 .277-.503 1.506-.503 1.004s-1.005-.502-1.005-.502a.503.503 0 01-.503-.502v-.502c0-.278.225-.502.503-.502z"
          />
        </g>
      </svg>
    </Box>
  );
}

export default memo(BookingIllustration);
