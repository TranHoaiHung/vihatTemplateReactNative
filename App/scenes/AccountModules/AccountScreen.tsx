import React, { useCallback, FC, memo, useLayoutEffect } from 'react';
import { View, StyleSheet } from "react-native"
import { useDispatch } from 'react-redux';


const AccountScreen: FC = () => {


    return(
        <View style={styles.container}>

        </View>
    )
}

export default memo(AccountScreen);

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        backgroundColor:"cyan"
    }
})