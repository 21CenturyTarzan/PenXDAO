// @mui
import { Container } from '@mui/material';
// routes
import { PATH_APP } from '../../../../routes/paths';
// hooks
import useSettings from '../../../../hooks/useSettings';
// layouts
import Layout from '../../../../layouts';
// components
import Page from '../../../../components/Page';
import HeaderBreadcrumbs from '../../../../components/HeaderBreadcrumbs';
// sections
import ProductNewEditForm from '../../../../sections/@app/e-commerce/ProductNewEditForm';

// ----------------------------------------------------------------------

EcommerceProductCreate.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function EcommerceProductCreate() {
  const { themeStretch } = useSettings();

  return (
    <Page title="Ecommerce: Create a new product">
      <Container maxWidth={themeStretch ? false : 'lg'}>
        <HeaderBreadcrumbs
          heading="Create a new product"
          links={[
            { name: 'Dashboard', href: PATH_APP.root },
            {
              name: 'E-Commerce',
              href: PATH_APP.eCommerce.root,
            },
            { name: 'New product' },
          ]}
        />
        <ProductNewEditForm />
      </Container>
    </Page>
  );
}
