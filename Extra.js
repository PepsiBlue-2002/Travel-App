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