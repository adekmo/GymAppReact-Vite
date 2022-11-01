import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
// import Logo from '../assets/images/Logo.png'

const Footer = () => {
    return (
        <Box mt="80px" bgcolor="#0B1521">
            <Stack gap="40px" alignItems="center" px="40px" pt="24px">
                {/* <img src={Logo} alt="logo" width="200px" height="40px" /> */}
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-barbell" width="200" height="40" viewBox="0 0 24 24" stroke-width="2" stroke="#dc2626" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="#dc2626" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M2 12h1"></path>
                    <path d="M6 8h-2a1 1 0 0 0 -1 1v6a1 1 0 0 0 1 1h2"></path>
                    <path d="M6 7v10a1 1 0 0 0 1 1h1a1 1 0 0 0 1 -1v-10a1 1 0 0 0 -1 -1h-1a1 1 0 0 0 -1 1z"></path>
                    <path d="M9 12h6"></path>
                    <path d="M15 7v10a1 1 0 0 0 1 1h1a1 1 0 0 0 1 -1v-10a1 1 0 0 0 -1 -1h-1a1 1 0 0 0 -1 1z"></path>
                    <path d="M18 8h2a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-2"></path>
                    <path d="M22 12h-1"></path>
                </svg>
                <Typography variant="h5" mt="10px" pb="30px" color="#fef2f2">
                    Made by <span style={{ color: '#dc2626'}}>Monang Bahana</span>
                </Typography>
            </Stack>
        </Box>
    )
}

export default Footer
