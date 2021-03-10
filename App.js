/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, Text, View,} from 'react-native';

import {Colors,} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
    return (
        <>
        <StatusBar barStyle="dark-content"/>
        <SafeAreaView>
            <View style={styles.body}>
                <Text style={styles.sectionContainer}>{"First class"}</Text>

                <Text style={styles.sectionContainer2}>{"First class"}</Text>
            </View>
        </SafeAreaView>
        </>
    );
};

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: Colors.lighter,
    },
    engine: {
        position: 'absolute',
        right: 0,
    },
    body: {
        backgroundColor: Colors.white,
        height: '100%',
        width: '100%',
        flexDirection: 'column'
    },
    sectionContainer: {
        textAlign: 'center',
        textAlignVertical: 'center',
        backgroundColor: 'grey',
        width: '100%',
        height: 100,
        padding: 10,
        fontWeight: '500',
        color: 'white'
    }, sectionContainer2: {
        textAlign: 'center',
        textAlignVertical: 'center',
        backgroundColor: 'red',
        width: '100%',
        height: 100,
        padding: 10,
        fontWeight: '500',
        color: 'white',
        marginTop: 20
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: Colors.black,
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
        color: Colors.dark,
    },
    highlight: {
        fontWeight: '700',
    },
    footer: {
        color: Colors.dark,
        fontSize: 12,
        fontWeight: '600',
        padding: 4,
        paddingRight: 12,
        textAlign: 'right',
    },
});

export default App;
