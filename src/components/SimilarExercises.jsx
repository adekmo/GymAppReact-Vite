import { Stack, Typography, Box } from '@mui/material'
import React from 'react'
import HorizontalScrollBar from './HorizontalScrollBar'
import Loader from './Loader'

const SimilarExercises = ({ eupmentExercises, targetMuscleExercises}) => {
    return (
        <Box sx={{ mt: {lg: '100px', xs: '0'}}}>
            <Typography variant="h3" mb="30px">
                Exercises that target the same muscle group
            </Typography>
            <Stack direction="row" sx={{ p: '2', position: 'relative'}}>
                {targetMuscleExercises.length ? <HorizontalScrollBar data={targetMuscleExercises} /> : <Loader />}
            </Stack>

            <Typography variant="h3" mb="30px" mt="50px">
                Exercises that use the same Equipment
            </Typography>
            <Stack direction="row" sx={{ p: '2', position: 'relative'}}>
                {eupmentExercises.length ? <HorizontalScrollBar data={eupmentExercises} /> : <Loader />}
            </Stack>
        </Box>
    )
}

export default SimilarExercises
