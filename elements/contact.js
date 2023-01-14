import React, { useState, useMemo, Component } from 'react'
import { Modal, StyleSheet, Text, View, Pressable, TextInput, Dimensions, Button } from 'react-native';
import  {Email}  from './email';
import  {Subject}  from './subject';
import { Description } from './description';

export class Contact extends Component {

    //Function to keep track of window width/height
    componentDidMount() {
        Dimensions.addEventListener("change", (handler) => 
        {this.setState({wHeight: handler.window.height}); 
        this.setState({wWidth: handler.window.width});})
    };

    //Modal
    setModalVisible = (visible) => {
        this.setState({ isVisible: visible });
    };

    //States
    state = {
        isVisible: false,
        subjectText: '',
        descriptionText: '',
        wHeight: Dimensions.get('window').height,
        wWidth: Dimensions.get('window').width,

    };

    //Setters

    setEmail = (email) => {
        this.setState({ emailText: email })
        console.log(email);
    };
    setSubject = (subject) => {
        this.setState({ subjectText: subject });
        console.log(subject);
    };

    setDescription = (description) => {
        this.setState({ descriptionText: description });
        console.log(description);
    };

    sentRequestTest = async () => {
        
        const response = await fetch('https://api.sourcehex.com/api', {
        method: 'POST',
        body: JSON.stringify({
        appID: 'contactForm',
        email: this.state.emailText,
        subject: this.state.subjectText,
        description: this.state.descriptionText,
        
        })
      })        

      const json = await response.json();
      console.log(json.error);
      if (json.error == 'success'){
        console.log('succ');
        //print success

      }
      else{
        console.log('error');
      }


    };
    
    render () {  
        const { isVisible } = this.state;
        const { emailText } = this.state;
        const { subjectText } = this.state;
        const { descriptionText } = this.state;
    
        return (
            <>
            <View style={styles.btnView}>
                <Pressable 
                    onPress={() => this.setModalVisible(true)}
                    style={({ pressed }) => [
                    {
                        backgroundColor: pressed
                        ? '#109447'
                        : 'black'
                    },
                    styles.contactbtn,                
                    ]}>
                        <Text style={{color: '#15cb61', fontSize: 30, fontWeight:'bold'}}>
                        ✉︎ Contact
                        </Text>                    
                </Pressable>               
            </View>
            
            <Modal
                animationType={'slide'}
                onRequestClose={() => this.setModalVisible(false)}
                transparent
                visible={isVisible}
            >

            
            <View style={styles.modalcontainer}>

                <Text style={{flex: 1, color: '#15cb61', fontSize: 17, fontWeight: 'bold'}}>
                    Hello! Let us know here if you have any issues using Zoom Sniper. {"\n"}
                    Feel free to leave suggestions, give feedback, or to say hi! {"\n"}
                    We will reply ASAP :) {"\n"}                  
                    {"\n"}
                </Text>
                <View style={{flexDirection: "row", flex: 1, alignContent:"space-around"}}>
                    <View style={styles.heading}>
                        <Email saveEmail={this.setEmail}/>
                    </View>
                    <View style={{flex:1}}/>
                    <View style={styles.heading}>
                        <Subject saveSubject={this.setSubject}/>
                    </View>
                </View>
                
                <View style={{flex: 1}}></View>
                        
                <View style={styles.description}>
                    <Description style={{flex: 1}} saveDescription={this.setDescription}/> 
                </View>                           

                <View style={{flex: 2}}></View>
                <View style={{flex: 1, flexDirection: "row", justifyContent: 'flex-end'}}>
                    <Pressable 
                        onPress={() => this.setModalVisible(false)}
                        style={({ pressed }) => [
                            {
                                backgroundColor: pressed
                                ? '#109447'
                                : '#15cb61'
                            }, 
                            styles.donebtn,                
                        ]}>
                        <Text style={styles.donetxt}>
                            CANCEL
                        </Text>
                    </Pressable>
                        
                    <View style={{width: 15}}></View>

                    <Pressable 
                        onPress={() => {this.sentRequestTest(), this.setModalVisible(false)} }
                        style={({ pressed }) => [
                            {
                                backgroundColor: pressed
                                ? '#109447'
                                : '#15cb61'
                            }, 
                            styles.donebtn,                
                        ]}>
                        <Text style={styles.donetxt}>
                            SUBMIT
                        </Text>
                    </Pressable>

                </View>

            </View>
            </Modal>
            </>

        );
    }
}

const styles = StyleSheet.create({
    btnView:{
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    contactbtn:{
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 12,
    },
    modalcontainer: {
        alignSelf: 'center',     
        backgroundColor: '#282828',
        borderColor: '#2d2d2d',
        borderRadius: 10,
        borderWidth: 20,
        borderStyle: 'dashed',
        height: 'auto',
        width: 'auto',
        maxWidth: 600,
        marginVertical: '5%',
        marginHorizontal: '25%',
        padding: 30,       
    },
    heading:{
        flex: 8
    },
    description:{
        flex: 2,
    },
    donebtn: {     
        justifyContent: 'center',
        paddingHorizontal: 15,
        borderRadius: 5,
    },
    donetxt:{
        color: 'black', 
        fontSize: 15, 
        fontWeight:'bold',
    },
    
});