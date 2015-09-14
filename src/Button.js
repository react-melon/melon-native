/**
 * @file melon-native Button
 * @author cxtom(cxtom2008@gmail.com)
 */

'use strict';

var React = require('react-native');
var {
    PropTypes,
    Text,
    TouchableHighlight,
    View
} = React;

var styles = require('./styles/Button.style');
var colors = require('./styles/colors');


var Button = React.createClass({

    propTypes: {
        ...TouchableHighlight.propTypes,
        disabled: PropTypes.bool,
        style: Text.propTypes.style
    },

    render: function () {

        var touchableProps = {};
        if (!this.props.disabled) {
            touchableProps.onPress = this.props.onPress;
            touchableProps.onPressIn = this.props.onPressIn;
            touchableProps.onPressOut = this.props.onPressOut;
            touchableProps.onLongPress = this.props.onLongPress;
        }

        return (
            <TouchableHighlight activeOpacity={0.79} style={styles.container}>
                {this.renderChildren()}
            </TouchableHighlight>
        );
    },

    renderChildren: function () {
        var buttonStateStyle = this.props.disabled ? styles.disabledText : null;

        return (
            <View style={[styles.text, this.props.style]}>
                <Text style={[buttonStateStyle]}>
                    {this.props.children}
                </Text>
            </View>
        );

    }
});

module.exports = Button;