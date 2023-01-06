import React, {Component} from 'react'
import {StyleSheet, ImageBackground, View, Text, SafeAreaView, Linking, Pressable} from 'react-native';
import {Video} from './elements/video';
import {Shot} from './elements/image';
import  {Download}  from './elements/download';
import  {MainText}  from './elements/text';
import  {Link}  from './elements/link';
import {Contact} from './elements/contact';


export class Main extends Component{

    render() {
        return(
            <>    
            <ImageBackground source={require('./assets/ZS1.png')} resizeMode="cover" style={styles.background1}>
                <SafeAreaView style={{flex:1}}>
                    <View style={styles.bg1format}>
                        <SafeAreaView style={styles.bg1main}>
                            <View style={styles.videoview}>                           
                                {/*TODO: Replace Shot with video player */}                          
                                    <Video/> 
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

            <ImageBackground source={require('./assets/ZS2.png')} resizeMode="contain" style={styles.background2}>
                <View style={{flex:6}}/>
                <View style={{flex:2}}>
                    <Text style={styles.arrow}>
                            ⇣
                    </Text>
                    <Text style={styles.textstyle}>
                        Your links will open at their designated times every week!
                    </Text>                                                  
                </View>     
            </ImageBackground>

            <ImageBackground source={require('./assets/ZStemp.jpg')} resizeMode="contain" style={styles.background3}>
                <View style={styles.btnview}>
                    <Download/>
                    <View style={{width: 30}}></View>
                    <Contact/>
                    <View style={{width: 30}}></View>
                    <Link/>
                </View>
                
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
    background2: {
        height: 750, 
        justifyContent: "center",
    },
    background3: {
        height: 200,
    },
    //background 1 styles
    bg1format: {
        flex:5, 
        flexDirection: 'column', 
        margin: 40,
    },
    bg1main: {
        flex: 10,
        flexDirection: "row",
    },
    videoview: {//temp photo view
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
    textstyle: {
        fontSize: 28, 
        fontWeight: "bold", 
        alignSelf: 'center',
    },
    //background 3 styles
    btnview: {
        flex:1, 
        flexDirection: 'row', 
        justifyContent: 'center', 
        alignItems: 'flex-start', 
        marginVertical: 20,
    }
  });