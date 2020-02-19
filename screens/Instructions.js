import React, { Component } from 'react';
import {
    StyleSheet,
    FlatList,
    View,
    Text,
    Button,
    ActivityIndicator
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
// Import actions
import * as mapActions from '../actions';

class Instruction extends Component {
    constructor(props) {
        super(props);

        this.state = {
        };

        this.renderItem = this.renderItem.bind(this);
    }

    componentDidMount() {
        this.props.actions.loadInstructions(); //call our action
    }

    render() {
        let {navigation} = this.props;
        if (this.props.loading) {
            return (
                <View style={styles.activityIndicatorContainer}>
                    <ActivityIndicator animating={true}/>
                </View>
            );
        } else {
            return (
                <View style={{flex:1, backgroundColor: '#F5F5F5', paddingTop:20}}>
                    <FlatList
                        ref='listRef'
                        data={this.props.instructions}
                        renderItem={this.renderItem}
                        keyExtractor={(item, index) => "list-item"+index }/>
                </View>
            );
        }
    }

    renderItem({item, index}) {
        return (
            <View style={styles.row}>
                <Text style={styles.title}>
                    {(parseInt(index) + 1)}{". "}{item.title}
                </Text>
                <Text style={styles.description}>
                    {item.description}
                </Text>
            </View>
        )
    }
};


// Map State To Props (Redux Store Passes State To Component)
const mapStateToProps = (state) => {
    return {
        loading: state.instructions.loading,
        instructions: state.instructions.instructions
    }
  };
// Map Dispatch To Props (Dispatch Actions To Reducers. Reducers Then Modify The Data And Assign It To Your Props)
const mapDispatchToProps = (dispatch) => {
    // Action
    return {actions: bindActionCreators(
        mapActions, dispatch)}
};


//Connect everything
export default connect(mapStateToProps, mapDispatchToProps)(Instruction);

const styles = StyleSheet.create({
    activityIndicatorContainer:{
        backgroundColor: "#fff",
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },

    row:{
        borderBottomWidth: 1,
        borderColor: "#ccc",
        padding: 10
    },

    title:{
        fontSize: 15,
        fontWeight: "600"
    },

    description:{
        marginTop: 5,
        fontSize: 14,
    }
});