import React, { useState } from "react";
import { Box, Typography, Grid2 } from "@mui/material";
import AudiotrackIcon from '@mui/icons-material/Audiotrack';
import PublicIcon from '@mui/icons-material/Public';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const obj = [
    {
        title: 'Music and Culture',
        icon: AudiotrackIcon,
        desc: 'Dive into the rhythm, instruments, and stories that define the soul of Latin music and dance culture.',
        cta: 'Explore Now'
    },
    {
        title: 'Tutorials and Courses',
        desc: 'Access beginner to advanced tutorials and structured courses designed for your growth, wherever you are.',
        cta: 'Start Learning',
        icon: OndemandVideoIcon
    },
    {
        title: 'E-commerce Lifestyles',
        desc: 'Discover premium dancewear, accessories, and lifestyle products that elevate your practice and performances.',
        cta: 'Shop Now',
        icon: LocalMallIcon
    },
    {
        title: 'Brand building',
        desc: 'Create your professional profile, showcase your achievements, and grow your influence as a dancer or instructor.',
        cta: 'Start Building',
        icon: TrendingUpIcon
    },
    {
        title: 'Events',
        desc: 'Attend exclusive workshops, bootcamps, and live events hosted by top Latin dance experts.',
        cta: 'See Events',
        icon: TrendingUpIcon
    },
    {
        title: 'Global Community',
        desc: 'Join a vibrant global network of dancers. Share your journey, collaborate, and celebrate together.',
        cta: 'Join the Community',
        icon: PublicIcon
    }
]

const styles = {
    cardStyles: { bgcolor: 'lightcyan', borderRadius: '8px', minHeight: '200px', maxWidth: '240px' , p: '16px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'},
}

const Card = ({item, callback}) => {
    const IconComponent = item.icon;

    return (
        <Box sx={styles.cardStyles} onMouseEnter={() => callback(item.desc)}>
            <Box>
                <IconComponent sx={{ fontSize: '24px', color: 'primary.main', mb: '8px' }} />
                <Typography sx={{ fontSize: '18px', fontWeight: 'bold', mb: '8px'}}>{item.title}</Typography>
                <Typography sx={{ wordWrap: 'break-word', fontSize: '14px', mb: '8px'}}>{item.desc}</Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent:'space-between', alignItems: 'center', width: '100%'}}>
                <Typography sx={{ fontSize: '16px', fontWeight: 'bold'}}>{item.cta}</Typography>
                <ArrowForwardIcon sx={{ fontSize: '16px'}} />
            </Box>
        </Box>
    )
}

const EcosystemBox = () => {
    const [ currentText, setCurrentText ] = useState('')

    return (
        <Box sx={{ background: 'linear-gradient(180deg, #FFD1E3, #FCEBF4)', minHeight: '420px', width: '100%', mt: '16px', p: '16px'}}>
            <Typography sx={{ fontSize: '32px', textAlign: 'center', fontWeight: 'bold' }}>Build a Website</Typography>
            <Typography sx={{ fontSize: '20px', textAlign: 'center' }}>{currentText || ''}</Typography>

            

            <Grid2 container spacing={2} justifyContent='center' mt='64px'>
                {obj.map((item, index) => 
                    <Grid2
                        item
                        xs={12} sm={4} md={4} // Full width on mobile, 4 columns on desktop
                        key={item.title + index}
                    >
                        <Card item={item} callback={setCurrentText}/>
                    </Grid2>
                )}
            </Grid2>
            
        </Box>
    )
}

export default EcosystemBox