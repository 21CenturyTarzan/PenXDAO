// @mui
import { useTheme } from '@mui/material/styles';
import { Container, Grid, Stack, Button } from '@mui/material';
// hooks
import useAuth from '../../hooks/useAuth';
import useSettings from '../../hooks/useSettings';
// layouts
import Layout from '../../layouts';
// _mock_
import { _appFeatured, _fundOrgs, _appInstalled, _fundAssetBreakdown, _appInvoices } from '../../_mock';
// components
import Page from '../../components/Page';
// sections
import {
  FundWelcome,
  FundFeatured,
  FundTopOrgs,
  FundInviteFriends,
  FundAssetBreakdown,
  FundAreaInstalled,
  FundWidgetSummary,
  FundCurrentDownload,
} from '../../sections/@app/general/fund';
// assets
import { SeoIllustration } from '../../assets';

// ----------------------------------------------------------------------

GeneralFund.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function GeneralFund() {
  const { user } = useAuth();

  const theme = useTheme();

  const { themeStretch } = useSettings();

  return (
    <Page title="General: Fund">
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <FundWelcome
              title={`Welcome back! \n ${user?.orgName}`}
              description="We're really excited to have you joining the Web3 Pension Revolution! We'd love to connect."
              img={
                <SeoIllustration
                  sx={{
                    p: 3,
                    width: 360,
                    margin: { xs: 'auto', md: 'inherit' },
                  }}
                />
              }
              action={<Button variant="contained" href="https://link.penxdao.com/discord">Join Pen-X Discord</Button>}
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <FundFeatured list={_appFeatured} />
          </Grid>

          <Grid item xs={12} md={4}>
            <FundWidgetSummary
              title="Weekly Performance"
              percent={-0.6}
              total={8765}
              chartColor={theme.palette.chart.red[0]}
              chartData={[5, 18, 12, 30, 43, 11, 39, 24, 8, -8]}
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <FundWidgetSummary
              title="Monthly Performance"
              percent={6.2}
              total={14876}
              chartColor={theme.palette.primary.main}
              chartData={[20, 41, 63, 33, 28, 35, 50, 46, 52, 54]}
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <FundWidgetSummary
              title="Annual Performance"
              percent={25.1}
              total={678}
              chartColor={theme.palette.primary.main}
              chartData={[8, 9, 31, 8, 16, 37, 8, 33, 46, 31]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <FundCurrentDownload
              title="Fund Allocation (USD)"
              chartColors={[
                theme.palette.primary.lighter,
                theme.palette.primary.light,
                theme.palette.primary.main,
                theme.palette.primary.dark,
              ]}
              chartData={[
                { label: 'Stablecoins', value: 252244 },
                { label: 'Cryptocurrency', value: 313345 },
                { label: 'DeFi Assets', value: 24313 },
                { label: 'IRL Commodities', value: 38343 },
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <FundAreaInstalled
              title="Pen-X Fund Performance"
              subheader="(+25.1%) in last year"
              chartLabels={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']}
              chartData={[
                {
                  year: '2019',
                  data: [
                    { name: 'Pen-X Fund', data: [10, 31, 35, 51, 49, 62, 69, 71, 69, 86, 96, 102] },
                    { name: 'Benchmark', data: [10, 34, 13, 56, 77, 88, 99, 67, 35, 57, 79, 112] },
                  ],
                },
                {
                  year: '2020',
                  data: [
                    { name: 'Pen-X Fund', data: [5, 28, 37, 41, 39, 52, 59, 55, 69, 86, 96, 102] },
                    { name: 'Benchmark', data: [10, 38, 13, 56, 83, 53, 79, 27, 35, 57, 79, 92] },
                  ],
                },
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <FundCurrentDownload
              title="Fund Allocation (USD)"
              chartColors={[
                theme.palette.primary.lighter,
                theme.palette.primary.light,
                theme.palette.primary.main,
                theme.palette.primary.dark,
              ]}
              chartData={[
                { label: 'Stablecoins', value: 252244 },
                { label: 'Cryptocurrency', value: 313345 },
                { label: 'DeFi Assets', value: 24313 },
                { label: 'IRL Comodities', value: 38343 },
              ]}
            />
          </Grid>

          {/* <Grid item xs={12} lg={8}>
            <FundNewInvoice
              title="New Invoice"
              tableData={_appInvoices}
              tableLabels={[
                { id: 'id', label: 'Invoice ID' },
                { id: 'category', label: 'Category' },
                { id: 'price', label: 'Price' },
                { id: 'status', label: 'Status' },
                { id: '' },
              ]}
            />
          </Grid> */}

          <Grid item xs={12} md={6} lg={8}>
            <FundAssetBreakdown title="Fund Asset Breakdown" list={_fundAssetBreakdown} />
          </Grid>

          {/* <Grid item xs={12} md={6} lg={4}>
            <FundTopInstalledCountries title="Top Installed Countries" list={_appInstalled} />
          </Grid> */}

          {/* <Grid item xs={12} md={6} lg={4}>
            <Stack spacing={3}>
              <FundWidget title="Conversion" total={38566} icon={'eva:person-fill'} chartData={48} />
              <FundWidget
                title="Applications"
                total={55566}
                icon={'eva:email-fill'}
                color="warning"
                chartData={75}
              />
            </Stack>
          </Grid> */}



          <Grid item xs={12} md={6} lg={4}>
            <FundInviteFriends
                price="5,000 PENX"
                title={`Invite friends \n and earn`}
                description="Praesent egestas tristique nibh. Duis lobortis massa imperdiet quam."
                img="/assets/illustrations/illustration_invite.png"
              />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <FundTopOrgs title="Top Organisations" subheader="These are the biggest Pen-X pension contributors. Way to go!" list={_fundOrgs} />
          </Grid>

        </Grid>
      </Container>
    </Page>
  );
}
