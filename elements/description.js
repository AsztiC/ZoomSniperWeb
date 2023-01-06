import React, { Component } from 'react'
import {StyleSheet, View, TextInput } from 'react-native';

export class Description extends Component { 
    state = {
      text: ''
    }

    setDescription = (description) => {
      this.setState({ text: description});
      this.props.saveDescription(description);
      //console.log(description);
    };
   
    render () { 
      
      return (
        
          <View >
            <TextInput
                style={[this.state.text.length != 0? styles.textboxSelect : styles.textbox]}
                numberOfLines={5}
                placeholder="Add message"
                placeholderTextColor= 'white'
                multiline = {true}
                onChangeText = {this.setDescription}
            />
            <View style={{height: 20}}></View>
          </View>
        
      );
    }
  }

const styles = StyleSheet.create({
        textbox: {      
          textAlignVertical: 'top',
          fontSize: 21,
          textAlign: 'left',
          borderWidth: 3,
          paddingVertical: 10,
          paddingHorizontal: 15,
          borderColor: 'white',
          color: 'white',
          borderRadius: 10,
          borderStyle: 'dashed',
          },
        textboxSelect: { 
            textAlignVertical: 'top',
            fontSize: 21,
            textAlign: 'left',
            borderWidth: 3,
            paddingVertical: 10,
            paddingHorizontal: 15,
            borderColor: '#15cb61',
            color: '#15cb61',
            borderRadius: 10,     
            borderStyle: 'dashed',
            },
        text:{
          fontSize: 21,
          paddingVertical: '3',
          paddingHorizontal: '1',
          borderWidth: 2,
          borderRadius: 10,
          }
    });