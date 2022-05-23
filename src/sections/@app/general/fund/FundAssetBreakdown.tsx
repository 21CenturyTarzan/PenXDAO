// @mui
import { useTheme } from '@mui/material/styles';
import { Box, Card, Rating, CardHeader, Typography, Stack, CardProps } from '@mui/material';
// utils
import { fCurrency, fShortenNumber } from '../../../../utils/formatNumber';
// components
import Label from '../../../../components/Label';
import Image from '../../../../components/Image';
import Iconify from '../../../../components/Iconify';
import Scrollbar from '../../../../components/Scrollbar';

// ----------------------------------------------------------------------

type ItemProps = {
  id: string;
  name: string;
  assetClass: string;
  price: number;
  rating: number;
  performance: number;
  shortcut: string;
};

interface Props extends CardProps {
  title?: string;
  subheader?: string;
  list: ItemProps[];
}

export default function AppTopRelated({ title, subheader, list, ...other }: Props) {
  return (
    <Card {...other}>
      <CardHeader title={title} subheader={subheader} />

      <Scrollbar>
        <Stack spacing={3} sx={{ p: 3, pr: 0 }}>
          {list.map((app) => (
            <ApplicationItem key={app.id} app={app} />
          ))}
        </Stack>
      </Scrollbar>
    </Card>
  );
}

// ----------------------------------------------------------------------

type ApplicationItemProps = {
  app: ItemProps;
};

function ApplicationItem({ app }: ApplicationItemProps) {
  const theme = useTheme();
  const { shortcut, assetClass, price, rating, performance, name } = app;

  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <Box
        sx={{
          width: 48,
          height: 48,
          flexShrink: 0,
          display: 'flex',
          borderRadius: 1.5,
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: 'background.neutral',
        }}
      >
        <Image src={shortcut} alt={name} sx={{ width: 24, height: 24 }} />
      </Box>

      <Box sx={{ flexGrow: 1, minWidth: 160 }}>
        <Typography variant="subtitle2">{name}</Typography>
        


          <Label
            variant={theme.palette.mode === 'light' ? 'ghost' : 'filled'}
            color={assetClass === 'Cryptocurrency' && 'success' || assetClass === 'Stablecoin' && 'error' || 'info' }
          >
            {assetClass}
          </Label>
      </Box>

      <Stack alignItems="flex-end" sx={{ pr: 3 }}>
        <Rating readOnly size="small" precision={0.5} name="reviews" value={rating} />
        <Stack direction="row" alignItems="center" sx={{ mt: 0.5, color: 'text.secondary' }}>
          <Iconify
              width={16}
              height={16}
              icon={assetClass === 'Stable' ? 'ant-design:rise-outlined' : 'ant-design:rise-outlined'}
            />
            <Typography variant="caption" sx={{ mt: 0.5, color: 'text.secondary' }}>
            {fShortenNumber(performance)}&nbsp;%
            </Typography>

        </Stack>
      </Stack>
    </Stack>
  );
}
