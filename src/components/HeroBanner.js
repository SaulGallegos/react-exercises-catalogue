import { Box, Typography, Button } from '@mui/material';

import HeroBannerImage from '../assets/images/banner.png';

const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: { lg: '155px', xs: '70px' },
        ml: { sm: '50px' },
      }}
      position='relative'
      p='20px'
    >
      <Typography color='#FF2625' fontWeight='600' fontSize='26px'>
        Fitness club
      </Typography>
      <Typography
        fontWeight='700'
        sx={{
          fontSize: { lg: '65px', xs: '45px' },
        }}
        lineHeight='1.2'
        mb='75px'
      >
        Sweat, Smile <br /> and Repeat
      </Typography>
      <Typography fontSize='22px' lineHeight='35px' mb={2}>
        Check out the most effective exercises
      </Typography>

      <Button
        variant='contained'
        color='error'
        href='#exercises'
        sx={{ backgroundColor: '#ff2625', padding: '10px' }}
      >
        Explore
      </Button>

      <Typography
        fontWeight={600}
        color='#ff2625'
        sx={{ opacity: 0.1, display: { lg: 'block', xs: 'none' } }}
        fontSize='200px'
      >
        Exercise
      </Typography>

      <img src={HeroBannerImage} alt='Banner' className='hero-banner-img' />
    </Box>
  );
};
export default HeroBanner;
