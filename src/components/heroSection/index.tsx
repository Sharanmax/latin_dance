import { Box, Typography } from "@mui/material";
import NightlifeIcon from "@mui/icons-material/Nightlife";
import React from "react";

const colors = ["#FFD9DA", "#89023E"];
const colors2 = ["#C7D9B7", "#28AFB0", "#CC7178"]


const HeroSection = () => {
    return (
        <Box
            sx={{
                width: "100%",
                bgcolor: "lavender",
                minHeight: "360px",
                mt: "16px",
                p: "16px",
            }}
        >
            {/* Header Section */}
            <Box sx={{ display: "flex", justifyContent: "flex-start", alignItems: "center" }}>
                <NightlifeIcon sx={{ fontSize: "32px", mr: "8px" }} />
                <Typography sx={{ fontSize: "32px", fontWeight: "bold" }}>elementor Ai</Typography>
            </Box>

            {/* Title Section */}
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Typography sx={{ fontSize: "32px", fontWeight: "bold", flexWrap: "wrap", mr: '24px' }}>
                    A Global Latin Dance Revolution Begins Here
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <Box sx={{ mr: '16px'}}>
                        {colors.map((col) => <Box sx={{ minWidth: '240px', height: '160px', backgroundColor: col, borderRadius: '8px', mb: '8px'}} />)}
                    </Box>
                    <Box>
                        {colors2.map((col) => <Box sx={{ minWidth: '240px', height: '160px', backgroundColor: col, borderRadius: '8px', mb: '8px' }} />)}
                    </Box>
                </Box>
            </Box>         
        </Box>
    );
};

export default HeroSection;
