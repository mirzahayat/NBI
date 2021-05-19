//import liraries
import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {CounterValue} from '../../redux/actions/Counter_Action';

// create a component
const Counter = () => {
  const dispath = useDispatch();
  const [counter, setcount] = useState(0);
  const {count} = useSelector(state => state.Countercvalue);
  const incre = () => {
    setcount(count + 1);
  };
  const Dicre = () => {
    setcount(count - 1);
  };
  useEffect(() => {
    setcount(count);
  }, []);
  useEffect(() => {
    dispath(CounterValue(counter));
  }, [counter]);
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.countStyle}
        onPress={() => {
          incre();
        }}>
        <Text>Incremant</Text>
      </TouchableOpacity>
      <View>
        <Text>{`Your Result : ${count}`}</Text>
      </View>
      <TouchableOpacity
        style={styles.countStyle}
        onPress={() => {
          Dicre();
        }}>
        <Text>Decrement</Text>
      </TouchableOpacity>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  countStyle: {
    width: '40%',
    height: '5%',
    backgroundColor: 'lightgray',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

//make this component available to the app
export {Counter};
