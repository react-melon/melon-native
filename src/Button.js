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
        textStyle: Text.propTypes.style,
        style: View.propTypes.style
    },

    render: function () {

        var props = this.props;

        var touchableProps = {};
        if (!props.disabled) {
            touchableProps.onPress = this.props.onPress;
            touchableProps.onPressIn = this.props.onPressIn;
            touchableProps.onPressOut = this.props.onPressOut;
            touchableProps.onLongPress = this.props.onLongPress;
        }

        var activeOpacity = props.disabled ? 1 : 0.79;

        return (
            <TouchableHighlight {...touchableProps} activeOpacity={activeOpacity} style={[styles.container, this.props.style]}>
                {this.renderChildren()}
            </TouchableHighlight>
        );
    },

    renderChildren: function () {

        var props = this.props;

        var disabled = props.disabled;

        var textStateStyle = disabled ? styles.disabledText : null;
        var viewStateStyle = disabled ? styles.disabledView : null;

        return (
            <View style={[styles.view, viewStateStyle]}>
                <Text style={[styles.text, textStateStyle, this.props.textStyle]}>
                        {this.props.children}
                </Text>
            </View>
        );

    }
});

module.exports = Button;