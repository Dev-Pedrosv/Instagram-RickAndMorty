
import React from 'react';
import { SafeAreaView, View, StatusBar } from 'react-native';
import Feed from './src/Pages/Feed';





export default function App() {
  return (
    <View>
      <SafeAreaView>
        <StatusBar
          backgroundColor="transparent"
          translucent />
        <Feed />

      </SafeAreaView>
    </View>
  );
}

