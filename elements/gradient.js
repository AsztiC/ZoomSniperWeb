import { StyleSheet } from 'react-native';
import React, { Component } from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import  {BodyText}  from './text';


export class Gradient extends Component{
    render() {
        return(
            <>
            <LinearGradient
                start={{x: 0, y: 0}} end={{x: 1, y: 0}} 
                colors={['#046949', '#73ac9b', '#f3f7f6']} 
                style={styles.linearGradient}
            >
                <BodyText/>

            </LinearGradient>
            </>
        );
        
    }
}

var styles = StyleSheet.create({
    linearGradient: {
      flex: 1,
    },
});
