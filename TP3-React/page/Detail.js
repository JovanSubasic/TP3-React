import { StatusBar } from 'expo-status-bar';
import { Text, View , StyleSheet } from 'react-native';
import React , { useState , useEffect} from 'react';

export default function App() {

  

  
  return (
    
    <View style={styles.container}>
      <Text>aaaaaaaaaaaaa</Text>
      
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 350,
    height: 350,
    // backgroundColor: '#036aa4',
  },
  item: {
    fontSize: '30px',
    fontWeight: 'bold',
    color: '#82f3ef',
  },
});
