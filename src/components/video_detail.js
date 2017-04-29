/**
 * Created by Sagar Singh on 4/8/2017.
 */
import React, {Component} from 'react';
import { Media, Label } from 'react-bootstrap';

const VideoDetail= ({video}) =>{
    if(!video){
        return <div>Loading...</div>
    }

    const videoId= video.id.videoId;
    // const url = 'https://www.youtube.com/embed/'+ videoId;
     const url = `https://www.youtube.com/embed/${videoId}`;  //ES6 code
  return(
      <div className="video-detail col-md-8">
          <div className="embed-responsive embed-responsive-16by9">
              <iframe className="embed-responsive-item" src={url}></iframe>
          </div>
          <br/>
          <div className="details">
              <Media>
                  <Media.Left>
                      <img width={64} height={64} src= {video.snippet.thumbnails.default.url} alt="Image"/>
                  </Media.Left>
                  <Media.Body>
                      <Media.Heading>{video.snippet.title}</Media.Heading>
                      <Label bsStyle="danger">{video.snippet.channelTitle}</Label>&nbsp;
                      <p>{video.snippet.description}</p>
                  </Media.Body>
              </Media>
              {/*<div>{video.snippet.title}</div>*/}
              {/*<div>{video.snippet.channelTitle}</div>*/}
              {/*<div>{video.snippet.description}</div>*/}
          </div>
      </div>
  );
};

export default VideoDetail;