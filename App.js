import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Picker } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      picture: {
        part1: './assets/kill-queen-hq.png'
      },
      options: {
        Japanese: 'Japanese',
        French: 'French',
        English: 'English'
      },
      chosen: '',
      language: ''
    };
    this.handleValueChange = this.handleValueChange.bind(this);
  }

  handleValueChange(itemValue) {
    console.log("single value changed", itemValue)
    this.setState({chosen: itemValue})
  }

  
  render() {

    console.log("old chosen", this.state.chosen)

    return (
      <View style={styles.container}>
        <View style={styles.topSection}>
          <Text>
            Top
          </Text>
        </View>
        <View style={styles.row}>
          <View style={styles.singleSoundContainer}>
            <TouchableOpacity style={styles.soundButton}>
              <Image
                style={styles.buttonPicture}
                source={
                  require('./assets/kill-queen-hq.png')
                }
              />
            </TouchableOpacity>
            <View style={styles.buttonTextWrapper}>
              <Text style={styles.buttonText}>Text Longer please show</Text>
            </View>
            <Picker
              selectedValue={this.state.chosen}
              style={styles.languagePicker}
              onValueChange={(itemValue, itemIndex)=>this.handleValueChange(itemValue)}
              mode="dropdown">
              <Picker.Item label="Japanese" value={this.state.options.Japanese} />
              <Picker.Item label="French" value={this.state.options.French} />
              <Picker.Item label="English" value={this.state.options.English} />
            </Picker>
          </View>
          <View style={styles.singleSoundContainer}>
            <TouchableOpacity style={styles.soundButton}>
              <Image
                style={styles.buttonPicture}
                source={
                  require('./assets/kill-queen-hq.png')
                }
              />
            </TouchableOpacity>
            <View style={styles.buttonTextWrapper}>
              <Text style={styles.buttonText}>Text Longer please show</Text>
            </View>
            <Picker
              selectedValue={this.state.chosen}
              style={styles.languagePicker}
              onValueChange={(itemValue, itemIndex) => {
                this.setState({ chosen: itemValue })
              }}
              mode="dropdown">
              <Picker.Item label="Japanese" value={this.state.options.Japanese} />
              <Picker.Item label="French" value={this.state.options.French} />
              <Picker.Item label="English" value={this.state.options.English} />
            </Picker>
          </View>
          <View style={styles.singleSoundContainer}>
            <TouchableOpacity style={styles.soundButton}>
              <Image
                style={styles.buttonPicture}
                source={
                  require('./assets/kill-queen-hq.png')
                }
              />
            </TouchableOpacity>
            <View style={styles.buttonTextWrapper}>
              <Text style={styles.buttonText}>Text Longer please show</Text>
            </View>
            <Picker
              selectedValue={this.state.chosen}
              style={styles.languagePicker}
              onValueChange={(itemValue, itemIndex) => {
                this.setState({ chosen: itemValue })
              }}
              mode="dropdown">
              <Picker.Item label="Japanese" value={this.state.options.Japanese} />
              <Picker.Item label="French" value={this.state.options.French} />
              <Picker.Item label="English" value={this.state.options.English} />
            </Picker>
          </View>
          <View style={styles.singleSoundContainer}>
            <TouchableOpacity style={styles.soundButton}>
              <Image
                style={styles.buttonPicture}
                source={
                  require('./assets/kill-queen-hq.png')
                }
              />
            </TouchableOpacity>
            <View style={styles.buttonTextWrapper}>
              <Text style={styles.buttonText}>Text Longer please show</Text>
            </View>
            <Picker
              selectedValue={this.state.chosen}
              style={styles.languagePicker}
              onValueChange={(itemValue, itemIndex) => {
                this.setState({ chosen: itemValue })
              }}
              mode="dropdown">
              <Picker.Item label="Japanese" value={this.state.options.Japanese} />
              <Picker.Item label="French" value={this.state.options.French} />
              <Picker.Item label="English" value={this.state.options.English} />
            </Picker>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.singleSoundContainer}>
            <Text style={styles.buttonText}>Text Longer</Text>
          </View>
          <View style={styles.singleSoundContainer}>
            <Text style={styles.buttonText}>2</Text>
          </View>
          <View style={styles.singleSoundContainer}>
            <Text style={styles.buttonText}>3</Text>
          </View>
          <View style={styles.singleSoundContainer}>
            <Text style={styles.buttonText}>4</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.singleSoundContainer}>
            <Text style={styles.buttonText}>Text Longer</Text>
          </View>
          <View style={styles.singleSoundContainer}>
            <Text style={styles.buttonText}>2</Text>
          </View>
          <View style={styles.singleSoundContainer}>
            <Text style={styles.buttonText}>3</Text>
          </View>
          <View style={styles.singleSoundContainer}>
            <Text style={styles.buttonText}>4</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.singleSoundContainer}>
            <Text style={styles.buttonText}>Text Longer</Text>
          </View>
          <View style={styles.singleSoundContainer}>
            <Text style={styles.buttonText}>2</Text>
          </View>
          <View style={styles.singleSoundContainer}>
            <Text style={styles.buttonText}>3</Text>
          </View>
          <View style={styles.singleSoundContainer}>
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

// Color Palette
// #235391
// #5276A5
// #A7BCD6
// ghostwhite

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'ghostwhite',
  },
  topSection: {
    height: 50,
  },
  bottomSection: {
    height: 50,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
  },
  singleSoundContainer: {
    flex: 1,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  soundButton: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonPicture: {
    flex: 3,
    width: 100,
  },
  buttonTextWrapper: {
    flex: 1,
    margin: 0,
  },
  buttonText: {
    backgroundColor: '#235391',
    textAlignVertical: 'center',
    textAlign: 'center',
    color: 'white',
    margin: 0,
  },
  languagePicker: {
    flex: 1,
    width: '100%',
    backgroundColor: '#5276A599',
    justifyContent: 'center',
    borderWidth: 0
  }
});

