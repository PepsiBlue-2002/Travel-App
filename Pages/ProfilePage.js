import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import { Icon, Divider } from 'react-native-elements';
import * as ImagePicker from 'expo-image-picker';
import * as ImageManipulator from 'expo-image-manipulator';
import * as MediaLibrary from 'expo-media-library';
import LoginScreen from '../screens/LoginScreen';

const ProfilePage = () => {
  return (
      <ScrollView>
        <Divider style={{ height: 1.5, backgroundColor: 'gray' }} />
        <View>
          {/*Insert Picture here, copy import camera api from Extra.js*/}
          <Icon name="circle" size={75} color="white" />
          <LoginScreen />
        </View>
      </ScrollView>
  );
}

const styles = {

  //Header
  headerContainer: {
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 15,
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
};


export default ProfilePage;