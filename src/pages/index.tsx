// @mui
import { styled } from '@mui/material/styles';
// layouts
import Layout from '../layouts';
// components
import Page from '../components/Page';
// sections
import {
  HomeHero,
  HomeUsp,
  HomeWorker,
  HomeColorPresets,
  HomePricingPlans,
  HomeAdvertisement,
  HomeAssets,
  HomeAbout1,
  HomeAbout2,
  HomeAbout3,
} from '../sections/home';

// ----------------------------------------------------------------------

const ContentStyle = styled('div')(({ theme }) => ({
  overflow: 'hidden',
  position: 'relative',
  backgroundColor: theme.palette.background.default,
}));

// ----------------------------------------------------------------------

HomePage.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout variant="main">{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function HomePage() {
  return (
    <Page title="Pen-X | The Web3 Pension Fund">
      <HomeHero />

      <ContentStyle>
        <HomeAbout1 />
        <HomeAbout2 />
        <HomeUsp />


        <HomeAbout3 />

        {/* <HomeColorPresets /> */}

        <HomeAssets />


        {/* <HomePricingPlans /> */}

        <HomeWorker />

        {/* <HomeAdvertisement /> */}
      </ContentStyle>
    </Page>
  );
}
