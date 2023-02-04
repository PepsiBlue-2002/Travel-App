import { Platform, View, Text, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList 
} from '@react-navigation/drawer';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { Icon } from 'react-native-elements';
import HomePage from '../Pages/HomePage';
import FriendScreen from '../screens/FriendScreen';
import AboutScreen from './AboutScreen';
import FAQScreen from './FAQScreen';
import DirectMessagePage from '../Pages/DirectMessagePage';
import ProfilePage from '../Pages/ProfilePage';
import IntroScreen0 from './IntroScreen0';

const Drawer = createDrawerNavigator();

//Setup so the Icons on the Activity Feed would link better to their appropriate screens
const HomeNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Home'
        component={HomePage}
        options={({ navigation }) => ({
          title: 'Home',
          headerShown: false
        })}
      />
      <Stack.Screen
        name='DirectMessagePage'
        component={NestedStackNavigator}
        options={{ title: 'DirectMessagePage', headerShown: false }}
      />
      <Stack.Screen
        name='ProfilePage'
        component={ProfilePage}
        options={{ title: 'Profile Page' }}
      />
    </Stack.Navigator>
  );
};

const NestedStackNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='DirectMessagePage'
        component={DirectMessagePage}
        options={{ title: 'DirectMessagePage' }}
      />
      <Stack.Screen
        name='ProfilePage'
        component={ProfilePage}
        options={{ title: 'Profile Page' }}
      />
    </Stack.Navigator>
  );
};

//Drawer
const CustomDrawerContent = (props) => (
  <DrawerContentScrollView {...props}>
      <View style={styles.drawerHeader}>
          <View style={{ flex: 1 }}>
          </View>
          <View style={{ flex: 2 }}>
            <Text style={styles.drawerHeaderText}>TravelTales (Early Beta)</Text>
          </View>
      </View>
      <DrawerItemList {...props} labelStyle={{ fontWeigt: 'bold' }} />
  </DrawerContentScrollView>
)

//Main is the export default, drawer screens in here
const Main = () => {
  return (
    <View
      style={{
        flex: 1,
        paddingTop:
          Platform.OS === 'ios' ? 0 : Constants.statusBarHeight
      }}
    >

      <Drawer.Navigator
        initialRouteName='Home'
        drawerContent={CustomDrawerContent}
        drawerStyle={{ backgroundColor: '#D6DBDF' }}
      > 
      {/*Testing Screen - accessible by drawer nav, should not affect anything if removed*/}
        <Drawer.Screen
          name='Intro'
          component={IntroScreen0}
          options={{
            title: 'Test',
            drawerIcon: () => (
              <Icon
                name='square'
                type='font-awesome'
                size={24}
                iconStyle={{ width: 24 }}
                color='red'
              />
            )
          }}
        />
        

        <Drawer.Screen
          name='Home'
          component={HomeNavigator}
          options={{
            title: 'Home',
            drawerIcon: () => (
              <Icon
                name='home'
                type='font-awesome'
                size={24}
                iconStyle={{ width: 24 }}
                color='black'
              />
            )
          }}
        />

        <Drawer.Screen
          name='Friends'
          component={FriendScreen}
          options={{
            title: 'Friends',
            drawerIcon: ({ color }) => (
              <Icon
                name="group"
                type='font-awesome'
                size={24}
                iconStyle={{ width: 24 }}
                color={color}
              />
            )
          }}
        />

        <Drawer.Screen
          name='FAQ'
          component={FAQScreen}
          options={{
            title: 'FAQ',
            drawerIcon: ({ color }) => (
              <Icon
                name="info"
                type='font-awesome'
                size={18}
                iconStyle={{ width: 15 }}
                color={color}
              />
            )
          }}
        />

        <Drawer.Screen
          name='About'
          component={AboutScreen}
          options={{
            title: 'About',
            drawerIcon: ({ color }) => (
              <Icon
                name="info-circle"
                type='font-awesome'
                size={18}
                iconStyle={{ width: 15 }}
                color={color}
              />
            )
          }}
        />        
      </Drawer.Navigator>

      <Drawer.Screen
          name='DM'
          component={DirectMessagePage}
      />

    </View>
  )
}

//stylesheet for Main
const styles = StyleSheet.create({
  drawerHeader: {
      backgroundColor: 'black',
      height: 140,
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
      flexDirection: 'row'
  },
  drawerHeaderText: {
      color: '#fff',
      fontSize: 24,
      fontWeight: 'bold'
  }
})


  export default Main;
