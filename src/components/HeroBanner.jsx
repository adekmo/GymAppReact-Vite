import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import Banner from '../assets/images/new-Banner.jpg'

const HeroBanner = () => {
    return (
        <Box sx={{
            mt: {lg: '212px', xs: '70px'},
            ml: {sm: '50px'}
        }} position="relative" p="20px">
            <Typography color="#dc2626" fontWeight="700" fontSize="28px">
                Deks-Fitness Club
            </Typography>
            <Typography color="#fef2f2" fontWeight="700" sx= {{
                fontSize: { lg: '44px', xs: '40px'}
            }}  mb="23px" mt="30px">
                Gain your Muscle <br></br>
                and Be a Monster
            </Typography>
            <Typography fontSize='22px' color="#fef2f2" lineHeight='35px' mb={4}>
                Check out the most effective exercises
            </Typography>
            <Button variant="contained" color="error" href="#exercises"
            sx={{ backgroundColor: '#FF2625', padding: '10px'}}>Explore Exercise</Button>
            <Typography fontWeight="600"
            color="#dc2626"
            sx ={{
                opacity: 0.1,
                display: {lg : 'block', xs: 'none'}
            }} fontSize="200px">Exercises</Typography>
            <img src={Banner} alt="banner" className="hero-banner-img"></img>
        </Box>
    )
}

export default HeroBanner
