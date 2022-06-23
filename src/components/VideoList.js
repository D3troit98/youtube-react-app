import React from 'react'
import {Grid} from "@mui/material"
import VideoItem from './VideoItem'
const VideoList = ({videos,onVideoSelect}) => {
    console.log(videos)
    const listOfVideo = videos.map((video,id)=><VideoItem onVideoSelect={onVideoSelect} key={id} video={video} />)
  return (
    <Grid container spacing={10}>
      {listOfVideo}
    </Grid>
  )
}

export default VideoList
