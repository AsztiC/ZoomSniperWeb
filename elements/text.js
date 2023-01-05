import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import  {Download}  from './download';
import {Shot} from './image';


export class BodyText extends Component{
    render() {
        return(
            <>
            <View>
                <Text style={styles.text}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                </Text>
            
                {/*<View style={{flex:1}}></View>

                <View style={{flex:4, justifyContent:'center', alignItems: 'flex-start'}}>
                    <Text style={styles.title}>
                        Zoom Sniper
                    </Text>
                    <Text style={styles.list}>
                        - Never miss a meeting
                    </Text>
                    <Text style={styles.list}>
                        - Organize links
                    </Text>
                    <Text style={styles.list}>
                        - Wow
                    </Text>

                    <View style={{height:90}}></View>
        
                    <Download/>
                </View>
        */}

                {/*<View style={{flex:10}}>
                    <View style={{height:40}}></View>
                    <Shot/>
                </View>
    */}
                



            </View>
            

           
            
            </>
        );
        
    }
}

var styles = StyleSheet.create({
    title:{
        //flex: 1,
        fontSize: 40,
        color: 'white',
        height: 100
    },
    list: {
        //flex: 1,
        fontSize: 30,
        color: 'white'


    }
    
});