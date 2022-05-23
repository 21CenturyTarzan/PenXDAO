// next
import { useRouter } from 'next/router';
// @mui
import { Container } from '@mui/material';
// routes
import { PATH_APP } from '../../../../routes/paths';
// _mock_
import { _schedules } from '../../../../_mock';
// hooks
import useSettings from '../../../../hooks/useSettings';
// layouts
import Layout from '../../../../layouts';
// components
import Page from '../../../../components/Page';
import HeaderBreadcrumbs from '../../../../components/HeaderBreadcrumbs';
// sections
import Schedule from '../../../../sections/@app/schedule/details';
// import ScheduleDetails from '../../../../sections/@app/schedule/details';

// ----------------------------------------------------------------------

ScheduleDetails.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function ScheduleDetails() {
  const { themeStretch } = useSettings();

  const { query } = useRouter();

  const { id } = query;

  const schedule = _schedules.find((schedule) => schedule.id === id);

  return (
    <Page title="Contribution Schedule: View">
      <Container maxWidth={themeStretch ? false : 'lg'}>
        <HeaderBreadcrumbs
          heading="Contribution Schedule Details"
          links={[
            { name: 'Pen-X', href: PATH_APP.root },
            {
              name: 'Contributions',
              href: PATH_APP.schedule.root,
            },
            { name: `CS-${schedule?.scheduleId}` || '' },
          ]}
        />

        <Schedule schedule={schedule} />
      </Container>
    </Page>
  );
}
