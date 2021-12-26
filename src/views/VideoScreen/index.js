import { useState } from 'react';
import MediaPlayer from "./MediaPlayer"
import {VideoWrapper, ButtonWrapper, VideoShowButton} from '../../components/VideoControls'

function VideoScreen () {
    const [show, setShow] = useState(false)

        return (
            <>
              <ButtonWrapper>
                  <VideoShowButton onClick={()=>setShow(x=>!x)}> 
                    {show ? "Hide Video Player": "Display Video Player"}
                  </VideoShowButton>
              </ButtonWrapper>
              <VideoWrapper>
                  <MediaPlayer display={show}/>
              </VideoWrapper>
            </>
        );
    }

export default VideoScreen;