import React, { Component } from 'react'
import { StyleSheet, Text, View, Pressable, Linking } from 'react-native';


export class Download extends Component{

    render() {
        return(
            <>
            <View>
                <Pressable 
                onPress={() => Linking.openURL("https://download.dkapps.tk/Downloads/zoom_publish.zip")}
                style={({ pressed }) => [
                {
                    backgroundColor: pressed
                    ? '#73ac9b'
                    : 'white'
                },
                styles.button,
                
                ]}>
                    <Text style={{color: '#046949', fontSize: 30}}>
                        Download
                    </Text>
                    
                </Pressable>
                
            </View>
            </>
        );
    }
}

var styles = StyleSheet.create({
    button:{
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,

    },
    
});