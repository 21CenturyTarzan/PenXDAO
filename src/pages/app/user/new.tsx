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
import UserNewEditForm from '../../../sections/@app/user/UserNewEditForm';

// ----------------------------------------------------------------------

UserCreate.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function UserCreate() {
  const { themeStretch } = useSettings();

  return (
    <Page title="User: Create a new user">
      <Container maxWidth={themeStretch ? false : 'lg'}>
        <HeaderBreadcrumbs
          heading="Create a new user"
          links={[
            { name: 'Dashboard', href: PATH_APP.root },
            { name: 'User', href: PATH_APP.user.list },
            { name: 'New user' },
          ]}
        />
        <UserNewEditForm />
      </Container>
    </Page>
  );
}
