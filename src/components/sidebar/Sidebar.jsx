// Sidebar.js
import React, { forwardRef } from 'react';
import { Stack } from '@mui/material';
import { ChevronLeft, ChevronRight, History, PanelLeftClose, PanelRightClose } from 'lucide-react';
import logo from '../../assets/heightslogo.png';

const Sidebar = forwardRef(({ isSidebarOpen, isSidebarPinned, handlePinToggle }, ref) => {
  return (
    <Stack
      ref={ref}
      gap={2}
      sx={{
        position: 'fixed',
        top: 0,
        left: isSidebarOpen ? 0 : '-240px',
        width: "240px",
        overflow: "hidden",
        transition: 'left 0.6s ease',
        background: "#1f1f1f",
        zIndex: 1201,
        padding: "14px 20px",
        height: "100vh"
      }}
    >
      <Stack flexDirection="row" justifyContent="space-between" alignItems="center">
        <img src={logo} style={{ height: "28px" }} alt="Logo" />
        <Stack flexDirection="row" gap={2} alignItems="center">
          <ChevronLeft size={14} color='white' />
          <ChevronRight size={14} color='gray' />
          <History size={18} color='white' />
          {
            isSidebarPinned
              ? <PanelRightClose size={18} color='white' onClick={handlePinToggle} style={{ cursor: 'pointer' }} />
              : <PanelLeftClose size={18} color='white' onClick={handlePinToggle} style={{ cursor: 'pointer' }} />
          }
        </Stack>
      </Stack>
    </Stack>
  );
});

export default Sidebar;
