import React from 'react';
import { Alert, NativeModules, Platform } from 'react-native'


export function isUndefined(e: any) {
    switch (e) {
        case 'undefined': return true;
        case 'NaN': return true;
        case NaN: return true;
        case undefined: return true;
        case '': return true;
        case null: return true;
        case 'null': return true;
        case false: return true;
        case 'false': return true;
        default: return false;
    }
}


export function isNumber(value: any) {
    if (typeof value === 'number') { return true; }
    if (value && value.toString().split('.') === 2 && typeof parseFloat(value) === 'number') { return true; }
    if (isNumeric(value)) { return true; }
    return false;
}

export function isNumeric(str: any) {
    if (isUndefined(str)) { return false; }
    if (str.toString().match(/^[0-9]+$/) === null) { return false; }
    return true;
}

export function isDate(d: any) {
    if (!d) { return false; }
    if (!isNumeric(parseFloat(d)) && new Date(d).getTime() > 0) { return true; }
    if (new Date(parseFloat(d)).getTime() > 0) { return true; }
    return false;
}

export function isArray(value: any) {
    if (!isUndefined(value) && Array.isArray(value)) {
        return true;
    }
    return false;
}

export function showMessage(title: string, message: string, textConfirm: string , onOkPress?: () => void) {
    Alert.alert(
        title,
        message,
        [{
            text: textConfirm,
            onPress: () => onOkPress && onOkPress()
        }],
        { cancelable: false }
    )
}