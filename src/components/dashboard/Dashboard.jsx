import { Stack, Box, Typography } from '@mui/material'
import React, { useState } from 'react'
import Sidebar from '../sidebar/Sidebar'
import Navbar from '../navbar/Navbar'
import TaskTable  from '../taskTable/TaskTable'

const Dashboard = () => {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSidebarPinned, setIsSidebarPinned] = useState(false); // for navbar shifting

  const handleToggleSideBar = () => {
    setIsSidebarOpen(true);
  }

  const handlePinToggle = () => {
    if (isSidebarPinned) {
      setIsSidebarPinned(false);
      setIsSidebarOpen(false);
    } else {
      setIsSidebarPinned(true);
    }
  };

  return (
    <Stack flexDirection="row" sx={{ height: "100vh" }}>
      <Sidebar isSidebarOpen={isSidebarOpen || isSidebarPinned} isSidebarPinned={isSidebarPinned} handlePinToggle={handlePinToggle} />
      <Box sx={{ flexGrow: 1, transition: "margin-left 0.6s ease", marginLeft: isSidebarPinned ? "240px" : "0px", backgroundColor: "#f5f5f5", height: "100vh" }}>
        <Navbar handleToggleSideBar={handleToggleSideBar} isSidebarPinned={isSidebarPinned} />
        <Box sx={{ p: 3 }}>
          <Typography variant="h5" sx={{ color: "text.secondary" }}>
            Dashboard Content
            {/* <TaskTable /> */}
          </Typography>
        </Box>
      </Box>
    </Stack>
  )
}

export default Dashboard