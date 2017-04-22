/**
 * Created by Sagar Singh on 4/8/2017.
 */
import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props)=> {
    console.log(props.videos);
const videoItems = props.videos.map((video)=>
        {return <VideoListItem
            onVideoSelect={props.onVideoSelect}
            key={video.etag}
            video={video}/>});

    return(
        <ul className="col-md-4 list-group">
            {videoItems}
        </ul>
    );
};

export default VideoList;