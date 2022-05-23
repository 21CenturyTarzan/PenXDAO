import orderBy from 'lodash/orderBy';
// @mui
import { alpha, styled } from '@mui/material/styles';
import { Box, Stack, Card, Avatar, CardHeader, Typography, CardProps } from '@mui/material';
// utils
import { fShortenNumber } from '../../../../utils/formatNumber';
// components
import Iconify from '../../../../components/Iconify';

// ----------------------------------------------------------------------

const IconWrapperStyle = styled('div')(({ theme }) => ({
  width: 40,
  height: 40,
  display: 'flex',
  borderRadius: '50%',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'orange',
  backgroundColor: alpha(theme.palette.primary.main, 0.08),
}));

// ----------------------------------------------------------------------

type ItemProps = {
  id: string;
  orgName: string;
  avatar: string;
  favourite: number;
};

interface Props extends CardProps {
  title?: string;
  subheader?: string;
  list: ItemProps[];
}

export default function FundTopOrgs({ title, subheader, list, ...other }: Props) {
  return (
    <Card {...other}>
      <CardHeader title={title} subheader={subheader} />

      <Stack spacing={3} sx={{ p: 3 }}>
        {orderBy(list, ['favourite'], ['desc']).map((org, index) => (
          <OrgItem key={org.id} org={org} index={index} />
        ))}
      </Stack>
    </Card>
  );
}

// ----------------------------------------------------------------------

type OrgItemProps = {
  org: ItemProps;
  index: number;
};

function OrgItem({ org, index }: OrgItemProps) {
  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <Avatar alt={org.orgName} src={org.avatar} />

      <Box sx={{ flexGrow: 1 }}>
        <Typography variant="subtitle2">{org.orgName}</Typography>

        <Typography
          variant="caption"
          sx={{
            mt: 0.5,
            display: 'flex',
            alignItems: 'center',
            color: 'text.secondary',
          }}
        >
          <Iconify icon={'eva:star-fill'} sx={{ width: 16, height: 16, mr: 0.5 }} />
          {fShortenNumber(org.favourite)}
        </Typography>
      </Box>

      <IconWrapperStyle
        sx={{
          ...(index === 1 && {
            color: 'gray',
            bgcolor: (theme) => alpha(theme.palette.info.main, 0.08),
          }),
          ...(index === 2 && {
            color: 'brown',
            bgcolor: (theme) => alpha(theme.palette.error.main, 0.08),
          }),
          ...(index > 2 && {
            display: 'none',
          }),
        }}
      >
        <Iconify icon={'ant-design:trophy-filled'} width={20} height={20} />
      </IconWrapperStyle>
    </Stack>
  );
}
