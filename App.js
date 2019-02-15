import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default class App extends React.Component {




  render() {
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <View style={[styles.buttonWrapper, style = { backgroundColor: 'gray' }]}>
            <TouchableOpacity style={styles.soundButton}>
              <Image
                source={
                  require('./assets/killer-queen-3rd-bomb-template.png')
                }
              />
            </TouchableOpacity>
            <Text style={styles.buttonText}>Text Longer</Text>
          </View>
          <View style={[styles.buttonWrapper, style = { backgroundColor: 'yellow' }]}>
            <Text style={styles.buttonText}>2</Text>
          </View>
          <View style={[styles.buttonWrapper, style = { backgroundColor: 'orange' }]}>
            <Text style={styles.buttonText}>3</Text>
          </View>
          <View style={[styles.buttonWrapper, style = { backgroundColor: 'purple' }]}>
            <Text style={styles.buttonText}>4</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={[styles.buttonWrapper, style = { backgroundColor: 'gray' }]}>
            <Text style={styles.buttonText}>Text Longer</Text>
          </View>
          <View style={[styles.buttonWrapper, style = { backgroundColor: 'yellow' }]}>
            <Text style={styles.buttonText}>2</Text>
          </View>
          <View style={[styles.buttonWrapper, style = { backgroundColor: 'orange' }]}>
            <Text style={styles.buttonText}>3</Text>
          </View>
          <View style={[styles.buttonWrapper, style = { backgroundColor: 'purple' }]}>
            <Text style={styles.buttonText}>4</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={[styles.buttonWrapper, style = { backgroundColor: 'gray' }]}>
            <Text style={styles.buttonText}>Text Longer</Text>
          </View>
          <View style={[styles.buttonWrapper, style = { backgroundColor: 'yellow' }]}>
            <Text style={styles.buttonText}>2</Text>
          </View>
          <View style={[styles.buttonWrapper, style = { backgroundColor: 'orange' }]}>
            <Text style={styles.buttonText}>3</Text>
          </View>
          <View style={[styles.buttonWrapper, style = { backgroundColor: 'purple' }]}>
            <Text style={styles.buttonText}>4</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={[styles.buttonWrapper, style = { backgroundColor: 'gray' }]}>
            <Text style={styles.buttonText}>Text Longer</Text>
          </View>
          <View style={[styles.buttonWrapper, style = { backgroundColor: 'yellow' }]}>
            <Text style={styles.buttonText}>2</Text>
          </View>
          <View style={[styles.buttonWrapper, style = { backgroundColor: 'orange' }]}>
            <Text style={styles.buttonText}>3</Text>
          </View>
          <View style={[styles.buttonWrapper, style = { backgroundColor: 'purple' }]}>
            <Text style={styles.buttonText}>4</Text>
          </View>
        </View>
        <View style={styles.bottomSection}>
          <Text>
            Bottom
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
  },
  buttonWrapper: {
    flex: 1,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    flex: 1,
    backgroundColor: 'red',
    textAlignVertical: 'center',
  },
  buttomSection: {
    height: 250,
  },
  soundButton: {
    height: 100,
  }
});
