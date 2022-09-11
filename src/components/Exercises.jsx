import { Box, Stack, Typography } from '@mui/material';
import Pagination from '@mui/material/Pagination';
import React, { useState } from 'react'
import { exerciseOptions, fetchData} from '../utiliti/fetchData'
import ExerciseCard from './ExerciseCard';

const Exercises = ({setExercises, bodyPart, exercises}) => {
    console.log(exercises);
    const [currentPage, setCurrentPage] = useState(1);
    const exercisesPerPage = 9;
    const indexOfLastExercise = currentPage * exercisesPerPage;
    const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
    const currentExercise = exercises.slice(indexOfFirstExercise, indexOfLastExercise);


    const paginate = (e, value) => {
        setCurrentPage(value);

        window.scrollTo({top: '1800px', behaviour: 'smooth'})
    }
    return (
        <Box id="exercises"
            sx={{
                mt: {lg: '110px'}
            }}
            mt="50px"
            p="20px"
        >
            <Typography variant="h3" mb="46px">
                Showing Result
            </Typography>
            <Stack direction="row" sx={{
                gap : {lg: '110px', xs: '50px'}
            }} flexwrap="wrap" justifyContent="center">
                {currentExercise.map((exercise, index) => {
                    return (
                        <ExerciseCard key={index} exercise={exercise} />
                    )
                })}
            </Stack>
            <Stack mt="100px" alignItems="center">
                {exercises.length > 9 && (
                    <Pagination color="standard" shape="rounded" default={1} count={Math.ceil(exercises.length / exercisesPerPage)} page={currentPage} onChange={paginate} size="large" />
                )}
            </Stack>

            
        </Box>
    )
}

export default Exercises
