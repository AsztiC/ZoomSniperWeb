import React, { Component } from 'react'
import { StyleSheet, Text, View, Pressable, Linking } from 'react-native';
import publicIP from 'react-native-public-ip';

export class Download extends Component{



    componentDidMount() {
        
        publicIP()
            .then(ip2 => {    
            console.log(ip2);
            
            fetch('https://api.dkapps.tk/api', { //https://api.dkapps.tk/api //http://192.168.1.5:4244/api
            method: 'POST',
            headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({
            appID: 'zoomSniperWeb',
            ip: ip2
            })
            });
            
        })
            .catch(error => {
            console.log(error);
            
            fetch('https://api.dkapps.tk/api', { //https://api.dkapps.tk/api
            method: 'POST',
            headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({
            appID: 'zoomSniperWeb',
            ip: error
            })
            });

        });
        
        
        
    };


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
                        Download (Windows)
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