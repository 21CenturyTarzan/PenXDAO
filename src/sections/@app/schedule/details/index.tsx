// @mui
import { styled, useTheme } from '@mui/material/styles';
import {
  Box,
  Card,
  Grid,
  Table,
  Divider,
  TableRow,
  TableBody,
  TableHead,
  TableCell,
  Typography,
  TableContainer,
} from '@mui/material';
// utils
import { fDate } from '../../../../utils/formatTime';
import { fCurrency } from '../../../../utils/formatNumber';
// _mock_
import { Schedule } from '../../../../@types/schedule';
// components
import Label from '../../../../components/Label';
import Image from '../../../../components/Image';
import Scrollbar from '../../../../components/Scrollbar';
//
import ScheduleToolbar from './ScheduleToolbar';

// ----------------------------------------------------------------------

const RowResultStyle = styled(TableRow)(({ theme }) => ({
  '& td': {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
}));

// ----------------------------------------------------------------------

type Props = {
  schedule?: Schedule;
};

export default function ScheduleDetails({ schedule }: Props) {
  const theme = useTheme();

  if (!schedule) {
    return null;
  }

  const {
    items,
    scheduleId,
    status,
    scheduleName,
    scheduleYear,
    scheduleMonth,
    dueDate,
    discount,
    createDate,
    subAmount,
    amount
  } = schedule;

  return (
    <>
      <ScheduleToolbar schedule={schedule} />

      <Card sx={{ pt: 5, px: 5 }}>
        <Grid container>
          <Grid item xs={12} sm={6} sx={{ mb: 5 }}>
            <Image
              disabledEffect
              visibleByDefault
              alt="logo"
              src="/logo/logo_full.svg"
              sx={{ maxWidth: 120 }}
            />
          </Grid>

          <Grid item xs={12} sm={6} sx={{ mb: 5 }}>
            <Box sx={{ textAlign: { sm: 'right' } }}>
              <Label
                variant={theme.palette.mode === 'light' ? 'ghost' : 'filled'}
                color={
                  (status === 'paid' && 'success') ||
                  (status === 'unpaid' && 'warning') ||
                  (status === 'overdue' && 'error') ||
                  'default'
                }
                sx={{ textTransform: 'uppercase', mb: 1 }}
              >
                {status}
              </Label>

              <Typography variant="h6">{`CS-${scheduleId}`}</Typography>
            </Box>
          </Grid>

          {/* <Grid item xs={12} sm={6} sx={{ mb: 5 }}>
            <Typography paragraph variant="overline" sx={{ color: 'text.disabled' }}>
              Invoice from
            </Typography>
            <Typography variant="body2">{invoiceFrom.name}</Typography>
            <Typography variant="body2">{invoiceFrom.address}</Typography>
            <Typography variant="body2">Phone: {invoiceFrom.phone}</Typography>
          </Grid>

          <Grid item xs={12} sm={6} sx={{ mb: 5 }}>
            <Typography paragraph variant="overline" sx={{ color: 'text.disabled' }}>
              Invoice to
            </Typography>
            <Typography variant="body2">{invoiceTo.name}</Typography>
            <Typography variant="body2">{invoiceTo.address}</Typography>
            <Typography variant="body2">Phone: {invoiceTo.phone}</Typography>
          </Grid> */}

          <Grid item xs={12} sm={6} sx={{ mb: 5 }}>
            <Typography paragraph variant="overline" sx={{ color: 'text.disabled' }}>
              date create
            </Typography>
            <Typography variant="body2">{fDate(createDate)}</Typography>
          </Grid>

          <Grid item xs={12} sm={6} sx={{ mb: 5 }}>
            <Typography paragraph variant="overline" sx={{ color: 'text.disabled' }}>
              Due date
            </Typography>
            <Typography variant="body2">{fDate(dueDate)}</Typography>
          </Grid>
        </Grid>

        <Scrollbar>
          <TableContainer sx={{ minWidth: 760 }}>
            <Table>
              <TableHead
                sx={{
                  borderBottom: (theme) => `solid 1px ${theme.palette.divider}`,
                  '& th': { backgroundColor: 'transparent' },
                }}
              >
                <TableRow>
                  <TableCell width={10}>#</TableCell>
                  <TableCell align="left">Worker</TableCell>
                  <TableCell align="right">Compensation</TableCell>
                  <TableCell align="right">DAO Cont.</TableCell>
                  <TableCell align="right">Worker Cont.</TableCell>
                  <TableCell align="right">Total Contribution</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {items.map((row, index) => (

                  <TableRow
                    key={index}
                    sx={{
                      borderBottom: (theme) => `solid 1px ${theme.palette.divider}`,
                    }}
                  >
                    <TableCell>{index + 1}</TableCell>
                    <TableCell align="left">
                      <Box>
                        <Typography variant="subtitle2">{row.workerId}</Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
                          {row.workerId}
                        </Typography>
                      </Box>
                    </TableCell>
                    <TableCell align="right">{fCurrency(row.compensation)}</TableCell>
                    <TableCell align="right">{(row.daoContribution) + '%'}</TableCell>
                    <TableCell align="right">{(row.workerContribution) + '%'}</TableCell>
                    <TableCell align="right">{fCurrency(row.totalContribution)}</TableCell>
                  </TableRow>
                ))}

                <RowResultStyle>
                  <TableCell colSpan={4} />
                  <TableCell align="right">
                    <Box sx={{ mt: 2 }} />
                    <Typography>Subtotal</Typography>
                  </TableCell>
                  <TableCell align="right" width={120}>
                    <Box sx={{ mt: 2 }} />
                    <Typography>{fCurrency(subAmount)}</Typography>
                  </TableCell>
                </RowResultStyle>

                <RowResultStyle>
                  <TableCell colSpan={4} />
                  <TableCell align="right">
                    <Typography>Discount</Typography>
                  </TableCell>
                  <TableCell align="right" width={120}>
                    <Typography sx={{ color: 'error.main' }}>
                      {discount && fCurrency(-discount)}
                    </Typography>
                  </TableCell>
                </RowResultStyle>

                {/* <RowResultStyle>
                  <TableCell colSpan={4} />
                  <TableCell align="right">
                    <Typography>Taxes</Typography>
                  </TableCell>
                  <TableCell align="right" width={120}>
                    <Typography>{taxes && fCurrency(taxes)}</Typography>
                  </TableCell>
                </RowResultStyle> */}

                <RowResultStyle>
                  <TableCell colSpan={4} />
                  <TableCell align="right">
                    <Typography variant="h6">Total</Typography>
                  </TableCell>
                  <TableCell align="right" width={140}>
                    <Typography variant="h6">{fCurrency(amount)}</Typography>
                  </TableCell>
                </RowResultStyle>
              </TableBody>
            </Table>
          </TableContainer>
        </Scrollbar>

        <Divider sx={{ mt: 5 }} />

        <Grid container>
          <Grid item xs={12} md={9} sx={{ py: 3 }}>
            <Typography variant="subtitle2">NOTES</Typography>
            <Typography variant="body2">
              We appreciate your business. Should you have any questions, please let us know!
            </Typography>
          </Grid>
          <Grid item xs={12} md={3} sx={{ py: 3, textAlign: 'right' }}>
            <Typography variant="subtitle2">Have a Question?</Typography>
            <Typography variant="body2">support@penxdao.com</Typography>
          </Grid>
        </Grid>
      </Card>
    </>
  );
}
