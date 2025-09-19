import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';

const ColorChangerApp = () => {
    const [backgroundColor, setBackgroundColor] = useState('white');
    
    return (
    <View style={[styles.container, { backgroundColor: bgColor,}]}>
      <Button title="White" onPress={() => setBackgroundColor('white')}/>
      <Button title="Aqua" onPress={() => setBackgroundColor('aqua')}/>
      <Button title="LightBlue" onPress={() => setBackgroundColor('lightblue')}/>
      </View>
        );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignItems: 'center',
  },
});

export default ColorChangerApp;