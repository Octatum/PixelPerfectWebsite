import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { device } from '../../utils/device';

const Video = styled.video`
  position: fixed;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  -ms-transform: translateX(-50%) translateY(-50%);
  -moz-transform: translateX(-50%) translateY(-50%);
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);
  background-size: cover; 

  @media screen and ${device.tablet} {
    display: none;
  }
`;

class BackgroundVideoPlayer extends React.Component {
  state = {
    videoIsPlaying: false
  }

  constructor(props) {
    super(props);

    this.videoRef = null;
  }

  setVideoRef = (videoRef) => {
    this.videoRef = videoRef;
  }

  toggleVideoState() {
    this.setState((prevstate) => {
      if(this.state.videoIsPlaying) {
        this.videoRef.pause();
      } else {
        this.videoRef.play();
      }

      return {
        videoIsPlaying: !prevstate.videoIsPlaying
      };
    })
  }
 
  render() {
    const { video } = this.props;
  
    return (
      <Video
        ref={this.videoRef}
        playsinline
        muted
        loop
        poster=""
        autoPlay
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </Video>
    )
  }
}

BackgroundVideoPlayer.propTypes = {
  video: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired
};

export default BackgroundVideoPlayer;