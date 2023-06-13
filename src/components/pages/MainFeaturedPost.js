import * as React from 'react';
import Paper from '@mui/material/Paper';

function MainFeaturedPost() {
    return (
        <Paper
            sx={{
                position: 'relative',
                mb: 4,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundImage: `url(/image/main1.jpg)`,
                height: '600px'
            }}
        />
    );
}

export default MainFeaturedPost;