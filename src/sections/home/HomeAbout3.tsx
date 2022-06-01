import { m } from 'framer-motion';
// @mui
import { styled } from '@mui/material/styles';
import { Box, Button, Grid, Container, Typography } from '@mui/material';
// components
import Image from '../../components/Image';
import { MotionViewport, varFade } from '../../components/animate';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(28, 0),
  backgroundColor: '#191A35',
}));

const ContentStyle = styled('div')(({ theme }) => ({
  textAlign: 'center',
  position: 'relative',
  marginBottom: theme.spacing(10),
  [theme.breakpoints.up('md')]: {
    height: '100%',
    marginBottom: 0,
    textAlign: 'left',
    display: 'inline-flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
}));

// ----------------------------------------------------------------------

export default function HomeAbout3() {
  return (
    <RootStyle>
      <Container component={MotionViewport} sx={{ position: 'relative' }}>
        <Image
          visibleByDefault
          disabledEffect
          alt="image shape"
          src="assets/home/shape.svg"
          sx={{
            top: 0,
            right: 0,
            bottom: 0,
            width: 720,
            height: 720,
            opacity: 0.48,
            my: 'auto',
            position: 'absolute',
            display: { xs: 'none', md: 'block' },
          }}
        />

        <Grid container spacing={5} direction="row-reverse" justifyContent="space-between">
          <Grid item xs={12} md={4}>
            <ContentStyle>
              <m.div variants={varFade().inUp}>
                <Typography
                  component="div"
                  variant="overline"
                  sx={{ mb: 2, color: 'text.disabled' }}
                >
                  Who controls Pen-X?
                </Typography>
              </m.div>

              <m.div variants={varFade().inUp}>
                <Typography variant="h2" sx={{ mb: 3, color: 'common.white' }}>
                  Truly decentralised.
                </Typography>
              </m.div>

              <m.div variants={varFade().inUp}>
                <Typography sx={{ color: 'common.white', mb: 5 }}>
                Pen-X is controlled by everyone involved: from our fund managers and engineers to the customers who invest their savings into our fund. While the governance of Pen-X is decentralized and transparent, the DAO holds defined structures and processes that allow it to operate efficiently and maintain the high standards required for a robust financial product.
                </Typography>
              </m.div>


              <m.div variants={varFade().inUp}>
                <Button
                  size="large"
                  color="inherit"
                  variant="contained"
                  target="_blank"
                  rel="noopener"
                  href="https://docs.penxdao.com/"
                >
                  Read Fund Documentation
                </Button>
              </m.div>
            </ContentStyle>
          </Grid>

          <Grid item xs={12} md={7} sx={{ position: 'relative' }}>
            <m.div variants={varFade().inUp}>
              <Image
                alt="Pen-X About"
                src="assets/home/about3-image1.png"
              />
            </m.div>


            <Box
              component={m.div}
              variants={varFade().inDown}
              sx={{ top: 0, left: 0, position: 'absolute' }}
            >
              <Image
                alt="Pen-X About"
                src="assets/home/about3-image2.png"
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}
