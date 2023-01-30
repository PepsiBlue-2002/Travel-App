import React, {useState} from 'react';
import {Text, TextInput, View, ScrollView, Share } from 'react-native';
import { Icon } from 'react-native-elements';
import DirectMessagePage from '../Pages/DirectMessagePage';
import { Button } from 'react-native-elements/dist/buttons/Button';

/* From React Native docs - handling text input
const PizzaTranslator = () => {
  const [text, setText] = useState('');
  return (
    <View style={{padding: 10}}>
      <TextInput
        style={{height: 40}}
        placeholder="Type here to translate!"
        onChangeText={newText => setText(newText)}
        defaultValue={text}
      />
      <Text style={{padding: 10, fontSize: 42}}>
        {text
          .split(' ')
          .map(word => word && '🍕')
          .join(' ')}
      </Text>
    </View>
  );
};
*/

const FeedInput = () => {
  return (
    <View style={styles.headerContainer2}>
      <Button
        name='Add Text'
        options={{
          title: 'Add Text',
          buttonIcon: () => (
            <Icon reverse
              name='message'
              type='font-awesome'
              size={24}
              iconStyle={{ width: 24 }}
              color='black'
            />
          )
        }}
      />
      <Button
        name='Add An Image'
        options={{
          title: 'Add An Image',
          buttonIcon: () => (
            <Icon reverse
              name='Image'
              type='font-awesome'
              size={24}
              iconStyle={{ width: 24 }}
              color='black'
            />
          )
        }}
      />

    </View>
  )
};
  
  


const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>Activity Feed</Text>
    </View>
  );
}

//hsl(120, 100%, 50%)

const HomePage = () => {
  return (
      <ScrollView>
        <Header />
        <FeedInput />
      <Text> You have no activity to show.</Text>

      </ScrollView>
  );
}


const styles = {
  headerContainer: {
      backgroundColor: '#F8F8F8',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 30,
      paddingBottom: 10,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.2,
      elevation: 2,
      position: 'relative'
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
    position: 'relative'
},
  headerText: {
      fontSize: 20
  },
  directMessagesButton: {
    alignItems: 'right'
  }
}



export default HomePage;
