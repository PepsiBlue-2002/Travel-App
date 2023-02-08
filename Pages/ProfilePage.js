import React from 'react';
import { Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const ProfilePage = () => {
  return (
    <View>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Profile</Text>
      </View>
      <ScrollView>
        <View style={{ flexDirection: 'row', position: 'center' }}>
          {/*Insert Picture here, copy import camera api from Extra.js*/}
          <Icon name="circle" size={75} color="white" />
        </View>
      </ScrollView>
    </View>
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