import React, {Component} from 'react'
import {StyleSheet, ImageBackground, View, Text, SafeAreaView} from 'react-native';
import {Shot} from './elements/image';
import  {Download}  from './elements/download';
import  {MainText}  from './elements/text';



export class Main extends Component{

    render() {
        return(
            <>    
            <ImageBackground source={require('../assets/ZS1.jpg')} resizeMode="cover" style={styles.background1}>
                <SafeAreaView style={{flex:1}}>
                    <View style={styles.bg1format}>
                        <SafeAreaView style={styles.bg1main}>
                            <View style={styles.videoview}>                           
                                {/*TODO: Replace Shot with video player */}                          
                                    <Shot/>                                                   
                            </View>
                            <View style={styles.textview}>
                                <View style={{flex:1}}/>                          
                                <View style={styles.textalign}>                                                                                                                                   
                                    <MainText/>
                                    <Download/>                                                                         
                                </View>
                            </View>                                                                                                    
                        </SafeAreaView>
                        <View style={{flex:1}}>
                            <Text style={styles.arrow}>
                            ⇣
                            </Text>
                        </View>                       
                    </View>                        
                    <View style={{flex:1}}/>
                </SafeAreaView>                    
            </ImageBackground> 

            <ImageBackground source={require('../assets/ZS2.png')} resizeMode="contain" style={styles.background2}>     
            </ImageBackground>

       
             
            </>
        );
    }
}

const styles = StyleSheet.create({
    background1: {
        //TODO: make height proportionate to window height
        height: 700,
        justifyContent: "center",
    },
    background2:{
        height: 700, 
        justifyContent: "center",
    },
    //background 1 styles
    bg1format:{
        flex:5, 
        flexDirection: 'column', 
        margin: 40,
    },
    bg1main: {
        flex: 10,
        flexDirection: "row",
    },
    videoview:{//temp photo view
        flex: 1, 
        alignContent: 'center', 
        paddingTop: 50,
    },
    textview: {
        flex: 1, 
        flexDirection: 'row',
    },
    textalign: {
        flex: 6, 
        alignItems: 'center', 
        paddingVertical: 50,
    },
    arrow: {
        alignSelf: 'center',
        fontSize: 90, 
        color: 'white'
    },
    //background 2 styles
    bg2: {
        flex: 1,       
        justifyContent: "space-between",
        padding: 20,
        margin: 10,
    },

  });