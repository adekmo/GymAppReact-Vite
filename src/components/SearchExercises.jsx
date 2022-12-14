import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { fetchData, exerciseOptions } from '../utiliti/fetchData';
import HorizontalScrollBar from './HorizontalScrollBar';

const SearchExercises = ({setExercises, bodyPart, setBodyPart}) => {

    const [search, setSearch] = useState('');
    const [bodyParts, setBodyParts] = useState([]);

    useEffect(() => {
        const fetchExercisesData = async () => {
            const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);

            setBodyParts(['all', ...bodyPartsData]);
        }

        fetchExercisesData();
    }, [])

    const handleSearch = async () => {
        if(search){
            const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
            console.log('data', exercisesData);

            const searchedExercises = exercisesData.filter(
                (exercise) => exercise.name.toLowerCase().includes(search)
                || exercise.target.toLowerCase().includes(search)
                || exercise.equipment.toLowerCase().includes(search)
                || exercise.bodyPart.toLowerCase().includes(search)

                
                
            );
            setSearch('');
            setExercises(searchedExercises);
        }
    }

    return (
        <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
            <Typography color="#dc2626" fontWeight={700} mb="50px" textAlign="center" sx={{fontSize : {lg: '44px', xs: '30px'}}}>
                Awesome Exercises You <br></br> Should Know
            </Typography>
            <Box position="relative" mb="72px">
                <TextField
                    sx={{
                        input : {
                            fontWeight: "700",
                            border: "none",
                            borderRadius: '4px'
                        },
                        width : {
                            lg : '800px',
                            xs : '350px'
                        },
                        backgroundColor : '#fff',
                        borderRadius : '40px'
                    }}
                    type="text"
                    height="76px"
                    value={search}
                    onChange={(e) => setSearch(e.target.value.toLowerCase())}
                    placeholder="Search Exercises"
                />
                <Button
                className="search-btn"
                sx = {{
                    bgcolor : '#FF2625',
                    color : '#fff',
                    textTransform : 'none',
                    width : { lg: '175px', xs : '80px'},
                    fontSize : { lg: '20px', xs : '14px'},
                    height : '56px',
                    position : 'absolute',
                    right: '0'
                }}
                onClick={handleSearch}
                >
                    Search
                </Button>
            </Box>
            
            <Box sx={{
                position: 'relative', width: '100%', p : '20px'
            }}>
                {/* <HorizontalScrollBar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} isBodyParts={isBodyParts} /> */}
            </Box>

        </Stack>
    )
}

export default SearchExercises
