import { Box, Stack, Typography } from '@mui/material';
import { Bell, ChevronLeft, ChevronRight, Ellipsis, Flag, Menu, Share } from 'lucide-react';
import React from 'react'

const Navbar = ({ handleToggleSideBar, isSidebarPinned }) => {
    return (
        <Stack flexDirection="row" justifyContent="space-between" alignItems="center" padding="16px 24px" sx={{ backgroundColor: '#262626', zIndex: 1100, position: "sticky", top: 0, transition: "margin-left 0.6s ease" }} >

            <Stack flexDirection="row" alignItems="center" gap={2}>
                <Menu size={16} color='white' style={{ cursor: "pointer" }} onClick={handleToggleSideBar} />
                <ChevronLeft size={14} color='white' />
                <ChevronRight size={14} color='gray' />
                <Flag size={16} color="#a159ea" strokeWidth={2} />
                <Typography variant='body2' sx={{ "color": "white" }}>Projects</Typography>
                <Typography variant='body2' sx={{ "color": "gray" }}>Company</Typography>
            </Stack>

            <Stack flexDirection="row" alignItems="center" gap={2}>

                <Stack flexDirection="row" alignItems="center" gap={1}>
                    <Share size={16} color='gray' />
                    <Typography variant='body2' sx={{ "color": "gray", fontWeight: "bold", fontSize: "14px" }}>Share</Typography>
                </Stack>
                <Bell size={16} color='white' />
                <Ellipsis size={16} color='white' />

            </Stack>

        </Stack>
    )
}

export default Navbar;