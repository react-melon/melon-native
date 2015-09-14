/**
 * @file melon-native Button style
 * @author cxtom(cxtom2008@gmail.com)
 */

'use strict';

var StyleSheet = require('react-native').StyleSheet;
var colors = require('./colors');

var styles = StyleSheet.create({
    container: {
        borderRadius: 3
    },
    text: {
        color: colors.grey800,
        fontFamily: '.HelveticaNeueInterface-MediumP4',
        fontSize: 17,
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 3,
        shadowColor: colors.black,
        shadowOpacity: 0.12,
        shadowOffset: {
            width: 1,
            height: 1
        },
        paddingHorizontal: 17,
        paddingVertical: 8,
        backgroundColor: colors.white
    },
    disabledText: {
        color: colors.minBlack
    }
});

module.exports = styles;
