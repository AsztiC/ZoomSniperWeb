import React, { useState, useMemo, Component } from 'react'
import { Modal, StyleSheet, Text, View, Button, TouchableOpacity, TextInput } from 'react-native';

export class Subject extends Component{
    state = {
        text: ''
      }

      setSubject = (subject) => {
        this.setState({ text: subject});
        this.props.saveSubject(subject);
      };

    render() {
        return(
            <>
            <View style={styles.title}>           
              <TextInput
              blurOnSubmit={true}
              placeholder="Subject"
              placeholderTextColor= 'white'
              style={[this.state.text.length != 0? styles.titleinputSelect : styles.titleinput]}
              onChangeText={this.setSubject}
              />
            </View>
            <View style={{height: 20}}></View>
            </>
        );
        
    }
}

const styles = StyleSheet.create({
    title: {
        height: 100
    },
    titleinput: {
        height: 60,
        fontSize: 21,
        borderColor: 'white',
        color: 'white',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderWidth: 2,
        borderRadius: 10,
        borderStyle: 'dashed',
    },
    titleinputSelect: {
        height: 60,
        fontSize: 21,
        borderColor: '#15cb61',
        color: '#15cb61',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderWidth: 2,
        borderRadius: 10,
        borderStyle: 'dashed',
    },
    
});