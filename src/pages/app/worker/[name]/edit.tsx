import { paramCase, capitalCase } from 'change-case';
// next
import { useRouter } from 'next/router';
// @mui
import { Container } from '@mui/material';
// routes
import { PATH_APP } from '../../../../routes/paths';
// hooks
import useSettings from '../../../../hooks/useSettings';
// _mock_
import { _workerList } from '../../../../_mock';
// layouts
import Layout from '../../../../layouts';
// components
import Page from '../../../../components/Page';
import HeaderBreadcrumbs from '../../../../components/HeaderBreadcrumbs';
// sections
import WorkerNewEditForm from '../../../../sections/@app/worker/WorkerNewEditForm';

// ----------------------------------------------------------------------

WorkerEdit.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function WorkerEdit() {
  const { themeStretch } = useSettings();

  const { query } = useRouter();

  const { name } = query;

  const currentWorker = _workerList.find((worker) => paramCase(worker.name) === name);

  return (
    <Page title="Worker: Edit worker">
      <Container maxWidth={themeStretch ? false : 'lg'}>
        <HeaderBreadcrumbs
          heading="Edit worker"
          links={[
            { name: 'Pen-X', href: PATH_APP.root },
            { name: 'Worker', href: PATH_APP.user.list },
            { name: capitalCase(name as string) },
          ]}
        />

        <WorkerNewEditForm isEdit currentWorker={currentWorker} />
      </Container>
    </Page>
  );
}
