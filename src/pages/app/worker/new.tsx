// @mui
import { Container } from '@mui/material';
// routes
import { PATH_APP } from '../../../routes/paths';
// hooks
import useSettings from '../../../hooks/useSettings';
// layouts
import Layout from '../../../layouts';
// components
import Page from '../../../components/Page';
import HeaderBreadcrumbs from '../../../components/HeaderBreadcrumbs';
// sections
import WorkerNewEditForm from '../../../sections/@app/worker/WorkerNewEditForm';

// ----------------------------------------------------------------------

WorkerCreate.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function WorkerCreate() {
  const { themeStretch } = useSettings();

  return (
    <Page title="User: Create a new worker">
      <Container maxWidth={themeStretch ? false : 'lg'}>
        <HeaderBreadcrumbs
          heading="Create a new worker"
          links={[
            { name: 'Pen-X', href: PATH_APP.root },
            { name: 'Worker', href: PATH_APP.worker.list },
            { name: 'New' },
          ]}
        />
        <WorkerNewEditForm />
      </Container>
    </Page>
  );
}
