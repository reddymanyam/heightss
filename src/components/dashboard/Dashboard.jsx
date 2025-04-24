import React, { useState, useRef, useEffect } from 'react';
import { Stack, Box, Typography } from '@mui/material';
import Sidebar from '../sidebar/Sidebar';
import Navbar from '../navbar/Navbar';
import TaskTable from '../taskTable/TaskTable'

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSidebarPinned, setIsSidebarPinned] = useState(false);
  const sidebarRef = useRef(null);
  // console.log("sidebarRef........", sidebarRef);

  const handleToggleSideBar = () => {
    setIsSidebarOpen(true);
  };

  const handlePinToggle = () => {
    if (isSidebarPinned) {
      setIsSidebarPinned(false);
      setIsSidebarOpen(false);
    } else {
      setIsSidebarPinned(true);
    }
  };

  // This is for whhile clicking the outside of the sidebar the sidebar will be closed.
  useEffect(() => {
    const handleClickOutside = (event) => {
      const sidebarNode = sidebarRef.current;
      if (sidebarNode && !sidebarNode.contains(event.target) && isSidebarOpen && !isSidebarPinned) {
        setIsSidebarOpen(false);
      }
    };
    // console.log("use effect runs this time......");

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };

  }, [isSidebarOpen, isSidebarPinned]);

  return (
    <Stack flexDirection="row" sx={{ height: "100vh", overflow: "hidden" }}>
      <Sidebar
        ref={sidebarRef}
        isSidebarOpen={isSidebarOpen || isSidebarPinned}
        isSidebarPinned={isSidebarPinned}
        handlePinToggle={handlePinToggle}
      />
      <Box
        sx={{
          flexGrow: 1,
          width: isSidebarPinned ? "calc(100% - 240px)" : "100%",
          transition: "margin-left 0.6s ease",
          marginLeft: isSidebarPinned ? "240px" : "0px",
          backgroundColor: "#f5f5f5",
          height: "100vh"
        }}
      >
        <Navbar handleToggleSideBar={handleToggleSideBar} isSidebarPinned={isSidebarPinned} />
        <Box sx={{ p: "24px 8px 8px 32px",  }}>
          <Typography variant="h5" sx={{ color: "text.secondary" }}>Dashboard Content</Typography>
          {/* <TaskTable /> */}
        </Box>
      </Box>
    </Stack>
  );
};

export default Dashboard;
