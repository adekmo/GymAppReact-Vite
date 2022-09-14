import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Detail from '../components/Detail'
import ExerciseVideos from '../components/ExerciseVideos'
import SimilarExercises from '../components/SimilarExercises'
import { exerciseOptions, fetchData, youtubeOptions} from '../utiliti/fetchData'

const ExerciseDetail = () => {

    const [exerciseDetail, setExerciseDetail] = useState({});
    const [exerciseVideo, setExerciseVideo] = useState({});
    const { id } = useParams();

    useEffect(() => {
        const fetchExercisesData = async () => {
            const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
            const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

            const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions);
            setExerciseDetail(exerciseDetailData);

            const exerciseVideoData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`, youtubeOptions);
            setExerciseVideo(exerciseVideoData.contents);
            
        }

        fetchExercisesData();
    }, [id])

    return (
        <Box>
            <Detail exerciseDetail={exerciseDetail} />
            <ExerciseVideos exerciseVideo={exerciseVideo} name={exerciseDetail.name} />
            <SimilarExercises />
        </Box>
    )
}

export default ExerciseDetail
