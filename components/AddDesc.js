import React , { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Input from './Input';
import TODO from '../data/dummy-data';

const AddDesc = props => {


  return (
    
      <View style={styles.buttonText}>
      <Text>{props.desctitle}</Text> 
      </View>

     
    
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'white',
    height: 35,
    width: "47%",
    marginTop: 10,
    
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    
  },
  buttonText: {
    color: 'black',
    fontSize: 12
  }
});

export default AddDesc;