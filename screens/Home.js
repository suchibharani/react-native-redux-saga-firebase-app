import React, { Component } from 'react';
import {
    StyleSheet,
    FlatList,
    View,
    Text,
    Button,
    ActivityIndicator,
    TouchableHighlight
} from 'react-native';


import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
// Import actions
import * as mapActions from '../actions';

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
        };

        this.renderItem = this.renderItem.bind(this);
    }

    componentDidMount() {
        this.props.actions.loadQuotes(); //call our action
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
                    <Button
                        title="Go to Counter"
                        onPress={() => navigation.navigate('Counter')}
                    />
                    <FlatList
                        ref='listRef'
                        data={this.props.quotes}
                        renderItem={this.renderItem}
                        keyExtractor={(item, index) => `quotes_${index}` }/>
                    <TouchableHighlight style={styles.addButton}
                                        underlayColor='#ff7043'
                                        onPress={() => navigation.navigate('Newquote', {title:"New Quote"})}>
                        <Text style={{fontSize: 25, color: 'white'}}>+</Text>
                    </TouchableHighlight>
                </View>
            );
        }
    }

    renderItem({item, index}) {
        return (
            <View style={styles.row}>
                <Text style={styles.title}>
                    {item.author}
                </Text>
                <Text style={styles.description}>
                    {item.quote}
                </Text>
            </View>
        )
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
export default connect(mapStateToProps, mapDispatchToProps)(Home);

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
    },
    addButton: {
        backgroundColor: '#ff5722',
        borderColor: '#ff5722',
        borderWidth: 1,
        height: 50,
        width: 50,
        borderRadius: 50 / 2,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 20,
        right: 20,
        shadowColor: "#000000",
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
            height: 1,
            width: 0
        }
    }
});