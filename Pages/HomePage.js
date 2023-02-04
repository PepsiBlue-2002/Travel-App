import React, {useState, useEffect, Component } from 'react';
import {Text, TextInput, View, ScrollView, Share, Button, 
  TouchableOpacity, Image, ImageBackground,  Animated } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Icon, Divider } from 'react-native-elements';
import DirectMessagePage from '../Pages/DirectMessagePage';
import ProfilePage from '../Pages/ProfilePage';
import { useNavigation } from '@react-navigation/native';
//Background Images
import Image1 from '../assets/images/HomeScreen/atrio.jpg';
import Image2 from '../assets/images/HomeScreen/2-rock.jpg';
import Image3 from '../assets/images/HomeScreen/3-fishing.jpg';
import Image4 from '../assets/images/HomeScreen/4-rivertown.jpg';
import Image5 from '../assets/images/HomeScreen/5-inner.jpg';
import Image6 from '../assets/images/HomeScreen/6-islandrock.jpg';
import Image7 from '../assets/images/HomeScreen/7-mountain.jpg';
import Image8 from '../assets/images/HomeScreen/8-walkway.jpg';
import Image9 from '../assets/images/HomeScreen/9-snowtree.jpg';
import Image10 from '../assets/images/HomeScreen/10-solo.jpg';
import Image11 from '../assets/images/HomeScreen/11-firework.jpg';
import Image12 from '../assets/images/HomeScreen/12-plant.jpg';



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
      <View style={styles.headerContainer2}
        contentContainerStyle={{ width: 'containerWidth', height: 'auto', overflow: 'hidden' }}>
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
        {/*That marginRight will likely need some tweaking but for viewing purposes right now leaving it*/}
      <Text style={{ fontSize: 8, marginTop: 1, marginRight: 526 }}>Your Story</Text>
      </View>
    </ScrollView>
  )
};

//Use flexDirection: 'column' for the posting/side actions



const Header3 = () => {
  return (
  <ScrollView>
    <View style={styles.headerContainer3}>
      <Text>Add A Post | Add A Yarn</Text>
    </View>
    </ScrollView>
  )
};


//Button for DirectMessages Inbox
const DMButton = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity  onPress={() => navigation.navigate(DirectMessagePage)}>
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
  return (
<TouchableOpacity onPress={() => navigation.navigate(ProfilePage)}>
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

//Background Images Testings

//Images used
const bgimages = [Image1, Image2, Image3, Image4, Image5, Image6, Image7, Image8,
  Image9, Image10, Image11, Image12]

const InitialBackground = () => {
  //Tried to make isVisible work for both but it kept changing the image size so that's why two const for visibility.
  const [isVisible, setIsVisible] = useState(true);
  const [textVisible, setTextVisible] = useState(true);
  //Used to make a random image from const bgimages appear as the background photo
  const randomImageIndex = Math.floor(Math.random() * bgimages.length);
  const randomImage = bgimages[randomImageIndex];
    return (
      <View>
        {/*Divider (In case you need it again.) Should all be uniform if so.*/}
        <Divider style={{ height: 1.5, backgroundColor: 'gray' }} />
        {isVisible && (
          <Image 
            style={{
              resizeMode: 'cover',
              width: '100%',
              height: '220%'
            }} 
            source={randomImage}
          />
        )}
        <TouchableOpacity 
          style={{ position: 'absolute' }} 
          onPress={() => {
            setIsVisible(false);
            setTextVisible(false);
          }}
        >
        <View style={{
          backgroundColor: 'white',
          borderRadius: 20,
          margin: 85,
          marginTop: 150
        }}>
        {isVisible && (
          <Text style={styles.InitialBackgroundButton}>Start your adventure</Text>
        )}
        </View>
        </TouchableOpacity>
      </View>
    );
};


//This the return to connect everything
const HomePage = () => {
  return (
      <ScrollView>
        <Header />
        <FeedTop />
        <InitialBackground />
        <Header3 />
        

      </ScrollView>
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
    shadowOpacity: 0.4,
    elevation: 2,
    position: 'relative',
    flexDirection: 'row', 
  },
  headerText: {
    fontSize: 20,
    flex: 0.95,
    textAlign: 'center',
  },
  //This is the button that overlays the InitialBackground image(s). Right now it only closes the image.
  InitialBackgroundButton: {
    fontSize: 20,
     color: 'black',
     padding: 10,
     margin: 10,
  },
//Profile Tales (FeedTop)
  headerContainer2: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
    paddingBottom: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    flexDirection: 'column'
  },
//Add a Post, Add a Tale, etc.
  headerContainer3: {
    backgroundColor: '#00b377',
  },
//Currently not in use
  postView: {
    margin: 50,
    alignItems: 'center',
    borderWidth: 1.2,
  },
}



export default HomePage;
