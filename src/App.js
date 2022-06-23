import React,{useState,useEffect} from 'react'
import { Grid } from '@mui/material';
import youtube from './api/youtube';

import {SearchBar, VideoList,VideoDetails} from "./components"
const App = () => {
    const [videos, setVideos] = useState([])
    const [selectedVideo,setSelectedVideo] = useState(null)
let response  = {}
    useEffect(() => {
        setSelectedVideo(videos[0])
    }, [videos])
   async function handleSubmit(searchTerm)
    {
        console.log(searchTerm)
         response =  await youtube.get('search',{
                        params:{
                            part:"snippet",
                            maxResults:5,
                            key:process.env.REACT_APP_YOUTUBE_API_KEY,
                            q:searchTerm,
                        } 
                    });
               
                  console.log(response.data.items)
                  setVideos(response.data.items)
               
    }

    const onVideoSelect = (video )=>{
        setSelectedVideo(video)
    }

  return (
   <Grid container justifyContent="center" spacing={10}>
    <Grid item xs={12}>
        <Grid container spacing={10}>
        <Grid item xs ={12}>
           <SearchBar onFormSubmit={handleSubmit}/>
        </Grid>
        <Grid item xs={8}>
            <VideoDetails 
            video={selectedVideo}
            
            />
        </Grid>
        <Grid item xs={4}>
    <VideoList videos={videos} onVideoSelect={onVideoSelect}/>
        </Grid>
        </Grid>
    </Grid>
   </Grid>
  )
}

export default App