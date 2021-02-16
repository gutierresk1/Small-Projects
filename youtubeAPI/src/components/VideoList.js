import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos, onVideoSelect }) =>{
    //props.videos; 
    //REMINDER: The .map() function is used to create a new array with the results.
    //.map calls a function for each element inside of the array.
    //single argument  
    const renderedList = videos.map((video) =>{
        return <VideoItem key={video.id.videoId} video={video} onVideoSelect={onVideoSelect}/>; 
    });
    return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default VideoList; 