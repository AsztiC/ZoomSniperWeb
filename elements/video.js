import React, {Component} from 'react'
import {View} from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';

export class Video extends Component{

    render() {
        return(
            <>
            <YoutubePlayer
                height={600}  play={true}
                videoId={'O7qe5tDRmY0'}
                rel={false}

            /> 
            </>
        );
    }
}
