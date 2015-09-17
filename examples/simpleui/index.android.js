/**
 * @file melon-native Example
 * @author cxtom(cxtom2008@gmail.com)
 */

'use strict';

var React = require('react-native');
var {
    AppRegistry,
    StyleSheet,
    View
} = React;

var Button = require('./src/Button');

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    button: {
        marginVertical: 5
    }
});

var simpleui = React.createClass({
    render: function () {
        return (
            <View style={styles.container}>
                <Button style={styles.button}>一个按钮</Button>
                <Button style={styles.button} disabled>一个按钮</Button>
            </View>
        );
    }
});

AppRegistry.registerComponent('simpleui', () => simpleui);
