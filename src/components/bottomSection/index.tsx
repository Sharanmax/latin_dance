import CommunitySection from "@components/community";
import SurveyBox from "@components/insights";
import { Box, Divider, Typography } from "@mui/material";
import React from "react";

const BottomSection = () => {
    return (
        <Box sx={{ py: '64px', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <Typography sx={{ fontFamily: 'Montserrat', fontSize: '40px', fontWeight: '600'}}>
                Share Your Dance Journey Here!
            </Typography>
            <Divider sx={{ background: '#9560E9', width: '240px', my: '16px'}}/>
            <Typography sx={{ fontFamily: 'Montserrat', fontSize: '14px', fontWeight: '500', mb: '40px' }}>
                500 user surveys...
            </Typography>
            <SurveyBox />
            <CommunitySection />
        </Box>
    )
}

export default BottomSection;