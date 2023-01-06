import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import {Icon} from './icon';

export class MainText extends Component{
    render() {
        return(
            <>
            <View style={{flex: 1, flexDirection: 'row'}}>
                <Icon/>
                <View style={{width: 25}}/>
                <Text style={styles.title}>
                    乙ᴏᴏᴍ
                    <Text style={{fontSize: 70}}> ડ</Text>
                    ɴ
                    <Text style={{fontSize: 43}}>I</Text>
                    
                    ᴘᴇʀ
                </Text>
            </View>
            
            <View style={{flex:5}}/>
            <View style={styles.listview}>
                <Text style={styles.list}>
                    - Never miss a meeting
                </Text>
                <Text style={styles.list}>
                    - Organize links
                </Text>
                <Text style={styles.list}>
                    - Wow
                </Text>
            </View>
            <View style={{flex:3}}/>  
            </>
        );
        
    }
}

var styles = StyleSheet.create({
    title:{
        fontSize: 60,
         fontWeight: "bold",
         
    },
    listview: {
        flex: 7, 
        justifyContent:'space-between',
    },
    list: {
        fontSize: 28, 
        fontWeight: "bold",
    },
    
});