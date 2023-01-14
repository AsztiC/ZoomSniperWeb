import React, { Component } from 'react'
import { StyleSheet, Text, View, Pressable, Linking } from 'react-native';
import publicIP from 'react-native-public-ip';

export class Download extends Component{

    componentDidMount() {
        try {
            publicIP()
            .then(ip2 => {    
            console.log(ip2);
            

            fetch('https://api.sourcehex.com/api', { //https://api.dkapps.tk/api //http://192.168.1.5:4244/api
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
            
            fetch('https://api.sourcehex.com/api', { //https://api.dkapps.tk/api
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
        } catch (error) {
            
        }
     
    };

    async getLatest(){
        console.log("o");
        
        
        const response = await fetch('https://api.sourcehex.com/api', { //https://api.dkapps.tk/api //http://192.168.1.5:4244/api
        method: 'POST',
        headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({
        appID: 'zoomLatestVersion'
        })
        });  
      const linkText = await response.json();
      console.log(linkText);
      Linking.openURL(linkText);
    };


    render() {
        return(
            <>
            <View style={styles.btnView}>
                <Pressable 
                onPress={() =>
                this.getLatest()} //Get latest version from  api and download
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
        
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        
        
    },
       
});