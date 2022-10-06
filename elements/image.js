import React, {Component} from 'react'
import {StyleSheet, Image, View} from 'react-native';


export class Shot extends Component{

    render() {
        return(
            <>
            <View style={styles.container}>
            <Image source={require('../assets/ZoomSniper.JPG')} style={styles.container} />  
            </View>
            
            </>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: .85,
        resizeMode: 'contain',
 
    },
  });