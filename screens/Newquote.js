import React, { Component } from 'react';
import {
    StyleSheet,
    FlatList,
    View,
    Text,
    Button,
    ActivityIndicator,
    SafeAreaView,
    TextInput,
    TouchableHighlight,
    KeyboardAvoidingView,
} from 'react-native';


import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
// Import actions
import * as mapActions from '../actions';
const MAX_LENGTH = 250;
class Newquote extends Component {
    constructor(props) {
        super(props);

        this.state = {
        };

    }

    componentDidMount() {

    }

    render() {
        return(
        <KeyboardAvoidingView  style={styles.flex} behavior="padding">
            <SafeAreaView style={styles.flex}>
                <View style={styles.flex}>
                    <TextInput
                        // onChangeText={(text) => setAuthor(text)}
                        placeholder={"Author"}
                        autoFocus={true}
                        style={[styles.author]}
                        value=""/>
                    <TextInput
                        multiline={true}
                        // onChangeText={(text) => setText(text)}
                        placeholder={"Enter Quote"}
                        style={[styles.text]}
                        value=""/>
                </View>

                <View style={styles.buttonContainer}>
                    <View style={{flex: 1, justifyContent: "center"}}>
                        
                    </View>
                    <View style={{flex: 1, alignItems: "flex-end"}}>
                        <TouchableHighlight style={[styles.button]} 
                                            underlayColor="rgba(0, 0, 0, 0)">
                            <Text >
                                Save
                            </Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </SafeAreaView>
        </KeyboardAvoidingView>
        );
    }
};


// Map State To Props (Redux Store Passes State To Component)
const mapStateToProps = (state) => {
    return {
        quotes: state.quotes
    }
  };
// Map Dispatch To Props (Dispatch Actions To Reducers. Reducers Then Modify The Data And Assign It To Your Props)
const mapDispatchToProps = (dispatch) => {
    // Action
    return {actions: bindActionCreators(
        mapActions, dispatch)}
};


//Connect everything
export default connect(mapStateToProps, mapDispatchToProps)(Newquote);

const styles = StyleSheet.create({
    flex: {
        flex: 1
    },

    buttonContainer: {
        height: 70,
        flexDirection: "row",
        padding: 12,
        backgroundColor: "white"
    },

    count: {
        fontFamily: 'HelveticaNeue-Medium',
        fontSize: 17,
        color: "#6B9EFA"
    },

    button: {
        width: 80,
        height: 44,
        borderRadius: 8,
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: "#6B9EFA"
    },

    buttonText: {
        fontFamily: 'HelveticaNeue-Medium',
        fontSize: 16,
    },

    author: {
        fontSize: 20,
        lineHeight: 22,
        fontFamily: 'Helvetica Neue',
        height: 80,
        padding: 16,
        backgroundColor: 'white',
    },

    text: {
        fontSize: 30,
        lineHeight: 33,
        fontFamily: 'Helvetica Neue',
        color: "#333333",
        padding: 16,
        paddingTop: 16,
        minHeight: 170,
        borderTopWidth: 1,
        borderColor: "rgba(212,211,211, 0.3)"
    }
});