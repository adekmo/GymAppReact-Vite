import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

const ExerciseVideos = ({ exerciseVideo, name }) => {
    console.log('video', exerciseVideo);
    if (!exerciseVideo.length) return 'Loading...';
    return (
        <Box sx={{ marginTop : {lg : '200px', xs: '20px'}}} p="20px">
            <Typography variant="h3" mb="33px" color="#fef2f2">
                Watch <span style={{ color: '#dc2626', textTransform: 'capitalize' }}>{name}</span> exercise videos
            </Typography>
            <Stack justifyContent="flex-start" flexWrap="wrap" aligntItems="center" sx={{
                flexDirection: { lg: 'row'},
                gap: {lg: '110px', xs: '0'}
            }}>
                {exerciseVideo?.slice(0, 4).map((item, index) => {
                    return (
                        <a key={index} className="exercise-video" href={`https://www.youtube.com/watch?v=${item.video.videoId}`} target="_blank" rel="noreferrer">
                            <img src={item.video.thumbnails[0].url} alt={item.video.title} />
                            <Typography variant="h5" color="#fef2f2">
                                {item.video.title}
                            </Typography>
                            <Typography color="#fef2f2" variant="h6">
                                Channel : {item.video.channelName}
                            </Typography>
                        </a>
                    )
                })}
            </Stack>
        </Box>
    )
}

export default ExerciseVideos
