import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button} from 'react-native';

export default function App() {
  return (
    <View style = {{padding: 65}}> 

      <View>
      <TextInput />
      <Button title = "ADD"/>

      </View>
      <View>

      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  
});
