import React from 'react';
import { Platform, View, ScrollView, Text, StyleSheet } from 'react-native'


const Flex = () => {
    return (
      <View
        style={[
          styles.container,
          {
            // Try setting `flexDirection` to `"row"`.
            flexDirection: 'column',
          },
        ]}>
        <View style={{flex: 1, backgroundColor: 'red'}} />
        <View style={{flex: 2, backgroundColor: 'darkorange'}} />
        <View style={{flex: 3, backgroundColor: 'green'}} />
      </View>
    );
  };

const FAQScreen = () => {
    return (
        <ScrollView>
            
        </ScrollView>
    );
  };



const styles = StyleSheet.create({
    Header: {
        backgroundColor: 'black',
        height: 140,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row'
    },
    container: {
        flex: 1,
        padding: 20,
      }
})



export default FAQScreen;