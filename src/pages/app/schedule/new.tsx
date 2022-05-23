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
import InvoiceNewEditForm from '../../../sections/@app/schedule/new-edit-form';

// ----------------------------------------------------------------------

InvoiceCreate.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};

// ----------------------------------------------------------------------


export default function InvoiceCreate() {
  const { themeStretch } = useSettings();

  return (
    <Page title="Contribution Schedules: New">
      <Container maxWidth={themeStretch ? false : 'lg'}>
        <HeaderBreadcrumbs
          heading="Create a new Contribution Schedule"
          links={[
            { name: 'Pen-X', href: PATH_APP.root },
            { name: 'Contribution Schedules', href: PATH_APP.schedule.list },
            { name: 'New' },
          ]}
        />

        <InvoiceNewEditForm />
      </Container>
    </Page>
  );
}
