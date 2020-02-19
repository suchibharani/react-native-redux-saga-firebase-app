// Imports: Dependencies
import React, { Component } from 'react';
import { Button, Dimensions, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
// Import actions
import * as mapActions from '../actions';

// Screen Dimensions
const { height, width } = Dimensions.get('window');
// Screen: Counter
class Counter extends React.Component {
  constructor(props){
    super(props);
    this.IncreaseCounter = this.IncreaseCounter.bind(this);
    this.DecreaseCounter = this.DecreaseCounter.bind(this);
  }
  IncreaseCounter(){
    var val = 1;
    this.props.actions.reduxIncreaseCounter(val);
  }
  DecreaseCounter(){
    var val = 1;
    this.props.actions.reduxDecreaseCounter(val);
  }
  render() {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.counterTitle}>Counter</Text>
            <View style={styles.counterContainer}>
                <TouchableOpacity onPress={this.IncreaseCounter}>
                    <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>
                <Text style={styles.counterText}>{this.props.counter}</Text>
                <TouchableOpacity onPress={this.DecreaseCounter}>
                    <Text style={styles.buttonText}>-</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
    }
  }

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  counterContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  counterTitle: {
    fontFamily: 'System',
    fontSize: 32,
    fontWeight: '700',
    color: '#000',
  },
  counterText: {
    fontFamily: 'System',
    fontSize: 36,
    fontWeight: '400',
    color: '#000',
  },
  buttonText: {
    fontFamily: 'System',
    fontSize: 50,
    fontWeight: '300',
    color: '#007AFF',
    marginLeft: 40,
    marginRight: 40,
  },
});
// Map State To Props (Redux Store Passes State To Component)
const mapStateToProps = (state) => {
  // Redux Store --> Component
  return {
    counter: state.counter,
  };
};
// Map Dispatch To Props (Dispatch Actions To Reducers. Reducers Then Modify The Data And Assign It To Your Props)
const mapDispatchToProps = (dispatch) => {
  // Action
  return {actions: bindActionCreators(
    mapActions, dispatch)}
};
// Exports
export default connect(mapStateToProps, mapDispatchToProps)(Counter);