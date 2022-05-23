// next
import { useRouter } from 'next/router';
// @mui
import { Container } from '@mui/material';
// routes
import { PATH_APP } from '../../../../routes/paths';
// hooks
import useSettings from '../../../../hooks/useSettings';
// layouts
import Layout from '../../../../layouts';
// _mock_
import { _schedules } from '../../../../_mock';
// components
import Page from '../../../../components/Page';
import HeaderBreadcrumbs from '../../../../components/HeaderBreadcrumbs';
// sections
import ScheduleNewEditForm from '../../../../sections/@app/schedule/new-edit-form';

// ----------------------------------------------------------------------

ScheduleEdit.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function ScheduleEdit() {
  const { themeStretch } = useSettings();

  const { query } = useRouter();

  const { id } = query;

  const currentSchedule = _schedules.find((schedule) => schedule.id === id);

  return (
    <Page title="Schedule: Edit">
      <Container maxWidth={themeStretch ? false : 'lg'}>
        <HeaderBreadcrumbs
          heading="Edit schedule"
          links={[
            { name: 'Pen-X', href: PATH_APP.root },
            { name: 'Contribution Schedules', href: PATH_APP.schedule.list },
            { name: `CS-${currentSchedule?.scheduleId}` || '' },
          ]}
        />

        <ScheduleNewEditForm isEdit currentSchedule={currentSchedule} />
      </Container>
    </Page>
  );
}
