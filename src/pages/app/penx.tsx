// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Container } from '@mui/material';
// hooks
import useSettings from '../../hooks/useSettings';
// layouts
import Layout from '../../layouts';
// _mock_
import { _bookings, _bookingNew, _bookingsOverview, _bookingReview } from '../../_mock';
// components
import Page from '../../components/Page';
// sections
import {
  PenxDetails,
  PenxBookedRoom,
  PenxTotalIncomes,
  PenxRoomAvailable,
  PenxNewestBooking,
  PenxWidgetSummary,
  PenxCheckInWidgets,
  PenxCustomerReviews,
  PenxReservationStats,
} from '../../sections/@app/general/penx';
// assets
import { BookingIllustration, CheckInIllustration, CheckOutIllustration } from '../../assets';

// ----------------------------------------------------------------------

GeneralPenx.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};

// ----------------------------------------------------------------------
export default function GeneralPenx() {
  const theme = useTheme();

  const { themeStretch } = useSettings();

  return (
    <Page title="General: Banking">
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <PenxWidgetSummary
              title="Total Penx"
              total={714000}
              icon={<BookingIllustration />}
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <PenxWidgetSummary title="Check In" total={311000} icon={<CheckInIllustration />} />
          </Grid>

          <Grid item xs={12} md={4}>
            <PenxWidgetSummary
              title="Check Out"
              total={124000}
              icon={<CheckOutIllustration />}
            />
          </Grid>

          <Grid item xs={12} md={8}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <PenxTotalIncomes
                  total={18765}
                  percent={2.6}
                  chartData={[111, 136, 76, 108, 74, 54, 57, 84]}
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <PenxBookedRoom title="Booked Room" data={_bookingsOverview} />
              </Grid>

              <Grid item xs={12} md={12}>
                <PenxCheckInWidgets
                  chartData={[
                    { label: 'Check In', percent: 72, total: 38566 },
                    { label: 'Check Out', percent: 64, total: 18472 },
                  ]}
                />
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} md={4}>
            <PenxRoomAvailable
              title="Room Available"
              data={[
                { label: 'Sold out', value: 120 },
                { label: 'Available', value: 66 },
              ]}
              chartColors={[[theme.palette.primary.light, theme.palette.primary.main]]}
            />
          </Grid>

          <Grid item xs={12} md={8}>
            <PenxReservationStats
              title="Reservation Stats"
              subheader="(+43% Check In | +12% Check Out) than last year"
              chartLabels={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']}
              chartData={[
                {
                  year: 'Week',
                  data: [
                    { name: 'Check In', data: [10, 41, 35, 151, 49, 62, 69, 91, 48] },
                    { name: 'Check Out', data: [10, 34, 13, 56, 77, 88, 99, 77, 45] },
                  ],
                },
                {
                  year: 'Month',
                  data: [
                    { name: 'Check In', data: [148, 91, 69, 62, 49, 51, 35, 41, 10] },
                    { name: 'Check Out', data: [45, 77, 99, 88, 77, 56, 13, 34, 10] },
                  ],
                },
                {
                  year: 'Year',
                  data: [
                    { name: 'Check In', data: [76, 42, 29, 41, 27, 138, 117, 86, 63] },
                    { name: 'Check Out', data: [80, 55, 34, 114, 80, 130, 15, 28, 55] },
                  ],
                },
              ]}
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <PenxCustomerReviews
              title="Customer Reviews"
              subheader={`${_bookingReview.length} Reviews`}
              list={_bookingReview}
            />
          </Grid>

          <Grid item xs={12}>
            <PenxNewestBooking
              title="Newest Penx"
              subheader="12 Penx"
              list={_bookingNew}
            />
          </Grid>

          <Grid item xs={12}>
            <PenxDetails
              title="Penx Details"
              tableData={_bookings}
              tableLabels={[
                { id: 'booker', label: 'Booker' },
                { id: 'checkIn', label: 'Check In' },
                { id: 'checkOut', label: 'Check Out' },
                { id: 'status', label: 'Status' },
                { id: 'phone', label: 'Phone' },
                { id: 'roomType', label: 'Room Type' },
                { id: '' },
              ]}
            />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
