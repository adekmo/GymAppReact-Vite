import React from 'react'
import { Link } from 'react-router-dom'
import { Stack, Typography } from '@mui/material'

import Logo from '../assets/images/Logo.png'

const Navbar = () => {
    return (
        <Stack direction="row" justifyContent="space-around" sx={{ gap: {sm: '122px', xs: '48px'}, mt: {sm: '32px', xs: '20px'}, justifyContent: 'none'}} px="20px" back >
            <Typography fontWeight="800" fontSize="28px">
            <Link to="/" style={{textDecoration: 'none', color: '#7f1d1d'}}>
                {/* <img src={Logo} alt="logo" style={{width: '48px', height: '48px', margin: '0 20px'}} /> */}
                DX-GYM
            </Link>
            </Typography>
            <Stack direction="row" gap="40px" fontSize="24px" alignItems="flex-end" >
                <Link to="/" style={{textDecoration: 'none', color: '#dc2626', borderBottom: '3px solid #dc2626' }}>Home</Link>
                {/* <a href="#exercise" style={{textDecoration: 'none', color: '#3A1212'}}>Exercises</a> */}
            </Stack>
        </Stack>
    )
}

export default Navbar
