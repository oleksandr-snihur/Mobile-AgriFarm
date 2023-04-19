import React, { useEffect } from 'react';
import { View, ImageBackground, Text, Image, StyleSheet } from 'react-native';

const HomeScreen: React.FC = () => {
  useEffect(() => {}, []);

  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default HomeScreen;
