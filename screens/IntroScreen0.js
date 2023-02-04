import React, {useState, useEffect} from 'react';
import {Text, TextInput, View, ScrollView, Share, Button, 
  TouchableOpacity, Image, ImageBackground } from 'react-native';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';
import ImageX from '../assets/images/HomeScreen/atrio.jpg';
import Image2 from '../assets/images/HomeScreen/2-rock.jpg';

//mostly testing for future intro page

//Top Header
const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>loremipsumdolor</Text>
    </View>
  );
}

const InitialBackground = () => {
  return (
    <Animatable.View
      animation='fadeIn'
      duration={1900}
      delay={50}
    >
      <Image style={{
        resizeMode: 'center',
        width: '100%',
        height: '100%'
      }} 
        source={ImageX}
      />
    </Animatable.View>
  )
};



//This the return to connect everything
const IntroScreen0 = () => {
  return (
      <View>
        <Header />
        <InitialBackground />
      </View>
  );
}


// Styles
const styles = {
//Activity Feed Header
  headerContainer: {
    backgroundColor: '#00b377',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 30,
    paddingBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative',
    flexDirection: 'row', 
  },
  headerText: {
    fontSize: 20,
    flex: 0.95,
    textAlign: 'center',
  }
}



export default IntroScreen0;
