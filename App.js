import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Picker } from 'react-native';
import { Audio } from 'expo';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      picture: {
        part1: './assets/images/kill-queen-hq.png'
      },
      options: {
        Japanese: 'Japanese',
        French: 'French',
        English: 'English'
      },
      chosen: '',
      lang: ''
    };
    this.handleValueChange = this.handleValueChange.bind(this);
    this.playSound = this.playSound.bind(this);
    this.playSoundTwo = this.playSoundTwo.bind(this);

    this.updateLang = (lang) => {
      this.setState({ lang: lang }, () => {
        console.log("lang", this.state.lang)
      })
    }

  }

  handleValueChange(itemValue) {
    console.log("single value changed", itemValue)
    this.setState({ chosen: itemValue })
  }

  // ON BUTTON PRESS PLAY AUDIO


  playSound = async () => {
    console.log("playSound one");
    const soundObject = new Audio.Sound();

    try {
      const { sound: soundObject, status } = await Audio.Sound.createAsync(
        require('./assets/audio/jojo-ho-ho.mp3'),
        { shouldPlay: true }
      );
      // Your sound is playing!
    } catch (error) {
      // An error occurred!
    }
  }

  playSoundTwo = async () => {
    console.log("playSound two")
    const soundObject = new Audio.Sound();
    try {
      await soundObject.loadAsync(require('./assets/audio/bite-za-dusto-cut_final.mp3'));
      await soundObject.playAsync();
      // Your sound is playing!
    } catch (error) {
      // An error occurred!
    }
  }

  // TODO: Create an object in state that will contain button objects. These objects will contain path to soundfiles, and language choice. 
  // TODO: On Sound Button Press if button object does not exist, create button object.
  // TODO: on dropdown choice for lang. If button object does not exist. create button object.


  // TODO: Make button actually play sound on press.


  // INTERRUPTION_MODE_ANDROID_DUCK_OTHERS lowers other audio while app audio plays (does not stop other audio)


  render() {

    console.log('new')

    return (
      <View style={styles.container}>
        <View style={styles.topSection}>
          <Image
            style={styles.topSectionBackground}
            source={
              require('./assets/images/jojo-soundboard-header.png')
            }
          />
          <Text style={styles.topSectionText}>
            Jojo's Bizarre Soundboard
          </Text>
        </View>
        <View style={styles.row}>
          <View style={styles.singleSoundContainer}>
            <TouchableOpacity onPress={this.playSound} style={styles.soundButton}>
              <Image
                style={styles.buttonPicture}
                source={
                  require('./assets/images/kill-queen-hq.png')
                }
              />
            </TouchableOpacity>
            <View style={styles.buttonTextWrapper}>
              <Text style={styles.buttonText}>Ho-Ho</Text>
            </View>
            <Picker
              selectedValue={this.state.lang}
              style={styles.languagePicker}
              onValueChange={this.updateLang}
              mode="dropdown">
              <Picker.Item label="Japanese" value="japanese" />
              <Picker.Item label="French" value="french" />
              <Picker.Item label="English" value="english" />
            </Picker>
          </View>
          <View style={styles.singleSoundContainer}>
            <TouchableOpacity onPress={this.playSoundTwo} style={styles.soundButton}>
              <Image
                style={styles.buttonPicture}
                source={
                  require('./assets/images/kill-queen-hq.png')
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
                  require('./assets/images/kill-queen-hq.png')
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
                  require('./assets/images/kill-queen-hq.png')
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
          <Image
            style={styles.bottomSectionBackground}
            source={require('./assets/images/kq-diamond-pattern.png')}
          />
          <Text style={styles.bottomSectionText}>
            Developer: Jdorfj
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
    position: 'relative',
    height: 80,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  topSectionBackground: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  topSectionText: {},
  bottomSection: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomSectionBackground: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  bottomSectionText: {
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: 'rgba(50, 50, 50, .8)',
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

