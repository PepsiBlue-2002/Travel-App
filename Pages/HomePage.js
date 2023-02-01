import React, {useState} from 'react';
import {Text, TextInput, View, ScrollView, Share, Button, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import DirectMessagePage from '../Pages/DirectMessagePage';
import { useNavigation } from '@react-navigation/native';

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

//Second Header
const FeedTop = () => {
  return (
    <ScrollView horizontal={true}>
      <View style={styles.headerContainer2}>
        <View style={{ flexDirection: 'row' }}>
          <Icon name="circle" size={75} color="white" />
          <Icon name="circle" size={75} color="white" />
          <Icon name="circle" size={75} color="white" />
          <Icon name="circle" size={75} color="white" />
          <Icon name="circle" size={75} color="white" />
          <Icon name="circle" size={75} color="white" />
          <Icon name="circle" size={75} color="white" />
          <Icon name="circle" size={75} color="white" />
        </View>
        {/*broken, need to place underneath - CSS wants to fight me just because I'm wrong*/}
      <Text style={{ fontSize: 8, marginTop: 10 }}>Your Story</Text>
      </View>
    </ScrollView>
  )
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

/* Share Button, not entirely sure how to implement yet
const ShareButton = () => {
  const handleShare = async () => {
    try {
      const result = await Share.share({
        message: 'Check out this content!',
      });
      if (result.action === Share.sharedAction) {
        console.log('Content shared successfully');
      } else if (result.action === Share.dismissedAction) {
        console.log('Sharing dismissed');
      }
    } catch (error) {
      console.log('Error sharing content', error);
    }
  };

  return (
    <Button title="Share" onPress={handleShare} />
  );
};
*/


const Post = () => {
  const [text, setText] = useState('');
  return (
    <View style={styles.postView}>
      <TextInput
        style={{height: 40}}
        placeholder="Type here to post!"
        onChangeText={newText => setText(newText)}
        defaultValue={text}
      />
    </View>
  );
};



//This the return to connect everything
const HomePage = () => {
  return (
      <ScrollView>
        <Header />
        <FeedTop />
        <Post />
        

      </ScrollView>
  );
}


// Styles
const styles = {
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
  headerContainer2: {
    backgroundColor: '#D6DBDF',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
    paddingBottom: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    flexDirection: 'row'
},
  headerText: {
      fontSize: 20,
      flex: 0.95,
      textAlign: 'center',
},
  postView: {
    margin: 50,
    alignItems: 'center',
    borderWidth: 1.2,
  }

}



export default HomePage;
