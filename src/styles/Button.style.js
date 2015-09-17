/**
 * @file melon-native Button style
 * @author cxtom(cxtom2008@gmail.com)
 */

'use strict';

var StyleSheet = require('react-native').StyleSheet;
var colors = require('./colors');

var styles = StyleSheet.create({
    container: {
        borderRadius: 2
    },
    view: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 8.5,
        paddingHorizontal: 17,
        backgroundColor: colors.white,
        borderRadius: 2,
        shadowColor: colors.black,
        shadowOpacity: 0.12,
        shadowOffset: {
            width: 2,
            height: 2
        }
    },
    text: {
        textAlign: 'center',
        color: colors.grey800,
        fontFamily: '.HelveticaNeueInterface-MediumP4',
        fontSize: 17
    },
    disabledText: {
        color: colors.minBlack
    },
    disabledView: {
        backgroundColor: colors.grey200
    }
});

module.exports = styles;
