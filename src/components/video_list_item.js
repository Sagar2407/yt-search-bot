/**
 * Created by Sagar Singh on 4/8/2017.
 */
import React, {Component} from 'react';

// class Video_list_item extends Component{
//     constructor(props){
//         super(props);
//     }
//
//     render(){
//         const video = props.video;
//         return(
//                 <li>
//                     {video.id}
//                 </li>
//         );
//     }
// }

const Video_list_item =({video, onVideoSelect}) => {
    const imageUrl = video.snippet.thumbnails.default.url;

    return(
        <li onClick={()=> onVideoSelect(video)} className="list-group-item">
            <div className="video-list media">
                <img className="media-object" src={imageUrl}/>
            </div>
            <div className="media-object">
                <div className="media-heading">{video.snippet.title}
                </div>
            </div>
        </li>
    );
}

export default Video_list_item;