import React, { Component } from 'react';
import VideoPlayer from 'react-video-js-player';
import FlixVideo from "./../../assets/videotwo.mp4"
import Poster from './../../assets/download.jpg'

class MediaPlayer extends Component {
    player = {}
    state = {
        video: {
            src: FlixVideo,
            poster: Poster
        }
    }

    onPlayerReady=(player)=>{
        console.log("Player is ready: ", player);
        this.player = player;
    }

    onVideoPlay=(duration)=>{
        console.log("Video played at: ", duration);
    }

    onVideoPause=(duration)=>{
        console.log("Video paused at: ", duration);
    }

    onVideoTimeUpdate=(duration)=>{
        console.log("Time updated: ", duration);
    }

    onVideoSeeking=(duration)=>{
        console.log("Video seeking: ", duration);
    }

    onVideoSeeked=(from, to)=>{
        console.log(`Video seeked from ${from} to ${to}`);
    }

    onVideoEnd=()=>{
        console.log("Video ended");
    }


    render() {
        const {video} =this.state;
        const vPlayer =  <div>
            <div>
                <VideoPlayer
                    controls={true}
                    src={video.src}
                    poster={video.poster}
                    width="720"
                    height="420"
                    onReady={this.onPlayerReady}
                    onPlay={this.onVideoPlay}
                    onPause={this.onVideoPause}
                    onTimeUpdate={this.onVideoTimeUpdate}
                    onSeeking={this.onVideoSeeking}
                    onSeeked={this.onVideoSeeked}
                    onEnd={this.onVideoEnd}
                />
            </div>
     </div>
     return (
         <div>
            {this.props.display? vPlayer : <div>No Media</div>}
         </div>
        )
    }
}
export default MediaPlayer;