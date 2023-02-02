import React, {useState} from 'react';
import {Text, TextInput, View, ScrollView, Share, Button, 
  TouchableOpacity, Image, ImageBackground } from 'react-native';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import backgroundImage from '../assets/images/HomeScreen/1trio.jpg';

//mostly testing for future intro page

//Top Header
const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <ProfileButton />
      <Text style={styles.headerText}>Activity Feed</Text>
      <DMButton />
    </View>
  );
}

const BackgroundImageWithButton = () => {
    return (
    <View>
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
        <View style={styles.overlay}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Howdy</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
    );
  };


//Button for Comment
const DMButton = () => {
  const navigation = useNavigation();
//The navigation doesn't work
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Pages/DirectMessagePage.js')}>
      <Icon
        name='inbox'
        type='font-awesome'
        size={24}
        iconStyle={{ width: 24 }}
        color='black'
      />
    </TouchableOpacity>
  );
};

//Button for Profile
const ProfileButton = () => {
  const navigation = useNavigation();
//The navigation doesn't work
  return (
<TouchableOpacity onPress={() => navigation.navigate()}>
      <Icon
        name='user'
        type='font-awesome'
        size={24}
        iconStyle={{ width: 24 }}
        color='black'
      />
    </TouchableOpacity>
  );
};



//This the return to connect everything
const IntroScreen0 = () => {
  return (
      <View>
        <Header />
        <BackgroundImageWithButton /> 
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
