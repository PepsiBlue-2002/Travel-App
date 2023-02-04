//Place for extra things | Not connected to anything

//__________________________________________________________________________________________________________________________

// From React Native docs - handling text input
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

//__________________________________________________________________________________________________________________________

//React Native Slider | This could be useful later (already installed)
//https://www.npmjs.com/package/react-native-image-slider-show?activeTab=readme

import Slideshow from 'react-native-image-slider-show';
 
// ...
 
/*
render() {
  return (
    <Slideshow 
      dataSource={[
        { url:'http://placeimg.com/640/480/any' },
        { url:'http://placeimg.com/640/480/any' },
        { url:'http://placeimg.com/640/480/any' }
      ]}
    />
  );
}
*/