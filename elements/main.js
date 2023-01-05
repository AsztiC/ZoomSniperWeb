import React, {Component} from 'react'
import {StyleSheet, ImageBackground, View, Text, SafeAreaView} from 'react-native';
import {Shot} from './image';
import  {Download}  from './download';



export class Main extends Component{

    render() {
        return(
            <>    
            <ImageBackground source={require('../assets/ZS2.jpg')} resizeMode="cover" style={styles.background}>
                <SafeAreaView style={{flex:1}}>
                    <View style={{flex:5, flexDirection: 'column', margin: 40}}>
                        <SafeAreaView style={styles.bg1}>
                            <View style={{flex: 1, alignContent: 'center', paddingTop:50}}>                           
                                {/*TODO: Replace Shot with video player */}                          
                                    <Shot/>                                                   
                            </View>
                            <View style={{flex:1, flexDirection: 'row'}}>
                                <View style={{flex:1}}/>                          
                                <View style={{flex: 6, alignItems: 'center', paddingVertical:50}}>                                                                                                                                   
                                    <Text style={{ flex:1 ,fontSize: 65, fontWeight: "bold"}}>
                                        ⊕ 乙oom ડniper
                                    </Text>
                                    <View style={{flex:1}}/>
                                    <View style={{flex: 8, justifyContent:'space-evenly'}}>
                                        <Text style={{fontSize: 28, fontWeight: "bold"}}>
                                            - Never miss a meeting
                                        </Text>
                                            <Text style={{fontSize: 28, fontWeight: "bold"}}>
                                            - Organize links
                                        </Text>
                                        <Text style={{fontSize: 28, fontWeight: "bold"}}>
                                            - Wow
                                        </Text>
                                    </View>
                                    <View style={{flex:3}}/>           
                                    <Download/>                                                                         
                                </View>
                            </View>       
                                                   
                                
                                                                                              
                        </SafeAreaView>
                        <View style={{flex:1}}>
                            <Text style={{alignSelf:'center'}}>
                                V
                            </Text>
                        </View>
                        
                    </View>
                        
                    <View style={{flex:1}}/>
                </SafeAreaView>                    
            </ImageBackground> 

            <ImageBackground source={require('../assets/back2temp.jpg')} resizeMode="cover" style={styles.background}>
                <SafeAreaView style={styles.bg2}>
                <Text style={{fontSize: 20, flex: 1}}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum.
                </Text>
                </SafeAreaView>
                
            </ImageBackground>

       
             
            </>
        );
    }
}

const styles = StyleSheet.create({
    background: {
        //TODO: make height proportionate to window height
        height: 700,
        justifyContent: "center",
    },
    bg1: {
        flex: 10,
        flexDirection: "row",
    },
    bg2: {
        flex: 1,       
        justifyContent: "space-between",
        padding: 20,
        margin: 10,
    },
    name: {
        flex: 1,
    }
  });