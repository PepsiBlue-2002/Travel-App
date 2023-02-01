import React from 'react';
import { Platform, View, ScrollView, Text, StyleSheet, TouchableOpacity } from 'react-native'

//FAQ Header - copied from HomePage.js; styles as well. Minor changes made so far.
const FAQHeader = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>FAQ</Text>
    </View>
  );
}

//FAQ Screen
const FAQScreen = () => {
  const [expanded, setExpanded] = React.useState(false);
  const [expanded2, setExpanded2] = React.useState(false);
  const [expanded3, setExpanded3] = React.useState(false);

  return (
    <View style={styles.container}>
      {/*FAQ Header and any future returns here */}
      <FAQHeader />
      <ScrollView>
        <TouchableOpacity
          style={styles.questionContainer}
          onPress={() => setExpanded(!expanded)}
        >
          <Text style={styles.questionText}>What is FAQ page?</Text>
          <Text style={styles.icon}>{expanded ? '-' : '+'}</Text>
        </TouchableOpacity>
        {expanded && (
          <View style={styles.answerContainer}>
            <Text style={styles.answerText}>
              FAQ stands for "Frequently Asked Questions". It is a page that answers commonly asked questions.
            </Text>
          </View>
        )}

  <TouchableOpacity
          style={styles.questionContainer}
          onPress={() => setExpanded2(!expanded2)}
        >
          <Text style={styles.questionText}>I have a question.</Text>
          <Text style={styles.icon}>{expanded2 ? '-' : '+'}</Text>
        </TouchableOpacity>
        {expanded2 && (
          <View style={styles.answerContainer}>
            <Text style={styles.answerText}>
              Having a question is simply a statement. This is not a FAS (Frequently Announced Statement) page.
            </Text>
          </View>
        )}

<TouchableOpacity
          style={styles.questionContainer}
          onPress={() => setExpanded3(!expanded3)}
        >
          <Text style={styles.questionText}>How do I find my friends?.</Text>
          <Text style={styles.icon}>{expanded3 ? '-' : '+'}</Text>
        </TouchableOpacity>
        {expanded3 && (
          <View style={styles.answerContainer}>
            <Text style={styles.answerText}>
              From any screen; swipe from left to right to pull up the sidebar and select Friends.
            </Text>
          </View>
        )}
        </ScrollView>
    </View>
  );
};

const styles = {
  container: {
    marginVertical: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    overflow: 'hidden',
  },
  questionContainer: {
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#f2f2f2',
  },
  questionText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  icon: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  answerContainer: {
    padding: 20,
  },
  answerText: {
    fontSize: 16,
  },
  headerContainer: {
    backgroundColor: '#D6DBDF',
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

export default FAQScreen;
