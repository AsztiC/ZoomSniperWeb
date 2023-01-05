import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native';

export class MainText extends Component{
    render() {
        return(
            <>
            <Text style={styles.title}>
                ⊕ 乙oom ડniper
            </Text>
            <View style={{flex:1}}/>
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
        flex: 1,
        fontSize: 65,
         fontWeight: "bold",
    },
    listview: {
        flex: 8, 
        justifyContent:'space-evenly',
    },
    list: {
        fontSize: 28, 
        fontWeight: "bold",
    },
    
});