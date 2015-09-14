/**
 * @file melon-native Example
 * @author cxtom(cxtom2008@gmail.com)
 */

'use strict';

var React = require('react-native');
var {
    AppRegistry,
    StyleSheet,
    Text,
    View
} = React;

var Button = require('./src/Button');

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    }
});

var melonNative = React.createClass({
    render: function () {
        return (
            <View style={styles.container}>
                <Button>一个按钮</Button>
            </View>
        );
    }
});

AppRegistry.registerComponent('melonNative', () => melonNative);
