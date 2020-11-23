import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Home: React.FC = () => {
  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
      <View>
        <Text style={styles.containerText}>My Pokedex</Text>
      </View>
      <View style={styles.cardsContainer}>
        <View style={styles.sideA}>
          <Text style={styles.containerText}>Side A</Text>
        </View>
        <View style={styles.sideB}>
          <Text style={styles.containerText}>Side B</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerText: {
    color: '#000',
    fontSize: hp('5%'),
  },
  cardsContainer: {
    flexDirection: 'row',
  },
  sideA: {
    margin: 5,
    backgroundColor: '#a9a9a9',
    width: wp('50%'),
    height: hp('50%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  sideB: {
    margin: 5,
    backgroundColor: '#a9a9a9',
    width: wp('50%'),
    height: hp('50%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Home;
