// next
import NextLink from 'next/link';
// @mui
import { styled } from '@mui/material/styles';
import { Grid, Box, Link, Divider, Container, Typography, Stack } from '@mui/material';
// routes
import { PATH_EXT, PATH_PAGE } from '../../routes/paths';
// components
import Logo from '../../components/Logo';
import SocialsButton from '../../components/SocialsButton';

// ----------------------------------------------------------------------

const LINKS = [
  {
    headline: 'Pen-X',
    children: [
      { name: 'Home', href: '#' },
      { name: 'Documentation', href: PATH_EXT.docs },
      { name: 'Jobs', href: PATH_EXT.jobs },
      { name: 'Discord', href: PATH_EXT.discord },
    ],
  },
  {
    headline: 'Legal',
    children: [
      { name: 'Terms and Condition', href: '#' },
      { name: 'Privacy Policy', href: '#' },
    ],
  },
  {
    headline: 'Contact',
    children: [
      { name: 'contact@penxdao.com', href: 'mailto:contact@penxdao.com' },
      { name: 'penxdao.com', href: 'https://penxdao.com' },
    ],
  },
];

const RootStyle = styled('div')(({ theme }) => ({
  position: 'relative',
  backgroundColor: theme.palette.background.default,
}));

// ----------------------------------------------------------------------

export default function MainFooter() {
  return (
    <RootStyle>
      <Divider />

      

      <Container sx={{ pt: 10 }}>
        <Grid
          container
          justifyContent={{ xs: 'center', md: 'space-between' }}
          sx={{ textAlign: { xs: 'center', md: 'left' } }}
        >
          <Grid item xs={12} sx={{ mb: 3 }}>
            <Logo sx={{ mx: { xs: 'auto', md: 'inherit' } }} />
          </Grid>
          <Grid item xs={8} md={3}>
            <Typography variant="body2" sx={{ pr: { md: 5 } }}>
            We are disrupting the traditional pension market with the world's first DeFi retirement fund. Managed by the people of today to help the retiree of tomorrow.
            </Typography>

            <Stack
              direction="row"
              justifyContent={{ xs: 'center', md: 'flex-start' }}
              sx={{ mt: 5, mb: { xs: 5, md: 0 } }}
            >
              <SocialsButton sx={{ mx: 0.5 }} />
            </Stack>
          </Grid>

          <Grid item xs={12} md={7}>
            <Stack
              spacing={5}
              direction={{ xs: 'column', md: 'row' }}
              justifyContent="space-between"
            >
              {LINKS.map((list) => (
                <Stack key={list.headline} spacing={2}>
                  <Typography component="p" variant="overline">
                    {list.headline}
                  </Typography>
                  {list.children.map((link) => (
                    <NextLink key={link.name} href={link.href} passHref>
                      <Link color="inherit" variant="body2" sx={{ display: 'block' }}>
                        {link.name}
                      </Link>
                    </NextLink>
                  ))}
                </Stack>
              ))}
            </Stack>
          </Grid>
        </Grid>


        <Typography variant="caption" component="p"
          sx={{
            mt: 4,
            fontSize: 10,
            textAlign: { xs: 'center', md: 'left' },
          }}
            >
            CAPITAL AT RISK. Information is for educational and illustrative purposes only. Pen-X is not engaged in the business of the offer, sale, or trading of securities and does not provide legal, tax, or investment advice. Cryptocurrencies and other digital assets are speculative and involve a substantial degree of risk, including the risk of a complete loss. There can be no assurance that any cryptocurrency, token, coin, or other crypto assets will be viable, liquid, or solvent. No Pen-X communication is intended to imply that any digital assets are low-risk or risk-free. Pen-X works hard to provide accurate information on this website but cannot guarantee that all content is correct, complete, or updated. Investors may not get back the amount originally invested.
            </Typography>

        <Typography
          component="p"
          variant="body2"
          sx={{
            mt: 2,
            pb: 5,
            fontSize: 13,
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          © 2022. All rights reserved
        </Typography>
      </Container>
    </RootStyle>
  );
}
