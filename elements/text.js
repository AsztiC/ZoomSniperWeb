import React, { Component } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';
import {Icon} from './icon';
import  {Download}  from './download';

export class MainText extends Component{
    render() {
        return(
        <View style={styles.pageContainer}>
            <View style={{flexDirection: 'row'}}>
                <Text style={styles.title}>
                    Zoom Sniper
                </Text>
                <View style={{width: 25}}/>
                <Icon/>
            </View>
            <View style={{flex:2}}/>
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
                <View style={{height:20}}/>
                <Download/>         
            </View>
            
             
            
        </View>   
        );
        
    }
}

var styles = StyleSheet.create({
    container: {
        //flex: 1,
        width:500,
        height:500,
        //resizeMode: 'contain',
    },
    pageContainer: {
        flex: 1,
        //flexDirection: 'row',
        //marginLeft: '5%',
        //marginRight: '5%',
    },
    title:{
        fontSize: 58,
        fontWeight: "bold",
         //numberOfLines: 1,
         
    },
    listview: {
        flex: 15, 
        justifyContent:'space-between',
    },
    list: {
        marginLeft:'5%',
        fontSize: 28, 
        fontWeight: "bold",
    },
    
});