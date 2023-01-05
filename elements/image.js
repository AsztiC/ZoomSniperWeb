import React, {Component} from 'react'
import {StyleSheet, Image, View} from 'react-native';


export class Shot extends Component{

    render() {
        return(
            <>
            
            <Image source={require('../assets/tempZS.JPG')} style={styles.container} />  
            
            
            </>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
        resizeMode: 'contain',
    },
  });