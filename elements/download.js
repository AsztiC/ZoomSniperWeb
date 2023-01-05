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
            <View style={styles.btnView}>
                <Pressable 
                onPress={() => Linking.openURL("https://download.dkapps.tk/Downloads/zoom_publish.zip")}
                style={({ pressed }) => [
                {
                    backgroundColor: pressed
                    ? '#109447'
                    : 'black'
                },
                styles.button,
                
                ]}>
                    <Text style={{color: '#15cb61', fontSize: 30, fontWeight:'bold'}}>
                    ⭳  Download
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
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
       
    
});