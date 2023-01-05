import React, { Component } from 'react'
import { StyleSheet, Text, View, Pressable, Linking } from 'react-native';

export class Link extends Component{

    render() {
        return(
            <>
            <View style={styles.btnView}>
                <Pressable 
                onPress={() => Linking.openURL("https://github.com/Dominikk7/Zoom-Sniper")}
                style={({ pressed }) => [
                {
                    backgroundColor: pressed
                    ? '#109447'
                    : 'black'
                },
                styles.button,
                
                ]}>
                    <Text style={{color: '#15cb61', fontSize: 30, fontWeight:'bold'}}>
                    ᗢ GitHub
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
        paddingHorizontal: 30,
        borderRadius: 12,
    },
    btnView:{
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
       
    
});