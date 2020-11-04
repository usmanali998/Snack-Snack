import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  FlatList,
  Image,
  View,
  Dimensions,
  TouchableOpacity
} from 'react-native';

import Resources from "./Resources";

export default class App extends React.Component {

  state = {
    images: [
      { id: "1", name: Resources.one },
      { id: "2", name: Resources.two },
      { id: "3", name: Resources.three },
      { id: "4", name: Resources.four },
      { id: "5", name: Resources.five },
      { id: "6", name: Resources.six },
      { id: "7", name: Resources.seven },
      { id: "8", name: Resources.eight },
      { id: "9", name: Resources.nine },
      { id: "10", name: Resources.ten },
    ],
    currentIndex: 0
  }

  upButtonTapped = () => {

    const { currentIndex } = this.state;

    var newIndex = 0
    if (currentIndex !== 0) {

      newIndex = currentIndex - 1;
      this.setState({currentIndex: newIndex})

    }
    this.flatListRef.scrollToIndex({ animated: true, index: newIndex });

  };

  downButtonTapped = () => {

    const { currentIndex, images } = this.state;

    var newIndex = images.length - 1
    if (currentIndex !== (images.length - 1)) {

      newIndex = currentIndex + 1;
      this.setState({currentIndex: newIndex})

    }
    this.flatListRef.scrollToIndex({ animated: true, index: newIndex });

  };

  render() {

    const images = this.state.images;

    return (

      <>
        <StatusBar barStyle="dark-content" />

        <FlatList
          ref={ref => {
            this.flatListRef = ref;
          }}
          data={images}
          pagingEnabled
          renderItem={({ item }) =>

            <View style={styles.imageContainer}>

              <Image style={styles.image} source={item.name}></Image>

            </View>

          }>
          keyExtractor={item => item.id}

        </FlatList>

        <View style={[styles.buttonContainer, styles.upButtonContainer]}>
          <TouchableOpacity style={styles.upButton} onPress={this.upButtonTapped}>
            <Image style={styles.upArrowImage} source={Resources.upArrow}></Image>
          </TouchableOpacity>
        </View>

        <View style={[styles.buttonContainer, styles.downButtonContainer]}>
          <TouchableOpacity style={styles.upButton} onPress={this.downButtonTapped}>
            <Image style={styles.downArrowImage} source={Resources.downArrow}></Image>
          </TouchableOpacity>
        </View>

      </>

    );

  }

}

const styles = StyleSheet.create({
  imageContainer: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  },
  image: {
    flex: 1,
    width: '100%',
    resizeMode: 'cover',
  },
  buttonContainer: {
    position: "absolute",
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "black",
    alignSelf: "center",
    opacity: 0.6
  },
  upButtonContainer: {
    top: 0,
    marginTop: 70
  },
  upButton: {
    alignItems: "center",
    width: "100%",
    height: "100%"
  },
  upArrowImage: {
    marginTop: 10
  },
  downButtonContainer: {
    bottom: 0,
    marginBottom: 70
  },
  downArrowImage: {
    marginTop: 14
  },
});