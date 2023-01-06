import React, {Component} from 'react'
import {StyleSheet, Image, View} from 'react-native';


export class Icon extends Component{

    render() {
        return(
            <>
            <Image source={require('../assets/ZSIcon.png')} style={styles.container} />  
            </>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 100,
        width: 100,      
        resizeMode: 'contain',
    },
  });